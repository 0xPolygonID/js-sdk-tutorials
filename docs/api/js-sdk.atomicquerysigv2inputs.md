---
id: js-sdk.atomicquerysigv2inputs
title: AtomicQuerySigV2Inputs class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## AtomicQuerySigV2Inputs class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

AtomicQuerySigV2Inputs representation for credentialAtomicQuerySig.circom Inputs and public signals declaration, marshalling and parsing


 AtomicQuerySigV2Inputs  {BaseConfig}

**Signature:**

```typescript
export declare class AtomicQuerySigV2Inputs extends BaseConfig 
```
**Extends:** [BaseConfig](./js-sdk.baseconfig.md)

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [claim](./js-sdk.atomicquerysigv2inputs.claim.md) |  | [ClaimWithSigProof](./js-sdk.claimwithsigproof.md) | **_(BETA)_** |
|  [claimSubjectProfileNonce](./js-sdk.atomicquerysigv2inputs.claimsubjectprofilenonce.md) |  | bigint | **_(BETA)_** |
|  [currentTimeStamp](./js-sdk.atomicquerysigv2inputs.currenttimestamp.md) |  | number | **_(BETA)_** |
|  [id](./js-sdk.atomicquerysigv2inputs.id.md) |  | Id | **_(BETA)_** |
|  [profileNonce](./js-sdk.atomicquerysigv2inputs.profilenonce.md) |  | bigint | **_(BETA)_** |
|  [query](./js-sdk.atomicquerysigv2inputs.query.md) |  | [Query](./js-sdk.query.md) | **_(BETA)_** |
|  [requestID](./js-sdk.atomicquerysigv2inputs.requestid.md) |  | bigint | **_(BETA)_** |
|  [skipClaimRevocationCheck](./js-sdk.atomicquerysigv2inputs.skipclaimrevocationcheck.md) |  | boolean | **_(BETA)_** |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [inputsMarshal()](./js-sdk.atomicquerysigv2inputs.inputsmarshal.md) |  | **_(BETA)_** marshal inputs |
|  [validate()](./js-sdk.atomicquerysigv2inputs.validate.md) |  | **_(BETA)_** Validate inputs |
