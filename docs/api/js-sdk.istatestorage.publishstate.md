---
id: js-sdk.istatestorage.publishstate
title: IStateStorage.publishState() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IStateStorage.publishState() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

method to publish state onchain

**Signature:**

```typescript
publishState(proof: ZKProof, signer: Signer): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  proof | ZKProof | proof to publish |
|  signer | Signer | signer of transaction |

**Returns:**

Promise&lt;string&gt;

`Promise<string>` - transaction identifier
