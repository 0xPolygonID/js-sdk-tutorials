---
sidebar_position: 4
---

# Generate sig / mtp proofs

Credential is issued to the user with a BJJ signature proof, so we can generate a zkp that we have such credentials!!


```typescript
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
    await wallet.createIdentity({
      method: DidMethod.Iden3,
      blockchain: Blockchain.Polygon,
      networkId: NetworkId.Mumbai,
      seed: seedPhraseIssuer,
      revocationOpts: {
        type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
        baseUrl: "https://rhs-staging.polygonid.me"
      }
    });

  console.log("=============== user did ===============");
  console.log(userDID.string());

  const { did:issuerDID, credential:issuerAuthBJJCredential } =
    await wallet.createIdentity({
      method: DidMethod.Iden3,
      blockchain: Blockchain.Polygon,
      networkId: NetworkId.Mumbai,
      seed: seedPhraseIssuer,
      revocationOpts: {
        type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
        baseUrl: "https://rhs-staging.polygonid.me"
      }
    });

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
        baseUrl: "https://rhs-staging.polygonid.me"
    }
  };

  const credential = await identityWallet.issueCredential(issuerDID, credentialRequest);

  await dataStorage.credential.saveCredential(credential)

  console.log("================= generate Iden3SparseMerkleTreeProof =======================")

  const res = await identityWallet.addCredentialsToMerkleTree([credential], issuerDID);

  console.log("================= push states to rhs ===================")

  await identityWallet.publishStateToRHS(issuerDID, "https://rhs-staging.polygonid.me");

  console.log("================= publish to blockchain ===================")

  const ethSigner = new ethers.Wallet('',(dataStorage.states as EthStateStorage).provider);
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

  // find and choose credential to generate proof
  let credsToChooseForZKPReq = await credentialWallet.findByQuery(
    proofReqSig.query
  );

  const { proof } = await proofService.generateProof(
    proofReqSig,
    userDID,
    credsToChooseForZKPReq[0] // e.g. user chose first
  );

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


    credsToChooseForZKPReq = await credentialWallet.findByQuery(
      proofReqMtp.query
    );
    const { proof, pub_signals } = await proofService.generateProof(
      proofReqMtp,
      userDID,
      credsToChooseForZKPReq[0]
    );
    console.log(JSON.stringify(proofMTP));
    const mtpProofOk = await proofService.verifyProof({ proof, pub_signals }, CircuitId.AtomicQueryMTPV2);
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

```typescript
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

  // find and choose credential to generate proof
  let credsToChooseForZKPReq = await credentialWallet.findByQuery(
    proofReqSig.query
  );

  const { proof } = await proofService.generateProof(
    proofReqSig,
    userDID,
    credsToChooseForZKPReq[0] // e.g. user chose first
  );
```

> :bulb: <i>ZeroKnowledgeProofRequest </i> is a protocol proof request, in this case for credential with a BJJ signature proof

### mtp proof request

```typescript
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

    credsToChooseForZKPReq = await credentialWallet.findByQuery(
      proofReqMtp.query
    );
    const { proof, pub_signals } = await proofService.generateProof(
      proofReqMtp,
      userDID,
      credsToChooseForZKPReq[0]
    );
    console.log(JSON.stringify(proof));
    const mtpProofOk = await proofService.verifyProof({ proof, pub_signals }, CircuitId.AtomicQueryMTPV2);
    console.log("valid: ", mtpProofOk);

```

> :bulb: <i>ZeroKnowledgeProofRequest </i> is a protocol proof request, in this case for credential with a Iden3SparseMerkleTreeProof
