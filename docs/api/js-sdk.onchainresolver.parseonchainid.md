---
id: js-sdk.onchainresolver.parseonchainid
title: OnChainResolver.parseOnChainId() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## OnChainResolver.parseOnChainId() method

Parse credentialStatus id to get contractAddress, chainId and revocationNonce

**Signature:**

```typescript
parseOnChainId(id: string): {
        contractAddress: string;
        chainId: number;
        revocationNonce: number;
        issuer: string;
    };
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  id | string | credential status id |

**Returns:**

{ contractAddress: string; chainId: number; revocationNonce: number; issuer: string; }

{{contractAddress: string, chainId: number, revocationNonce: number}}
