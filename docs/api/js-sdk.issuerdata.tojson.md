---
id: js-sdk.issuerdata.tojson
title: IssuerData.toJSON() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IssuerData.toJSON() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

**Signature:**

```typescript
toJSON(): this & {
        mtp: {
            existence: boolean | undefined;
            siblings: import("@iden3/js-merkletree").Siblings | undefined;
            nodeAux: import("@iden3/js-merkletree").NodeAux | undefined;
        };
    };
```
**Returns:**

this &amp; { mtp: { existence: boolean \| undefined; siblings: import("@iden3/js-merkletree").Siblings \| undefined; nodeAux: import("@iden3/js-merkletree").NodeAux \| undefined; }; }

`string`
