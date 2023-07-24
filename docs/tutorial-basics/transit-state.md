---
sidebar_position: 2
---

# Transit state

State transition is a process of publishing the new issuer state after the claim is added to the claim tree.


### transit your first state

```typescript
async function transitState() {
    console.log("=============== transit state ===============");
  
    const dataStorage = initDataStorage();
    const credentialWallet = await initCredentialWallet(dataStorage);
    const identityWallet = await initIdentityWallet(
      dataStorage,
      credentialWallet
    );
    const proofService = await initProofService(identityWallet,credentialWallet,dataStorage.states)
  
    const { did:userDID, credential:authBJJCredentialUser } =
      await identityWallet.createIdentity({
      method: DidMethod.Iden3,
      blockchain: Blockchain.Polygon,
      networkId: NetworkId.Mumbai,
      seed: seedPhrase,
      revocationOpts: {
        type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
        id: "https://rhs-staging.polygonid.me"
      }
    });
  
    console.log("=============== user did ===============");
    console.log(userDID.string());
  
    const { did:issuerDID, credential:issuerAuthBJJCredential } =
      await identityWallet.createIdentity({
        method: DidMethod.Iden3,
        blockchain: Blockchain.Polygon,
        networkId: NetworkId.Mumbai,
        seed: seedPhrase,
        revocationOpts: {
          type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
          id: "https://rhs-staging.polygonid.me"
        }
      };
  
    const credentialRequest: CredentialRequest = {
      credentialSchema:
        "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json",
      type: "KYCAgeCredential",
      credentialSubject: {
        id: userDID.string(),
        birthday: 19960424,
        documentType: 99,
      },
      expiration: 12345678888,
      revocationOpts: {
        type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
        id: "https://rhs-staging.polygonid.me"
      }
    };
    const credential = await identityWallet.issueCredential(
      issuerDID,
      credentialRequest
    );
  
  
    await dataStorage.credential.saveCredential(credential)


    console.log("================= generate Iden3SparseMerkleTreeProof =======================")

    const res = await identityWallet.addCredentialsToMerkleTree([credential], issuerDID);

    console.log("================= push states to rhs ===================")

    await identityWallet.publishStateToRHS(issuerDID, "https://rhs-staging.polygonid.me");

    console.log("================= publish to blockchain ===================")

    const ethSigner = new ethers.Wallet(' < your private key here >',(dataStorage.states as EthStateStorage).provider);
    const txId = await proofService.transitState(
      issuerDID,
      res.oldTreeState,
      true,
      dataStorage.states,
      ethSigner
    );

     console.log("================= transaction hash ===================")
    console.log(txId)

  }

```

> :bulb: you also need to use ethers wallet to be able to sign transaction!

> :warning: be careful with private keys

### init proof service

```typescript
async function initProofService(
    identityWallet:IIdentityWallet,
    credentialWallet:ICredentialWallet,
    stateStorage:IStateStorage
) :Promise<ProofService>{
    const circuitStorage = new CircuitStorage(new InMemoryDataSource<CircuitData>());

    const loader = new FSKeyLoader(path.join(__dirname, '../testdata'));

   
    await circuitStorage.saveCircuitData(CircuitId.StateTransition, {
      circuitId: CircuitId.StateTransition,
      wasm: await loader.load(`${CircuitId.StateTransition.toString()}/circuit.wasm`),
      provingKey: await loader.load(`${CircuitId.StateTransition.toString()}/circuit_final.zkey`),
      verificationKey: await loader.load(
        `${CircuitId.StateTransition.toString()}/verification_key.json`
      )
    });

    return new ProofService(identityWallet, credentialWallet, circuitStorage, stateStorage);

}
```

> :bulb: <i>CircuitStorage </i> Contains proving key of state transition circuit which is need for proof generation
