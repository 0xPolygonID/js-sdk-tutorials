"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[1973],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=s(a),g=n,u=k["".concat(p,".").concat(g)]||k[g]||m[g]||l;return a?r.createElement(u,o(o({ref:e},d),{},{components:a})):r.createElement(u,o({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[k]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5514:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"polygonid-js-sdk",title:"polygonid-js-sdk package",hide_title:!0},o=void 0,i={unversionedId:"api/polygonid-js-sdk",id:"api/polygonid-js-sdk",title:"polygonid-js-sdk package",description:"polygonid-js-sdk package",source:"@site/docs/api/polygonid-js-sdk.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk",permalink:"/docs/api/polygonid-js-sdk",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk",title:"polygonid-js-sdk package",hide_title:!0},sidebar:"api",previous:{title:"LocalStoragePrivateKeyStore.storageKey property",permalink:"/docs/api/polygonid-js-sdk.localstorageprivatekeystore.storagekey"},next:{title:"MerkleTreeLocalStorage.(constructor)",permalink:"/docs/api/polygonid-js-sdk.merkletreelocalstorage._constructor_"}},p={},s=[{value:"polygonid-js-sdk package",id:"polygonid-js-sdk-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Abstract Classes",id:"abstract-classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],d={toc:s};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"polygonid-js-sdk-package"},"polygonid-js-sdk package"),(0,n.kt)("h2",{id:"classes"},"Classes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Class"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.authhandler"},"AuthHandler")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Allows to process AuthorizationRequest protocol message and produce JWZ response."),(0,n.kt)("p",null," AuthHandler  implements IAuthHandler interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.bjjprovider"},"BjjProvider")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Provider for Baby Jub Jub keys"),(0,n.kt)("p",null," BjjProvider  implements IKeyProvider interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.browserdatasource"},"BrowserDataSource")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Storage in the browser, uses local storage"),(0,n.kt)("p",null," BrowserDataSource  Type"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.circuitstorage"},"CircuitStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Implementation of ICircuitStorage to store keys data"),(0,n.kt)("p",null," CircuitStorage  implements ICircuitStorage interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.credentialstorage"},"CredentialStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Implementation of ICredentialStorage with KV Data source"),(0,n.kt)("p",null,"  CredentialStorage  {ICredentialStorage}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.credentialwallet"},"CredentialWallet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Wallet instance is a wrapper of CRUD logic for W3C credentials, also it allows to fetch revocation statuses."),(0,n.kt)("p",null," CredentialWallet  implements ICredentialWallet interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.ethstatestorage"},"EthStateStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," "),(0,n.kt)("p",null," EthStateStorage  implements IStateStorage interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.identitystorage"},"IdentityStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Implementation of the IIdentityStorage with KV data source"),(0,n.kt)("p",null," IdentityStorage  implements IIdentityStorage interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.identitywallet"},"IdentityWallet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Wallet instance to manage the digital identity based on iden3 protocol allows to: create identity/profile, sign payloads (bigint / bytes), generate keys, generate Merkle tree proofs of inclusion / non-inclusion to Merkle trees, issue credentials with a BJJSignature and Iden3SparseMerkleTree Proofs, revoke credentials, add credentials to Merkle trees, push states to reverse hash service"),(0,n.kt)("p",null," IdentityWallet - class"),(0,n.kt)("p",null," implements IIdentityWallet interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.inmemorydatasource"},"InMemoryDataSource")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Generic Memory Data Source"),(0,n.kt)("p",null," InMemoryDataSource - class  Type"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.inmemorymerkletreestorage"},"InMemoryMerkleTreeStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," "),(0,n.kt)("p",null," InMemoryMerkleTreeStorage  implements IMerkleTreeStorage interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.inmemoryprivatekeystore"},"InMemoryPrivateKeyStore")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Key Store to use in memory"),(0,n.kt)("p",null," InMemoryPrivateKeyStore  implements AbstractPrivateKeyStore interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.kms"},"KMS")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Key management system class contains different key providers. allows to register custom provider, create key, get public key and sign"),(0,n.kt)("p",null,"  KMS - class"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.localstorageprivatekeystore"},"LocalStoragePrivateKeyStore")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Allows storing keys in the local storage of the browser (NOT ENCRYPTED: DO NOT USE IN THE PRODUCTION)"),(0,n.kt)("p",null," LocalStoragePrivateKeyStore  implements AbstractPrivateKeyStore interface"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.merkletreelocalstorage"},"MerkleTreeLocalStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Merkle tree storage that uses browser local storage"),(0,n.kt)("p",null," MerkleTreeLocalStorage  implements IMerkleTreeStorage interface"))))),(0,n.kt)("h2",{id:"abstract-classes"},"Abstract Classes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Abstract Class"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.abstractprivatekeystore"},"AbstractPrivateKeyStore")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," KeyStore that allows to import and get keys by alias."),(0,n.kt)("p",null," "),(0,n.kt)("p",null," AbstractPrivateKeyStore"))))),(0,n.kt)("h2",{id:"enumerations"},"Enumerations"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Enumeration"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.kmskeytype"},"KmsKeyType")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Key type that can be used in the key management system"),(0,n.kt)("p",null,"  {number}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.merkletreetype"},"MerkleTreeType")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Type of MerkleTree"),(0,n.kt)("p",null,"  {number}"))))),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Function"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.isgenesisstateid"},"isGenesisStateId(id, state, type)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Checks if id is created from given state and type is genesis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.isissuergenesis"},"isIssuerGenesis(issuer, state)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Checks if issuer did is created from given state is genesis"))))),(0,n.kt)("h2",{id:"interfaces"},"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Interface"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.claimrequest"},"ClaimRequest")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Request to core library to create Core Claim from W3C Verifiable Credential"),(0,n.kt)("p",null," ClaimRequest"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.credentialissueoptions"},"CredentialIssueOptions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Credential issue options with publishing to chain and to reverse hash service"),(0,n.kt)("p",null," CredentialIssueOptions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.ethconnectionconfig"},"EthConnectionConfig")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Configuration of ethereum based blockchain connection"),(0,n.kt)("p",null," EthConnectionConfig"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.iauthhandler"},"IAuthHandler")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Interface that allows the processing of the authorization request in the raw format for given identifier"),(0,n.kt)("p",null," IAuthHandler"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.icredentialstorage"},"ICredentialStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Interface for credential storages"),(0,n.kt)("p",null," ICredentialStorage"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.icredentialwallet"},"ICredentialWallet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Interface to work with credential wallets"),(0,n.kt)("p",null," ICredentialWallet"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.idatastorage"},"IDataStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," General Data storage interface that union identity, credential, merkletree and states storage."),(0,n.kt)("p",null," IDataStorage"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.iden3proofcreationresult"},"Iden3ProofCreationResult")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Proof creation result"),(0,n.kt)("p",null," Iden3ProofCreationResult"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.identitymerkletreemetainformation"},"IdentityMerkleTreeMetaInformation")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Interface to store metadata about merkle tree"),(0,n.kt)("p",null," IdentityMerkleTreeMetaInformation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.iidentitystorage"},"IIdentityStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," storage for identities and profiles"),(0,n.kt)("p",null," IIdentityStorage"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.iidentitywallet"},"IIdentityWallet")),(0,n.kt)("td",{parentName:"tr",align:null},"Interface for IdentityWallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.ikeyprovider"},"IKeyProvider")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," KeyProvider is responsible for signing and creation of the keys"),(0,n.kt)("p",null," IKeyProvider"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.imerkletreestorage"},"IMerkleTreeStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Interface to work with a merkle tree storage"),(0,n.kt)("p",null," IMerkleTreeStorage"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.istatestorage"},"IStateStorage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Interface that defines methods for state storage"),(0,n.kt)("p",null," IStateStorage"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.kmskeyid"},"KmsKeyId")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," ID of the key that describe contain key type"),(0,n.kt)("p",null," KmsKeyId"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.rootinfo"},"RootInfo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," global identity state root info from chain"),(0,n.kt)("p",null," RootInfo"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.stateinfo"},"StateInfo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," state information of identity from chain."),(0,n.kt)("p",null," StateInfo"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.stateproof"},"StateProof")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," state proof of identity from chain"),(0,n.kt)("p",null," StateProof"))))),(0,n.kt)("h2",{id:"variables"},"Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variable"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.defaultethconnectionconfig"},"defaultEthConnectionConfig")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.identity"},"Identity")),(0,n.kt)("td",{parentName:"tr",align:null},"Identity structure that can be used for identity storage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.profile"},"Profile")),(0,n.kt)("td",{parentName:"tr",align:null},"Profile structure that can be used for profiles storage")))))}k.isMDXComponent=!0}}]);