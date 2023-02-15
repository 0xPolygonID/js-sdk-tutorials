"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[2243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={id:"polygonid-js-sdk.icredentialwallet.getauthbjjcredential",title:"ICredentialWallet.getAuthBJJCredential() method",hide_title:!0},i=void 0,o={unversionedId:"api/polygonid-js-sdk.icredentialwallet.getauthbjjcredential",id:"api/polygonid-js-sdk.icredentialwallet.getauthbjjcredential",title:"ICredentialWallet.getAuthBJJCredential() method",description:"ICredentialWallet.getAuthBJJCredential() method",source:"@site/docs/api/polygonid-js-sdk.icredentialwallet.getauthbjjcredential.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.icredentialwallet.getauthbjjcredential",permalink:"/docs/api/polygonid-js-sdk.icredentialwallet.getauthbjjcredential",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.icredentialwallet.getauthbjjcredential",title:"ICredentialWallet.getAuthBJJCredential() method",hide_title:!0},sidebar:"api",previous:{title:"ICredentialWallet.findByQuery() method",permalink:"/docs/api/polygonid-js-sdk.icredentialwallet.findbyquery"},next:{title:"ICredentialWallet.getRevocationStatus() method",permalink:"/docs/api/polygonid-js-sdk.icredentialwallet.getrevocationstatus"}},d={},p=[{value:"ICredentialWallet.getAuthBJJCredential() method",id:"icredentialwalletgetauthbjjcredential-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"icredentialwalletgetauthbjjcredential-method"},"ICredentialWallet.getAuthBJJCredential() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Finds Auth BJJ credential for given user"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAuthBJJCredential(did: DID): Promise<W3CCredential>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"did"),(0,a.kt)("td",{parentName:"tr",align:null},"DID"),(0,a.kt)("td",{parentName:"tr",align:null},"the issuer of Auth BJJ credential")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","W3CCredential",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<W3CCredential>")," W3CCredential with AuthBJJCredential type"))}u.isMDXComponent=!0}}]);