---
id: js-sdk.authorizationrequestmessage
title: AuthorizationRequestMessage type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## AuthorizationRequestMessage type

AuthorizationRequestMessage is struct the represents iden3message authorization request

**Signature:**

```typescript
export type AuthorizationRequestMessage = {
    id: string;
    typ: MediaType;
    type: ProtocolMessage;
    thid?: string;
    body: AuthorizationRequestMessageBody;
    from: string;
    to?: string;
};
```
**References:** [MediaType](./js-sdk.protocol_constants.mediatype.md), [ProtocolMessage](./js-sdk.protocolmessage.md), [AuthorizationRequestMessageBody](./js-sdk.authorizationrequestmessagebody.md)
