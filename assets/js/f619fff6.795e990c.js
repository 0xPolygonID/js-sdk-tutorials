"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[7204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="create identity",l={unversionedId:"tutorial-basics/create-identity",id:"tutorial-basics/create-identity",title:"create identity",description:"Identity creation contains of two main parts: creation of identifier and Auth BJJ Credential",source:"@site/docs/tutorial-basics/create-identity.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-identity",permalink:"/polygonid-js-sdk-website/docs/tutorial-basics/create-identity",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"StateProof.value property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.stateproof.value"},next:{title:"Issue credential",permalink:"/polygonid-js-sdk-website/docs/tutorial-basics/issue-credential"}},c={},s=[{value:"Create your first identity",id:"create-your-first-identity",level:3},{value:"let&#39;s see the details",id:"lets-see-the-details",level:3},{value:"data source",id:"data-source",level:4},{value:"credential wallet",id:"credential-wallet",level:4},{value:"identity wallet",id:"identity-wallet",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-identity"},"create identity"),(0,r.kt)("p",null,"Identity creation contains of two main parts: creation of identifier and Auth BJJ Credential"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"codebase can be changed. Still in @beta ")),(0,r.kt)("h3",{id:"create-your-first-identity"},"Create your first identity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'async function identityCreation(){\n    \n    console.log("=============== key creation ===============")\n\n    const dataStorage = initDataStorage();\n    const credentialWallet = await initCredentialWallet(dataStorage);\n    const identityWallet = await initIdentityWallet(\n      dataStorage,\n      credentialWallet\n    );\n  \n    const { did, credential } = await identityWallet.createIdentity(\n      "https://mywallet.com", // this is url that will be a part of auth bjj credential identifier\n      "http://rhs.com/node", // url to check revocation status of auth bjj credential, if it\'s not set hostUrl is used.\n      {\n        method: core.DidMethod.Iden3,\n        blockchain: core.Blockchain.Polygon,\n        networkId: core.NetworkId.Main\n      }\n    );\n  \n    console.log("=============== did ===============")\n    console.log(did.toString());\n    console.log("=============== Auth BJJ credential ===============")\n    console.log(JSON.stringify(credential));\n}\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,r.kt)("i",null,"identityWallet ")," is an entry point to work with your identities. Create ones, generate profiles, issue credential and many more!!!")),(0,r.kt)("h3",{id:"lets-see-the-details"},"let's see the details"),(0,r.kt)("h4",{id:"data-source"},"data source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function initDataStorage(): IDataStorage {\n\n   let conf :EthConnectionConfig= defaultEthConnectionConfig;\n   conf.contractAddress = "< contract address >"\n   conf.url  = "< rpc url > "\n\n   var dataStorage = {\n    credential: new CredentialStorage(new InMemoryDataSource<W3CCredential>()),\n    identity: new IdentityStorage(\n      new InMemoryDataSource<Identity>(),\n      new InMemoryDataSource<Profile>()\n    ),\n    mt: new InMemoryMerkleTreeStorage(40),\n    \n    states: new EthStateStorage(defaultEthConnectionConfig),\n  };\n  return dataStorage;\n}\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,r.kt)("i",null,"dataStorage ")," is storage interface that unite all main storages for the wallets. Each storage uses data source, which now can be a browser local storage or in memory for tests. Of cource you can implement your own data sources by implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"IDataSource<Type>")," interface")),(0,r.kt)("h4",{id:"credential-wallet"},"credential wallet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function initCredentialWallet(\n  dataStorage: IDataStorage\n): Promise<CredentialWallet> {\n  return new CredentialWallet(dataStorage);\n}\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 simple as that!")),(0,r.kt)("h4",{id:"identity-wallet"},"identity wallet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function initIdentityWallet(\n  dataStorage: IDataStorage,\n  credentialWallet: ICredentialWallet\n): Promise<IIdentityWallet> {\n  const memoryKeyStore = new InMemoryPrivateKeyStore();\n  const bjjProvider = new BjjProvider(KmsKeyType.BabyJubJub, memoryKeyStore);\n  const kms = new KMS();\n  kms.registerKeyProvider(KmsKeyType.BabyJubJub, bjjProvider);\n\n  return new IdentityWallet(kms, dataStorage, credentialWallet);\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,r.kt)("i",null,"identityWallet ")," requires kms (key management system) \ud83d\udd11 which is initialized with different key providers. It's required to have a BJJ key provider implementation to use work with Polygon identity.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f do not use unprotected key stores in production!")))}u.isMDXComponent=!0}}]);