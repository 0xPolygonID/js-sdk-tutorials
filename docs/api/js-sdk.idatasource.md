---
id: js-sdk.idatasource
title: IDataSource interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IDataSource interface

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Generic Key/Value Data Source for crud operation


 IDataSource  Type - generic type

**Signature:**

```typescript
export interface IDataSource<Type> 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [delete(key, keyName)](./js-sdk.idatasource.delete.md) | **_(BETA)_** deletes data value for given key with an optional key name |
|  [get(key, keyName)](./js-sdk.idatasource.get.md) | **_(BETA)_** returns data value for key value and optional key name |
|  [load()](./js-sdk.idatasource.load.md) | **_(BETA)_** load all object with Type from data source |
|  [save(key, value, keyName)](./js-sdk.idatasource.save.md) | **_(BETA)_** Save value under the key with optional key name |
