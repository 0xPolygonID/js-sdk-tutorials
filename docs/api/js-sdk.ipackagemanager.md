---
id: js-sdk.ipackagemanager
title: IPackageManager interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IPackageManager interface

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Interface for defining the registry of packers


 IPackageManager

**Signature:**

```typescript
export interface IPackageManager 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [packers](./js-sdk.ipackagemanager.packers.md) |  | Map&lt;[MediaType](./js-sdk.protocol_constants.mediatype.md), [IPacker](./js-sdk.ipacker.md)&gt; | <p> Map of packers key is media type, value is packer implementation</p><p> {Map&lt;MediaType, IPacker&gt;}</p> |

## Methods

|  Method | Description |
|  --- | --- |
|  [getMediaType(envelope)](./js-sdk.ipackagemanager.getmediatype.md) |  gets media type from an envelope |
|  [pack(mediaType, payload, params)](./js-sdk.ipackagemanager.pack.md) |  packs payload with a packer that is assigned to media type forwards packer params to implementation |
|  [registerPackers(packers)](./js-sdk.ipackagemanager.registerpackers.md) |  registers new packer in the manager |
|  [unpack(envelope)](./js-sdk.ipackagemanager.unpack.md) |  unpacks packed envelope to basic protocol message and returns media type of the envelope |
|  [unpackWithType(mediaType, envelope)](./js-sdk.ipackagemanager.unpackwithtype.md) |  unpacks an envelope with a known media type |
