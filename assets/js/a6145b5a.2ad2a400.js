"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[18682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={id:"js-sdk.credentialwallet.getauthbjjcredential",title:"CredentialWallet.getAuthBJJCredential() method",hide_title:!0},i=void 0,o={unversionedId:"api/js-sdk.credentialwallet.getauthbjjcredential",id:"api/js-sdk.credentialwallet.getauthbjjcredential",title:"CredentialWallet.getAuthBJJCredential() method",description:"CredentialWallet.getAuthBJJCredential() method",source:"@site/docs/api/js-sdk.credentialwallet.getauthbjjcredential.md",sourceDirName:"api",slug:"/api/js-sdk.credentialwallet.getauthbjjcredential",permalink:"/js-sdk-tutorials/docs/api/js-sdk.credentialwallet.getauthbjjcredential",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.credentialwallet.getauthbjjcredential",title:"CredentialWallet.getAuthBJJCredential() method",hide_title:!0},sidebar:"api",previous:{title:"CredentialWallet.findNonRevokedCredential() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.credentialwallet.findnonrevokedcredential"},next:{title:"CredentialWallet.getRevocationStatus() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.credentialwallet.getrevocationstatus"}},d={},s=[{value:"CredentialWallet.getAuthBJJCredential() method",id:"credentialwalletgetauthbjjcredential-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"credentialwalletgetauthbjjcredential-method"},"CredentialWallet.getAuthBJJCredential() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Finds Auth BJJ credential for given user"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getAuthBJJCredential(did: DID): Promise<W3CCredential>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"did"),(0,n.kt)("td",{parentName:"tr",align:null},"DID"),(0,n.kt)("td",{parentName:"tr",align:null},"the issuer of Auth BJJ credential")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.w3ccredential"},"W3CCredential"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise<W3CCredential>")," W3CCredential with AuthBJJCredential type"))}p.isMDXComponent=!0}}]);