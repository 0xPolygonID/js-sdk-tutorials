---
id: js-sdk.credentialwallet
title: CredentialWallet class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## CredentialWallet class

Wallet instance is a wrapper of CRUD logic for W3C credentials, also it allows to fetch revocation statuses.

 CredentialWallet  implements ICredentialWallet interface

**Signature:**

```typescript
export declare class CredentialWallet implements ICredentialWallet 
```
**Implements:** [ICredentialWallet](./js-sdk.icredentialwallet.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_storage, \_credentialStatusResolverRegistry)](./js-sdk.credentialwallet._constructor_.md) |  | Creates an instance of CredentialWallet. |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [createCredential](./js-sdk.credentialwallet.createcredential.md) |  | (issuer: DID, request: [CredentialRequest](./js-sdk.credentialrequest.md), schema: [JSONSchema](./js-sdk.jsonschema.md)) =&gt; [W3CCredential](./js-sdk.w3ccredential.md) | Creates a W3C verifiable Credential object |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [filterByCredentialSubject(credentials, subject)](./js-sdk.credentialwallet.filterbycredentialsubject.md) |  | Filters given credentials with given credential subject |
|  [findByContextType(context, type)](./js-sdk.credentialwallet.findbycontexttype.md) |  | Finds credentials by JSON-LD schema and type |
|  [findById(id)](./js-sdk.credentialwallet.findbyid.md) |  | Finds the credential by its id |
|  [findByQuery(query)](./js-sdk.credentialwallet.findbyquery.md) |  | Find credential using iden3 query language |
|  [findNonRevokedCredential(creds)](./js-sdk.credentialwallet.findnonrevokedcredential.md) |  |  |
|  [getAuthBJJCredential(did)](./js-sdk.credentialwallet.getauthbjjcredential.md) |  | Finds Auth BJJ credential for given user |
|  [getRevocationStatus(credStatus, credentialStatusResolveOptions)](./js-sdk.credentialwallet.getrevocationstatus.md) |  | Fetches Revocation status depended on type |
|  [getRevocationStatusFromCredential(cred)](./js-sdk.credentialwallet.getrevocationstatusfromcredential.md) |  | Fetches or Builds a revocation status for a given credential Supported types for credentialStatus field: SparseMerkleTreeProof, Iden3ReverseSparseMerkleTreeProof |
|  [list()](./js-sdk.credentialwallet.list.md) |  | List of W3C Credential |
|  [remove(id)](./js-sdk.credentialwallet.remove.md) |  | removes W3C credentials from data storage |
|  [save(credential)](./js-sdk.credentialwallet.save.md) |  | saves W3C credential (upsert) |
|  [saveAll(credentials)](./js-sdk.credentialwallet.saveall.md) |  | saves the batch of W3C credentials (upsert) |
