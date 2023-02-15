---
sidebar_position: 4
---

# generate sig / mtp proofs

Credential is issued to the user with a BJJ signature proof, so we can generate a zkp that we have such credentials!!

> codebase can be changed. Still in @beta


```javascript
async function generateProofs() {
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
      "http://metamask.com/", // this is url that will be a part of auth bjj credential identifier
      "https://rhs-staging.polygonid.me", // url to check revocation status of auth bjj credential
      {
        method: core.DidMethod.Iden3,
        blockchain: core.Blockchain.Polygon,
        networkId: core.NetworkId.Mumbai,
      }
    );

  console.log("=============== user did ===============");
  console.log(userDID.toString());

  const { did:issuerDID, credential:issuerAuthBJJCredential } =
    await identityWallet.createIdentity(
      "http://metamask.com/", // this is url that will be a part of auth bjj credential identifier
      "https://rhs-staging.polygonid.me", // url to check revocation status of auth bjj credential
      {
        method: core.DidMethod.Iden3,
        blockchain: core.Blockchain.Polygon,
        networkId: core.NetworkId.Mumbai,
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
    "http://metamask.com/", // host url that will a prefix of credential identifier
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

  const ethSigner = new ethers.Wallet('08562dec34e81fbc26f719048efb075f217bf911521d4e674cf7b7ad51f989eb',(dataStorage.states as EthStateStorage).provider);
  const txId = await proofService.transitState(
    issuerDID,
    res.oldTreeState,
    true,
    dataStorage.states,
    ethSigner
  );
  console.log(txId)

  console.log("================= generate credentialAtomicSigV2 ===================")

  const proofReqSig: ZeroKnowledgeProofRequest = {
    id: 1,
    circuitId: CircuitId.AtomicQuerySigV2,
    optional: false,
    query: {
      allowedIssuers: ['*'],
      type: credentialRequest.type,
      context:
        'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld',
      req: {
        documentType: {
          $eq: 99
        }
      }
    }
  };

  const { proof } = await proofService.generateProof(proofReqSig, userDID);

  console.log(JSON.stringify(proof));
  const sigProofOk = await proofService.verifyProof(proof, CircuitId.AtomicQuerySigV2);
  console.log("valid: ", sigProofOk);




  console.log("================= generate credentialAtomicMTPV2 ===================")


    const credsWithIden3MTPProof = await identityWallet.generateIden3SparseMerkleTreeProof(
      issuerDID,
      res.credentials,
      txId
    );

    console.log(credsWithIden3MTPProof)
    credentialWallet.saveAll(credsWithIden3MTPProof);

    const proofReqMtp: ZeroKnowledgeProofRequest = {
      id: 1,
      circuitId: CircuitId.AtomicQueryMTPV2,
      optional: false,
      query: {
        allowedIssuers: ['*'],
        type: credentialRequest.type,
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld',
        req: {
          documentType: {
            $eq: 99
          }
        }
      }
    };

    const { proof:proofMTP } = await proofService.generateProof(proofReqMtp, userDID);
    console.log(JSON.stringify(proofMTP));
    const mtpProofOk = await proofService.verifyProof(proof, CircuitId.AtomicQueryMTPV2);
    console.log("valid: ", mtpProofOk);

}
```

### init circuit storage with mtp / sig data

```js
async function initProofService(
    identityWallet:IIdentityWallet,
    credentialWallet:ICredentialWallet,
    stateStorage:IStateStorage
) :Promise<ProofService>{
    const circuitStorage = new CircuitStorage(new InMemoryDataSource<CircuitData>());

    const loader = new FSKeyLoader(path.join(__dirname, '../testdata'));

    await circuitStorage.saveCircuitData(CircuitId.AtomicQuerySigV2, {
      circuitId: CircuitId.AtomicQuerySigV2,
      wasm: await loader.load(`${CircuitId.AtomicQuerySigV2.toString()}/circuit.wasm`),
      provingKey: await loader.load(`${CircuitId.AtomicQuerySigV2.toString()}/circuit_final.zkey`),
      verificationKey: await loader.load(
        `${CircuitId.AtomicQuerySigV2.toString()}/verification_key.json`
      )
    });

    await circuitStorage.saveCircuitData(CircuitId.StateTransition, {
      circuitId: CircuitId.StateTransition,
      wasm: await loader.load(`${CircuitId.StateTransition.toString()}/circuit.wasm`),
      provingKey: await loader.load(`${CircuitId.StateTransition.toString()}/circuit_final.zkey`),
      verificationKey: await loader.load(
        `${CircuitId.StateTransition.toString()}/verification_key.json`
      )
    });

    await circuitStorage.saveCircuitData(CircuitId.AtomicQueryMTPV2, {
      circuitId: CircuitId.AtomicQueryMTPV2,
      wasm: await loader.load(`${CircuitId.AtomicQueryMTPV2.toString()}/circuit.wasm`),
      provingKey: await loader.load(`${CircuitId.AtomicQueryMTPV2.toString()}/circuit_final.zkey`),
      verificationKey: await loader.load(
        `${CircuitId.AtomicQueryMTPV2.toString()}/verification_key.json`
      )
    });

    return new ProofService(identityWallet, credentialWallet, circuitStorage, stateStorage);

}

```

### signature proof request

```javascript
console.log(
  "================= generate credentialAtomicSigV2 ==================="
);

const proofReqSig: ZeroKnowledgeProofRequest = {
  id: 1,
  circuitId: CircuitId.AtomicQuerySigV2,
  optional: false,
  query: {
    allowedIssuers: ["*"],
    type: credentialRequest.type,
    context:
      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
    req: {
      documentType: {
        $eq: 99,
      },
    },
  },
};

const { proof } = await proofService.generateProof(proofReqSig, userDID);
```
> :bulb: <i>ZeroKnowledgeProofRequest </i> is a protocol proof request, in this case for credential with a BJJ signature proof

### mtp proof request

```javascript
console.log(
  "================= generate credentialAtomicSigV2 ==================="
);

const proofReqMtp: ZeroKnowledgeProofRequest = {
  id: 1,
  circuitId: CircuitId.AtomicQueryMTPV2,
  optional: false,
  query: {
    allowedIssuers: ["*"],
    type: credentialRequest.type,
    context:
      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
    req: {
      documentType: {
        $eq: 99,
      },
    },
  },
};

const { proof } = await proofService.generateProof(proofReqSig, userDID);
```

> :bulb: <i>ZeroKnowledgeProofRequest </i> is a protocol proof request, in this case for credential with a Iden3SparseMerkleTreeProof