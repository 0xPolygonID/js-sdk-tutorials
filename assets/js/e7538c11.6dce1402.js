"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[76666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2},o="Issue credential",c={unversionedId:"tutorial-basics/issue-credential",id:"tutorial-basics/issue-credential",title:"Issue credential",description:"Credential is issued to the user with a BJJ signature proof",source:"@site/docs/tutorial-basics/issue-credential.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/issue-credential",permalink:"/docs/tutorial-basics/issue-credential",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"create identity",permalink:"/docs/tutorial-basics/create-identity"},next:{title:"transit state",permalink:"/docs/tutorial-basics/transit-state"}},s={},l=[{value:"Create your first credential",id:"create-your-first-credential",level:3},{value:"credential example",id:"credential-example",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"issue-credential"},"Issue credential"),(0,r.kt)("p",null,"Credential is issued to the user with a BJJ signature proof"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"codebase can be changed. Still in @beta ")),(0,r.kt)("h3",{id:"create-your-first-credential"},"Create your first credential"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'async function issueCredential() {\n  console.log("=============== issue credential ===============");\n\n  const dataStorage = initDataStorage();\n  const credentialWallet = await initCredentialWallet(dataStorage);\n  const identityWallet = await initIdentityWallet(\n    dataStorage,\n    credentialWallet\n  );\n\n  const { did:userDID, credential:authBJJCredentialUser } =\n    await identityWallet.createIdentity(\n      "http://metamask.com/", // this is url that will be a part of auth bjj credential identifier\n      "https://rhs-staging.polygonid.me", // url to check revocation status of auth bjj credential\n      {\n        method: core.DidMethod.Iden3,\n        blockchain: core.Blockchain.Polygon,\n        networkId: core.NetworkId.Mumbai,\n      }\n    );\n\n  console.log("=============== user did ===============");\n  console.log(userDID.toString());\n\n  const { did:issuerDID, credential:issuerAuthBJJCredential } =\n    await identityWallet.createIdentity(\n      "http://metamask.com/", // this is url that will be a part of auth bjj credential identifier\n      "https://rhs-staging.polygonid.me", // url to check revocation status of auth bjj credential\n      {\n        method: core.DidMethod.Iden3,\n        blockchain: core.Blockchain.Polygon,\n        networkId: core.NetworkId.Mumbai,\n      }\n    );\n\n  const credentialRequest: CredentialRequest = {\n    credentialSchema:\n      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json",\n    type: "KYCAgeCredential",\n    credentialSubject: {\n      id: userDID.toString(),\n      birthday: 19960424,\n      documentType: 99,\n    },\n    expiration: 12345678888,\n  };\n  const credential = await identityWallet.issueCredential(\n    issuerDID,\n    credentialRequest,\n    "http://metamask.com/", // host url that will a prefix of credential identifier\n    {\n      withRHS: "https://rhs-staging.polygonid.me", // reverse hash service is used to check\n    }\n  );\n\n  console.log("===============  credential ===============")\n  console.log(JSON.stringify(credential));\n\n  dataStorage.credential.saveCredential(credential)\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,r.kt)("i",null,"CredentialRequest ")," contains credential type,  url to json schema, credential subject data and expiration time.\nCredential is created with Iden3ReverseMerkleTreeProof credential status or with SparseMerkleTree status if rhs option is not set.")),(0,r.kt)("h3",{id:"credential-example"},"credential example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "http://metamask.com/f2102347-a0a8-4e99-8ff7-a7b39d992372",\n  "@context": [\n    "https://www.w3.org/2018/credentials/v1",\n    "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/iden3credential-v2.json-ld",\n    "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld"\n  ],\n  "type": [\n    "VerifiableCredential",\n    "KYCAgeCredential"\n  ],\n  "expirationDate": "2361-03-21T19:14:48.000Z",\n  "issuanceDate": "2023-02-07T20:51:19.764Z",\n  "credentialSubject": {\n    "id": "did:iden3:polygon:mumbai:x1PFECRcqMcyKE116E7PwGCxkyARJ8ybjkpA2zo8g",\n    "birthday": 19960424,\n    "documentType": 99,\n    "type": "KYCAgeCredential"\n  },\n  "issuer": "did:iden3:polygon:mumbai:wvFiTF7hZKHfyR4ZmHw4NcBg2ZBR4FYdoQ3AAX95e",\n  "credentialSchema": {\n    "id": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json",\n    "type": "JsonSchemaValidator2018"\n  },\n  "credentialStatus": {\n    "id": "https://rhs-staging.polygonid.me",\n    "revocationNonce": 5746,\n    "type": "Iden3ReverseSparseMerkleTreeProof"\n  },\n  "proof": [\n    {\n      "type": "BJJSignature2021",\n      "issuerData": {\n        "id": "did:iden3:polygon:mumbai:wvFiTF7hZKHfyR4ZmHw4NcBg2ZBR4FYdoQ3AAX95e",\n        "state": {\n          "rootOfRoots": "0000000000000000000000000000000000000000000000000000000000000000",\n          "revocationTreeRoot": "0000000000000000000000000000000000000000000000000000000000000000",\n          "claimsTreeRoot": "c172674faba36517a63ef3a7282d59107fccac006fe958f73fd5e103464c940f",\n          "value": "5185762f391463a6dcd7eb45aa7294856c48bc41567a15cf4727b5b0a9d71e05"\n        },\n        "authCoreClaim": "cca3371a6cb1b715004407e325bd993c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004125a5d7c27a15074ffbb145429c6d83c8a322586726079c59d59fe32dad311effe0b77602281b97d0616c1e676219fa1e0b3819770e026406961df54634381b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n        "mtp": {\n          "existence": true,\n          "siblings": []\n        },\n        "credentialStatus": {\n          "id": "https://rhs-staging.polygonid.me",\n          "revocationNonce": 0,\n          "type": "Iden3ReverseSparseMerkleTreeProof"\n        }\n      },\n      "coreClaim": "c9b2370371b7fa8b3dab2a5ba81b68380a00000000000000000000000000000001128563838738ce3dc774f5b3c617b33e3f730238caae4880c2fa1f30300d00689230010000000000000000000000000000000000000000000000000000000063000000000000000000000000000000000000000000000000000000000000007216000000000000281cdcdf0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n      "signature": "3fcc547c0af8fb0d05f86ddd92f54ed564364cb4f7a82a4c01875f42dd4fd8095d41dc02138e10b39b4c4bc185707efc754842f62fd0d97a1cc7468a0d4f8703"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);