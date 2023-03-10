---
id: js-sdk.iidentitywallet.generatekey
title: IIdentityWallet.generateKey() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IIdentityWallet.generateKey() method

Generates a new key

**Signature:**

```typescript
generateKey(keyType: KmsKeyType): Promise<KmsKeyId>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  keyType | [KmsKeyType](./js-sdk.kmskeytype.md) | supported key type by KMS |

**Returns:**

Promise&lt;[KmsKeyId](./js-sdk.kmskeyid.md)&gt;

`Promise<KmsKeyId>` - creates a new key BJJ or ECDSA
