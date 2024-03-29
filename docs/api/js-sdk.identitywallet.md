---
id: js-sdk.identitywallet
title: IdentityWallet class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IdentityWallet class

Wallet instance to manage the digital identity based on iden3 protocol allows to: create identity/profile, sign payloads (bigint / bytes), generate keys, generate Merkle tree proofs of inclusion / non-inclusion to Merkle trees, issue credentials with a BJJSignature and Iden3SparseMerkleTree Proofs, revoke credentials, add credentials to Merkle trees, push states to reverse hash service


 IdentityWallet - class

 implements IIdentityWallet interface

**Signature:**

```typescript
export declare class IdentityWallet implements IIdentityWallet 
```
**Implements:** [IIdentityWallet](./js-sdk.iidentitywallet.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_kms, \_storage, \_credentialWallet)](./js-sdk.identitywallet._constructor_.md) |  | Constructs a new instance of the <code>IdentityWallet</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [addCredentialsToMerkleTree(credentials, issuerDID)](./js-sdk.identitywallet.addcredentialstomerkletree.md) |  | Adds verifiable credentials to issuer Claims Merkle tree |
|  [createIdentity(opts)](./js-sdk.identitywallet.createidentity.md) |  | Create Identity creates Auth BJJ credential, Merkle trees for claims, revocations and root of roots, adds auth BJJ credential to claims tree and generates mtp of inclusion based on the resulting state it provides an identifier in DID form. |
|  [createProfile(did, nonce, verifier)](./js-sdk.identitywallet.createprofile.md) |  | Creates profile based on genesis identifier |
|  [findOwnedCredentialsByDID(did, query)](./js-sdk.identitywallet.findownedcredentialsbydid.md) |  |  |
|  [generateCredentialMtp(did, credential, treeState)](./js-sdk.identitywallet.generatecredentialmtp.md) |  |  |
|  [generateIden3SparseMerkleTreeProof(issuerDID, credentials, txId, blockNumber, blockTimestamp)](./js-sdk.identitywallet.generateiden3sparsemerkletreeproof.md) |  | Generate Iden3SparseMerkleTree proof of inclusion to issuer state of specific credentials |
|  [generateKey(keyType)](./js-sdk.identitywallet.generatekey.md) |  | Generates a new key |
|  [generateNonRevocationMtp(did, credential, treeState)](./js-sdk.identitywallet.generatenonrevocationmtp.md) |  | Generates proof of credential revocation nonce inclusion / non-inclusion to the given revocation tree and its root or to the current root of the Revocation tree in the given Merkle tree storage. |
|  [getCoreClaimFromCredential(credential)](./js-sdk.identitywallet.getcoreclaimfromcredential.md) |  |  |
|  [getDIDTreeModel(did)](./js-sdk.identitywallet.getdidtreemodel.md) |  | Gets a tree model for given did that includes claims tree, revocation tree, the root of roots tree and calculated state hash |
|  [getGenesisDIDMetadata(did)](./js-sdk.identitywallet.getgenesisdidmetadata.md) |  | gets profile nonce by it's id. if profile is genesis identifier - 0 is returned |
|  [getProfileByVerifier(verifier)](./js-sdk.identitywallet.getprofilebyverifier.md) |  |  |
|  [getProfilesByDID(did)](./js-sdk.identitywallet.getprofilesbydid.md) |  | gets profile identity by genesis identifiers |
|  [issueCredential(issuerDID, req, opts)](./js-sdk.identitywallet.issuecredential.md) |  | Issues new credential from issuer according to the claim request |
|  [publishStateToRHS(issuerDID, rhsURL, revokedNonces)](./js-sdk.identitywallet.publishstatetorhs.md) |  |  |
|  [revokeCredential(issuerDID, credential)](./js-sdk.identitywallet.revokecredential.md) |  |  |
|  [sign(message, credential)](./js-sdk.identitywallet.sign.md) |  | Signs a payload of arbitrary size with an Auth BJJ Credential that identifies a key for signing. |
|  [signChallenge(challenge, credential)](./js-sdk.identitywallet.signchallenge.md) |  | Signs a big integer with an Auth BJJ Credential that identifies a key for signing. |
