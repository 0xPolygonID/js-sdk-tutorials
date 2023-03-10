---
id: js-sdk.plainpacker
title: PlainPacker class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## PlainPacker class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Plain packer just serializes bytes to JSON and adds media type


 PlainPacker  implements IPacker interface

**Signature:**

```typescript
export declare class PlainPacker implements IPacker 
```
**Implements:** [IPacker](./js-sdk.ipacker.md)

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [mediaType()](./js-sdk.plainpacker.mediatype.md) |  | **_(BETA)_** returns media type for plain message |
|  [pack(payload, \_params)](./js-sdk.plainpacker.pack.md) |  | **_(BETA)_** Pack returns packed message to transport envelope |
|  [unpack(envelope)](./js-sdk.plainpacker.unpack.md) |  | **_(BETA)_** Unpack returns unpacked message from transport envelope |
