---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Polygon ID JS SDK **.

## Getting Started

Get started by creating an ** identity wallet ** 


### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- or just your browser  !
## install dependencies

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
          KMS
      } = IdenPolygonIdSdk;
</script>
```

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
