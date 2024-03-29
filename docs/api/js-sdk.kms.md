---
id: js-sdk.kms
title: KMS class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## KMS class

Key management system class contains different key providers. allows to register custom provider, create key, get public key and sign

 KMS - class

**Signature:**

```typescript
export declare class KMS 
```

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [createKeyFromSeed(keyType, bytes)](./js-sdk.kms.createkeyfromseed.md) |  | generates a new key and returns it kms key id |
|  [publicKey(keyId)](./js-sdk.kms.publickey.md) |  | gets public key for key id |
|  [registerKeyProvider(keyType, keyProvider)](./js-sdk.kms.registerkeyprovider.md) |  | register key provider in the KMS |
|  [sign(keyId, data, opts)](./js-sdk.kms.sign.md) |  | sign Uint8Array with giv KmsKeyIden |
