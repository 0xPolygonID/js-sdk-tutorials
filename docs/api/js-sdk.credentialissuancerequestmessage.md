---
id: js-sdk.credentialissuancerequestmessage
title: CredentialIssuanceRequestMessage type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## CredentialIssuanceRequestMessage type

CredentialIssuanceRequestMessage represent Iden3message for credential request

**Signature:**

```typescript
export type CredentialIssuanceRequestMessage = {
    id: string;
    typ: MediaType;
    type: ProtocolMessage;
    thid?: string;
    body: CredentialIssuanceRequestMessageBody;
    from: string;
    to: string;
};
```
**References:** [MediaType](./js-sdk.protocol_constants.mediatype.md), [ProtocolMessage](./js-sdk.protocolmessage.md), [CredentialIssuanceRequestMessageBody](./js-sdk.credentialissuancerequestmessagebody.md)
