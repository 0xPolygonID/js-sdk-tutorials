---
sidebar_position: 2
---

# transit state

State transition is a process of publishing the new issuer state after the claim is added to the claim tree.

> codebase can be changed. Still in @beta 

### transit your first state


```javascript
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
      await identityWallet.createIdentity(
        "http://mytestwallet.com/", // this is url that will be a part of auth bjj credential identifier
        {
          method: core.DidMethod.Iden3,
          blockchain: core.Blockchain.Polygon,
          networkId: core.NetworkId.Mumbai,
          rhsUrl: "https://rhs-staging.polygonid.me", // url to check revocation status of auth bjj credential
        }
      );
  
    console.log("=============== user did ===============");
    console.log(userDID.toString());
  
    const { did:issuerDID, credential:issuerAuthBJJCredential } =
      await identityWallet.createIdentity(
        "http://mytestwallet.com/", // this is url that will be a part of auth bjj credential identifier
        {
          method: core.DidMethod.Iden3,
          blockchain: core.Blockchain.Polygon,
          networkId: core.NetworkId.Mumbai,
          rhsUrl: "https://rhs-staging.polygonid.me", // url to check revocation status of auth bjj credential
        }
      );
  
    const credentialRequest: CredentialRequest = {
      credentialSchema:
        "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json",
      type: "KYCAgeCredential",
      credentialSubject: {
        id: userDID.toString(),
        birthday: 19960424,
        documentType: 99,
      },
      expiration: 12345678888,
    };
    const credential = await identityWallet.issueCredential(
      issuerDID,
      credentialRequest,
      "http://mytestwallet.com/", // host url that will a prefix of credential identifier
      {
        withRHS: "https://rhs-staging.polygonid.me", // reverse hash service is used to check
      }
    );
  
  
    dataStorage.credential.saveCredential(credential)


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

```javascript
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
