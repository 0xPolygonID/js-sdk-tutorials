---
id: js-sdk.credentialfetchrequestmessage
title: CredentialFetchRequestMessage type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## CredentialFetchRequestMessage type

CredentialFetchRequestMessage represent Iden3message for credential fetch request

**Signature:**

```typescript
export type CredentialFetchRequestMessage = {
    id: string;
    typ?: MediaType;
    type: ProtocolMessage;
    thid?: string;
    body?: CredentialFetchRequestMessageBody;
    from?: string;
    to?: string;
};
```
**References:** [MediaType](./js-sdk.protocol_constants.mediatype.md), [ProtocolMessage](./js-sdk.protocolmessage.md), [CredentialFetchRequestMessageBody](./js-sdk.credentialfetchrequestmessagebody.md)
