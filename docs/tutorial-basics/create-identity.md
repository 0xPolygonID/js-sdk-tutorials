---
sidebar_position: 1
---

# Create identity

Identity creation contains of two main parts: creation of identifier and Auth BJJ Credential

> codebase can be changed. Still in @beta

### Create your first identity

```typescript
async function identityCreation(){
    
    console.log("=============== key creation ===============")

    const dataStorage = initDataStorage();
    const credentialWallet = await initCredentialWallet(dataStorage);
    const identityWallet = await initIdentityWallet(
      dataStorage,
      credentialWallet
    );
  
    const { did, credential } = await await wallet.createIdentity({
      method: DidMethod.Iden3,
      blockchain: Blockchain.Polygon,
      networkId: NetworkId.Main,
      seed: seedPhraseIssuer,
      revocationOpts: {
        type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
        baseUrl: 'http://rhs.com/node'
      }
    });
  
    console.log("=============== did ===============")
    console.log(did.toString());
    console.log("=============== Auth BJJ credential ===============")
    console.log(JSON.stringify(credential));
}
```

> :bulb: <i>identityWallet </i> is an entry point to work with your identities. Create ones, generate profiles, issue credential and many more!!!

### let's see the details

#### data source

```typescript
function initDataStorage(): IDataStorage {

   let conf :EthConnectionConfig= defaultEthConnectionConfig;
   conf.contractAddress = "< contract address >"
   conf.url  = "< rpc url > "

   var dataStorage = {
    credential: new CredentialStorage(new InMemoryDataSource<W3CCredential>()),
    identity: new IdentityStorage(
      new InMemoryDataSource<Identity>(),
      new InMemoryDataSource<Profile>()
    ),
    mt: new InMemoryMerkleTreeStorage(40),
    
    states: new EthStateStorage(defaultEthConnectionConfig),
  };
  return dataStorage;
}

```

> :bulb: <i>dataStorage </i> is storage interface that unite all main storages for the wallets. Each storage uses data source, which now can be a browser local storage or in memory for tests. Of cource you can implement your own data sources by implementing `IDataSource<Type>` interface

#### credential wallet

```typescript
async function initCredentialWallet(
  dataStorage: IDataStorage
): Promise<CredentialWallet> {
  return new CredentialWallet(dataStorage);
}

```

> :bulb: simple as that!

#### identity wallet

```typescript
async function initIdentityWallet(
  dataStorage: IDataStorage,
  credentialWallet: ICredentialWallet
): Promise<IIdentityWallet> {
  const memoryKeyStore = new InMemoryPrivateKeyStore();
  const bjjProvider = new BjjProvider(KmsKeyType.BabyJubJub, memoryKeyStore);
  const kms = new KMS();
  kms.registerKeyProvider(KmsKeyType.BabyJubJub, bjjProvider);

  return new IdentityWallet(kms, dataStorage, credentialWallet);
}
```

> :bulb: <i>identityWallet </i> requires kms (key management system) :key: which is initialized with different key providers. It's required to have a BJJ key provider implementation to use work with Polygon identity.

> :warning: do not use unprotected key stores in production!
