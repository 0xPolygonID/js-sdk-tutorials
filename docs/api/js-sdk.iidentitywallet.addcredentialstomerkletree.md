---
id: js-sdk.iidentitywallet.addcredentialstomerkletree
title: IIdentityWallet.addCredentialsToMerkleTree() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IIdentityWallet.addCredentialsToMerkleTree() method

Adds verifiable credentials to issuer Claims Merkle tree

**Signature:**

```typescript
addCredentialsToMerkleTree(credentials: W3CCredential[], issuerDID: DID): Promise<Iden3ProofCreationResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  credentials | [W3CCredential](./js-sdk.w3ccredential.md)\[\] | credentials to include in the claims tree |
|  issuerDID | DID | issuer did |

**Returns:**

Promise&lt;[Iden3ProofCreationResult](./js-sdk.iden3proofcreationresult.md)&gt;

`Promise<Iden3ProofCreationResult>`- old tree state and tree state with included credentials
