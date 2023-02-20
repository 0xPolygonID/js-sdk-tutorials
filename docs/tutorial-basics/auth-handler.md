---
sidebar_position: 5
---


# Handle authorization request

Tutorial shows how to handle authorization request and  
> codebase can be changed. Still in @beta 

### transit your first state



```js 
  console.log("=============== handle auth request ===============");
  
  const dataStorage = initDataStorage();
  const credentialWallet = await initCredentialWallet(dataStorage);
  const identityWallet = await initIdentityWallet(
    dataStorage,
    credentialWallet
  );
  const circuitStorage = await initCircuitStorage();
  const proofService = await initProofService(identityWallet,credentialWallet,dataStorage.states,circuitStorage)

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

  const ethSigner = new ethers.Wallet('<your private key>',(dataStorage.states as EthStateStorage).provider);
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

  console.log("=================  credential auth request ===================");



  // auth request

  
  var authRequest: AuthorizationRequestMessage = {
    id : 'fe6354fe-3db2-48c2-a779-e39c2dda8d90',
    thid:   'fe6354fe-3db2-48c2-a779-e39c2dda8d90',
    typ: PROTOCOL_CONSTANTS.MediaType.PlainMessage,
    from: issuerDID.toString(),
    type: PROTOCOL_CONSTANTS.PROTOCOL_MESSAGE_TYPE.AUTHORIZATION_REQUEST_MESSAGE_TYPE,
    body: {
      callbackUrl:'http://testcallback.com',
      message:'message to sign',
      scope:[proofReqSig],
      reason:'verify age'
    }
  }
  console.log(JSON.stringify(authRequest));
  
  

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
          birthday: {
            $lt: 20020101
          }
        }
      }
    };




  var authRawRequest = new TextEncoder().encode(JSON.stringify(authRequest));



  // * on the user side */


  console.log("============== handle auth request ==============")
  const authV2Data = await circuitStorage.loadCircuitData(CircuitId.AuthV2);
  let pm = await initPackageManager(authV2Data,proofService.generateAuthV2Inputs.bind(proofService),proofService.verifyState.bind(proofService))

  const authHandler = new AuthHandler(pm,proofService);
  const authHandlerRequest = await authHandler.handleAuthorizationRequest(userDID,authRawRequest);
  console.log(authHandlerRequest);

```
