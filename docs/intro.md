---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Polygon ID JS SDK**.

## Getting Started

Get started by creating an ** identity wallet ** 

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.16.1 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- or just your browser  !
## Install dependencies

from npm:
```bash
npm install @0xpolygonid/js-sdk
```

or add import to your `index.html` 
```js
<script src="./dist/umd/index.js"></script>
<script>
    const {
        LocalStoragePrivateKeyStore,
        IdentityStorage,
        MerkleTreeLocalStorage,
        CredentialStorage,
        W3CCredential,
        BrowserDataSource,
        BjjProvider,
        KmsKeyType,
        IdentityWallet,
        CredentialWallet,
        KMS,
        core,
        CredentialStatusType,
        CredentialStatusResolverRegistry,
        IssuerResolver,
        RHSResolver, 
        defaultEthConnectionConfig,
        OnChainResolver,
        MerkleTreeIndexedDBStorage
    } = PolygonIdSdk;
</script>
```