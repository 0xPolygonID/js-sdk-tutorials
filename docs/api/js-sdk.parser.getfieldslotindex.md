---
id: js-sdk.parser.getfieldslotindex
title: Parser.getFieldSlotIndex() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## Parser.getFieldSlotIndex() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

GetFieldSlotIndex return index of slot from 0 to 7 (each claim has by default 8 slots) for non-merklized claims

**Signature:**

```typescript
getFieldSlotIndex(field: string, schemaBytes: Uint8Array): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  field | string | field name |
|  schemaBytes | Uint8Array | json schema bytes |

**Returns:**

number

`number`
