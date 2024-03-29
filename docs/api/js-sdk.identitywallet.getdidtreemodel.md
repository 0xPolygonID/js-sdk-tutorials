---
id: js-sdk.identitywallet.getdidtreemodel
title: IdentityWallet.getDIDTreeModel() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IdentityWallet.getDIDTreeModel() method

Gets a tree model for given did that includes claims tree, revocation tree, the root of roots tree and calculated state hash

**Signature:**

```typescript
getDIDTreeModel(did: DID): Promise<TreesModel>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  did | DID | did which trees info we need to receive |

**Returns:**

Promise&lt;[TreesModel](./js-sdk.treesmodel.md)&gt;

`Promise<TreesModel>`
