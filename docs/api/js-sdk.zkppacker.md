---
id: js-sdk.zkppacker
title: ZKPPacker class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## ZKPPacker class

Packer that can pack message to JWZ token, and unpack and validate JWZ envelope

 ZKPPacker  implements IPacker interface

**Signature:**

```typescript
export declare class ZKPPacker implements IPacker 
```
**Implements:** [IPacker](./js-sdk.ipacker.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(provingParamsMap, verificationParamsMap)](./js-sdk.zkppacker._constructor_.md) |  | Creates an instance of ZKPPacker. |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [provingParamsMap](./js-sdk.zkppacker.provingparamsmap.md) |  | Map&lt;string, [ProvingParams](./js-sdk.provingparams.md)&gt; |  |
|  [verificationParamsMap](./js-sdk.zkppacker.verificationparamsmap.md) |  | Map&lt;string, [VerificationParams](./js-sdk.verificationparams.md)&gt; |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [mediaType()](./js-sdk.zkppacker.mediatype.md) |  |  |
|  [pack(payload, params)](./js-sdk.zkppacker.pack.md) |  | creates JSON Web Zeroknowledge token |
|  [unpack(envelope)](./js-sdk.zkppacker.unpack.md) |  | validate envelope which is jwz token |
