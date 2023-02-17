"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[87779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(r),k=a,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},43361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={id:"polygonid-js-sdk.identitywallet.generateiden3sparsemerkletreeproof",title:"IdentityWallet.generateIden3SparseMerkleTreeProof() method",hide_title:!0},i=void 0,o={unversionedId:"api/polygonid-js-sdk.identitywallet.generateiden3sparsemerkletreeproof",id:"api/polygonid-js-sdk.identitywallet.generateiden3sparsemerkletreeproof",title:"IdentityWallet.generateIden3SparseMerkleTreeProof() method",description:"IdentityWallet.generateIden3SparseMerkleTreeProof() method",source:"@site/docs/api/polygonid-js-sdk.identitywallet.generateiden3sparsemerkletreeproof.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.identitywallet.generateiden3sparsemerkletreeproof",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identitywallet.generateiden3sparsemerkletreeproof",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.identitywallet.generateiden3sparsemerkletreeproof",title:"IdentityWallet.generateIden3SparseMerkleTreeProof() method",hide_title:!0},sidebar:"api",previous:{title:"IdentityWallet.generateCredentialMtp() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identitywallet.generatecredentialmtp"},next:{title:"IdentityWallet.generateKey() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identitywallet.generatekey"}},p={},d=[{value:"IdentityWallet.generateIden3SparseMerkleTreeProof() method",id:"identitywalletgenerateiden3sparsemerkletreeproof-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"identitywalletgenerateiden3sparsemerkletreeproof-method"},"IdentityWallet.generateIden3SparseMerkleTreeProof() method"),(0,a.kt)("p",null,"Generate Iden3SparseMerkleTree proof of inclusion to issuer state of specific credentials"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"generateIden3SparseMerkleTreeProof(issuerDID: DID, credentials: W3CCredential[], txId: string, blockNumber?: number, blockTimestamp?: number): Promise<W3CCredential[]>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"issuerDID"),(0,a.kt)("td",{parentName:"tr",align:null},"DID"),(0,a.kt)("td",{parentName:"tr",align:null},"issuer did")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"credentials"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.w3ccredential"},"W3CCredential"),"[","]"),(0,a.kt)("td",{parentName:"tr",align:null},"list of verifiable credentials to generate a proof")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"txId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"transaction hash in which state transition has been done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(Optional)")," block number in which state transition has been done")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockTimestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(Optional)")," block timestamp in which state transition has been done")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.w3ccredential"},"W3CCredential"),"[","]",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<W3CCredential[]>")," credentials with an Iden3SparseMerkleTreeProof"))}m.isMDXComponent=!0}}]);