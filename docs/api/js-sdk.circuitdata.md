---
id: js-sdk.circuitdata
title: CircuitData type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## CircuitData type

Circuit data that includes id, wasm file, verification key and proving key

**Signature:**

```typescript
export type CircuitData = {
    circuitId: string;
    wasm: Uint8Array;
    verificationKey: Uint8Array;
    provingKey: Uint8Array;
};
```