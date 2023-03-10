---
id: js-sdk.atomicquerymtpv2pubsignals
title: AtomicQueryMTPV2PubSignals class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## AtomicQueryMTPV2PubSignals class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Public signals


 AtomicQueryMTPV2PubSignals  {BaseConfig}

**Signature:**

```typescript
export declare class AtomicQueryMTPV2PubSignals extends BaseConfig 
```
**Extends:** [BaseConfig](./js-sdk.baseconfig.md)

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [claimPathKey?](./js-sdk.atomicquerymtpv2pubsignals.claimpathkey.md) |  | bigint | **_(BETA)_** _(Optional)_ |
|  [claimPathNotExists](./js-sdk.atomicquerymtpv2pubsignals.claimpathnotexists.md) |  | number | **_(BETA)_** |
|  [claimSchema](./js-sdk.atomicquerymtpv2pubsignals.claimschema.md) |  | SchemaHash | **_(BETA)_** |
|  [isRevocationChecked](./js-sdk.atomicquerymtpv2pubsignals.isrevocationchecked.md) |  | number | **_(BETA)_** |
|  [issuerClaimIdenState?](./js-sdk.atomicquerymtpv2pubsignals.issuerclaimidenstate.md) |  | Hash | **_(BETA)_** _(Optional)_ |
|  [issuerClaimNonRevState?](./js-sdk.atomicquerymtpv2pubsignals.issuerclaimnonrevstate.md) |  | Hash | **_(BETA)_** _(Optional)_ |
|  [issuerID?](./js-sdk.atomicquerymtpv2pubsignals.issuerid.md) |  | Id | **_(BETA)_** _(Optional)_ |
|  [merklized](./js-sdk.atomicquerymtpv2pubsignals.merklized.md) |  | number | **_(BETA)_** |
|  [operator](./js-sdk.atomicquerymtpv2pubsignals.operator.md) |  | number | **_(BETA)_** |
|  [requestID?](./js-sdk.atomicquerymtpv2pubsignals.requestid.md) |  | bigint | **_(BETA)_** _(Optional)_ |
|  [slotIndex](./js-sdk.atomicquerymtpv2pubsignals.slotindex.md) |  | number | **_(BETA)_** |
|  [timestamp](./js-sdk.atomicquerymtpv2pubsignals.timestamp.md) |  | number | **_(BETA)_** |
|  [userID?](./js-sdk.atomicquerymtpv2pubsignals.userid.md) |  | Id | **_(BETA)_** _(Optional)_ |
|  [value](./js-sdk.atomicquerymtpv2pubsignals.value.md) |  | bigint\[\] | **_(BETA)_** |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [pubSignalsUnmarshal(data)](./js-sdk.atomicquerymtpv2pubsignals.pubsignalsunmarshal.md) |  | **_(BETA)_** PubSignalsUnmarshal unmarshal credentialAtomicQueryMTP.circom public signals array to AtomicQueryMTPPubSignals |
