---
id: js-sdk.authhandler
title: AuthHandler class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## AuthHandler class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Allows to process AuthorizationRequest protocol message and produce JWZ response.


 AuthHandler  implements IAuthHandler interface

**Signature:**

```typescript
export declare class AuthHandler implements IAuthHandler 
```
**Implements:** [IAuthHandler](./js-sdk.iauthhandler.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_packerMgr, \_proofService, \_credentialWallet)](./js-sdk.authhandler._constructor_.md) |  | **_(BETA)_** Creates an instance of AuthHandler. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [generateAuthorizationResponse(userGenesisDID, authProfileNonce, authRequest, zkpRequestsWithCreds)](./js-sdk.authhandler.generateauthorizationresponse.md) |  | **_(BETA)_** Generates zero-knowledge proofs for given requests and credentials  |
|  [handleAuthorizationRequestForGenesisDID(did, request)](./js-sdk.authhandler.handleauthorizationrequestforgenesisdid.md) |  | **_(BETA)_** Handles only messages with authorization/v1.0/request type Generates all requested proofs and wraps authorization response message to JWZ token works when profiles are not supported |
|  [parseAuthorizationRequest(request)](./js-sdk.authhandler.parseauthorizationrequest.md) |  | **_(BETA)_** unpacks authorization request  |
