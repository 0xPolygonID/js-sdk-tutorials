---
id: js-sdk.proofgenerationresponsemessage
title: ProofGenerationResponseMessage type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## ProofGenerationResponseMessage type

ProofGenerationResponseMessage is struct the represents body for proof generation request

**Signature:**

```typescript
export type ProofGenerationResponseMessage = {
    id: string;
    typ?: MediaType;
    type: ProtocolMessage;
    thid?: string;
    body?: ResponseMessageBody;
    from?: string;
    to?: string;
};
```
**References:** [MediaType](./js-sdk.protocol_constants.mediatype.md), [ProtocolMessage](./js-sdk.protocolmessage.md), [ResponseMessageBody](./js-sdk.responsemessagebody.md)
