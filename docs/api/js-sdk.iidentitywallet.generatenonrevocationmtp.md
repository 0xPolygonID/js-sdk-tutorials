---
id: js-sdk.iidentitywallet.generatenonrevocationmtp
title: IIdentityWallet.generateNonRevocationMtp() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IIdentityWallet.generateNonRevocationMtp() method

Generates proof of credential revocation nonce inclusion / non-inclusion to the given revocation tree and its root or to the current root of the Revocation tree in the given Merkle tree storage.

**Signature:**

```typescript
generateNonRevocationMtp(did: DID, credential: W3CCredential, treeState?: TreeState): Promise<MerkleTreeProofWithTreeState>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  did | DID |  |
|  credential | [W3CCredential](./js-sdk.w3ccredential.md) |  |
|  treeState | [TreeState](./js-sdk.treestate.md) | _(Optional)_ |

**Returns:**

Promise&lt;[MerkleTreeProofWithTreeState](./js-sdk.merkletreeproofwithtreestate.md)&gt;

`Promise<MerkleTreeProofWithTreeState>` - MerkleTreeProof and TreeState on which proof has been generated
