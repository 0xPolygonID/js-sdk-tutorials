"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[35893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),y=a,g=c["".concat(d,".").concat(y)]||c[y]||k[y]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},47788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"polygonid-js-sdk.iidentitywallet",title:"IIdentityWallet interface",hide_title:!0},l=void 0,o={unversionedId:"api/polygonid-js-sdk.iidentitywallet",id:"api/polygonid-js-sdk.iidentitywallet",title:"IIdentityWallet interface",description:"IIdentityWallet interface",source:"@site/docs/api/polygonid-js-sdk.iidentitywallet.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.iidentitywallet",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.iidentitywallet",title:"IIdentityWallet interface",hide_title:!0},sidebar:"api",previous:{title:"IIdentityWallet.issueCredential() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.issuecredential"},next:{title:"IIdentityWallet.publishStateToRHS() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.publishstatetorhs"}},d={},s=[{value:"IIdentityWallet interface",id:"iidentitywallet-interface",level:2},{value:"Methods",id:"methods",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"iidentitywallet-interface"},"IIdentityWallet interface"),(0,a.kt)("p",null,"Interface for IdentityWallet"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IIdentityWallet \n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.addcredentialstomerkletree"},"addCredentialsToMerkleTree(credentials, issuerDID)")),(0,a.kt)("td",{parentName:"tr",align:null},"Adds verifiable credentials to issuer Claims Merkle tree")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.createidentity"},"createIdentity(hostUrl, rhsUrl, opts)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," Create Identity creates Auth BJJ credential, Merkle trees for claims, revocations and root of roots, adds auth BJJ credential to claims tree and generates mtp of inclusion based on the resulting state it provides an identifier in DID form.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.createprofile"},"createProfile(did, nonce, verifier)")),(0,a.kt)("td",{parentName:"tr",align:null},"Creates profile based on genesis identifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.generatecredentialmtp"},"generateCredentialMtp(did, credential, treeState)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates proof of credential inclusion / non-inclusion to the given claims tree and its root or to the current root of the Claims tree in the given Merkle tree storage.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.generateiden3sparsemerkletreeproof"},"generateIden3SparseMerkleTreeProof(issuerDID, credentials, txId, blockNumber, blockTimestamp)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generate Iden3SparseMerkleTree proof of inclusion to issuer state of specific credentials")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.generatekey"},"generateKey(keyType)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates a new key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.generatenonrevocationmtp"},"generateNonRevocationMtp(did, credential, treeState)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates proof of credential revocation nonce inclusion / non-inclusion to the given revocation tree and its root or to the current root of the Revocation tree in the given Merkle tree storage.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.getcoreclaimfromcredential"},"getCoreClaimFromCredential(credential)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," Extracts core claim from signature or merkle tree proof. If both proof persists core claim must be the same"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.getdidtreemodel"},"getDIDTreeModel(did)")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets a tree model for given did that includes claims tree, revocation tree, the root of roots tree and calculated state hash")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.issuecredential"},"issueCredential(issuerDID, req, hostUrl, opts)")),(0,a.kt)("td",{parentName:"tr",align:null},"Issues new credential from issuer according to the claim request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.publishstatetorhs"},"publishStateToRHS(issuerDID, rhsURL, revokedNonces)")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.revokecredential"},"revokeCredential(issuerDID, credential)")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.sign"},"sign(payload, credential)")),(0,a.kt)("td",{parentName:"tr",align:null},"Signs a payload of arbitrary size with an Auth BJJ Credential that identifies a key for signing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitywallet.signchallenge"},"signChallenge(payload, credential)")),(0,a.kt)("td",{parentName:"tr",align:null},"Signs a big integer with an Auth BJJ Credential that identifies a key for signing.")))))}c.isMDXComponent=!0}}]);