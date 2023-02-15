---
sidebar_position: 2
---

# Issue credential

Credential is issued to the user with a BJJ signature proof

> codebase can be changed. Still in @beta 

### Create your first credential


```javascript
async function issueCredential() {
  console.log("=============== issue credential ===============");

  const dataStorage = initDataStorage();
  const credentialWallet = await initCredentialWallet(dataStorage);
  const identityWallet = await initIdentityWallet(
    dataStorage,
    credentialWallet
  );

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

  console.log("===============  credential ===============")
  console.log(JSON.stringify(credential));

  dataStorage.credential.saveCredential(credential)
}
```

> :bulb: <i>CredentialRequest </i> contains credential type,  url to json schema, credential subject data and expiration time.
Credential is created with Iden3ReverseMerkleTreeProof credential status or with SparseMerkleTree status if rhs option is not set.

### credential example

```json
{
  "id": "http://metamask.com/f2102347-a0a8-4e99-8ff7-a7b39d992372",
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/iden3credential-v2.json-ld",
    "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld"
  ],
  "type": [
    "VerifiableCredential",
    "KYCAgeCredential"
  ],
  "expirationDate": "2361-03-21T19:14:48.000Z",
  "issuanceDate": "2023-02-07T20:51:19.764Z",
  "credentialSubject": {
    "id": "did:iden3:polygon:mumbai:x1PFECRcqMcyKE116E7PwGCxkyARJ8ybjkpA2zo8g",
    "birthday": 19960424,
    "documentType": 99,
    "type": "KYCAgeCredential"
  },
  "issuer": "did:iden3:polygon:mumbai:wvFiTF7hZKHfyR4ZmHw4NcBg2ZBR4FYdoQ3AAX95e",
  "credentialSchema": {
    "id": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json",
    "type": "JsonSchemaValidator2018"
  },
  "credentialStatus": {
    "id": "https://rhs-staging.polygonid.me",
    "revocationNonce": 5746,
    "type": "Iden3ReverseSparseMerkleTreeProof"
  },
  "proof": [
    {
      "type": "BJJSignature2021",
      "issuerData": {
        "id": "did:iden3:polygon:mumbai:wvFiTF7hZKHfyR4ZmHw4NcBg2ZBR4FYdoQ3AAX95e",
        "state": {
          "rootOfRoots": "0000000000000000000000000000000000000000000000000000000000000000",
          "revocationTreeRoot": "0000000000000000000000000000000000000000000000000000000000000000",
          "claimsTreeRoot": "c172674faba36517a63ef3a7282d59107fccac006fe958f73fd5e103464c940f",
          "value": "5185762f391463a6dcd7eb45aa7294856c48bc41567a15cf4727b5b0a9d71e05"
        },
        "authCoreClaim": "cca3371a6cb1b715004407e325bd993c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004125a5d7c27a15074ffbb145429c6d83c8a322586726079c59d59fe32dad311effe0b77602281b97d0616c1e676219fa1e0b3819770e026406961df54634381b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "mtp": {
          "existence": true,
          "siblings": []
        },
        "credentialStatus": {
          "id": "https://rhs-staging.polygonid.me",
          "revocationNonce": 0,
          "type": "Iden3ReverseSparseMerkleTreeProof"
        }
      },
      "coreClaim": "c9b2370371b7fa8b3dab2a5ba81b68380a00000000000000000000000000000001128563838738ce3dc774f5b3c617b33e3f730238caae4880c2fa1f30300d00689230010000000000000000000000000000000000000000000000000000000063000000000000000000000000000000000000000000000000000000000000007216000000000000281cdcdf0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "signature": "3fcc547c0af8fb0d05f86ddd92f54ed564364cb4f7a82a4c01875f42dd4fd8095d41dc02138e10b39b4c4bc185707efc754842f62fd0d97a1cc7468a0d4f8703"
    }
  ]
}
```