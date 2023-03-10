---
id: js-sdk.iauthhandler.generateauthorizationresponse
title: IAuthHandler.generateAuthorizationResponse() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## IAuthHandler.generateAuthorizationResponse() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Generates zero-knowledge proofs for given requests and credentials 

**Signature:**

```typescript
generateAuthorizationResponse(userGenesisDID: DID, authProfileNonce: number, authRequest: AuthorizationRequestMessage, zkpRequestsWithCreds: ZKPRequestWithCredential[]): Promise<{
        token: string;
        authRequest: AuthorizationRequestMessage;
        authResponse: AuthorizationResponseMessage;
    }>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  userGenesisDID | DID | user genesis identifier for which user holds key pair. |
|  authProfileNonce | number | profile nonce that will be used for authorization. |
|  authRequest | [AuthorizationRequestMessage](./js-sdk.authorizationrequestmessage.md) | authorization request, protocol message. |
|  zkpRequestsWithCreds | [ZKPRequestWithCredential](./js-sdk.zkprequestwithcredential.md)\[\] | zero knowledge proof request with chosen credential to use. |

**Returns:**

Promise&lt;{ token: string; authRequest: [AuthorizationRequestMessage](./js-sdk.authorizationrequestmessage.md); authResponse: [AuthorizationResponseMessage](./js-sdk.authorizationresponsemessage.md); }&gt;

`Promise<{ token: string; authRequest: AuthorizationRequestMessage; authResponse: AuthorizationResponseMessage; }>}`
