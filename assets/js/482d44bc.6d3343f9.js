"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[7307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,m=c["".concat(d,".").concat(y)]||c[y]||u[y]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"polygonid-js-sdk.credentialstorage.findcredentialsbyquery",title:"CredentialStorage.findCredentialsByQuery() method",hide_title:!0},l=void 0,o={unversionedId:"api/polygonid-js-sdk.credentialstorage.findcredentialsbyquery",id:"api/polygonid-js-sdk.credentialstorage.findcredentialsbyquery",title:"CredentialStorage.findCredentialsByQuery() method",description:"CredentialStorage.findCredentialsByQuery() method",source:"@site/docs/api/polygonid-js-sdk.credentialstorage.findcredentialsbyquery.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.credentialstorage.findcredentialsbyquery",permalink:"/docs/api/polygonid-js-sdk.credentialstorage.findcredentialsbyquery",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.credentialstorage.findcredentialsbyquery",title:"CredentialStorage.findCredentialsByQuery() method",hide_title:!0},sidebar:"api",previous:{title:"CredentialStorage.findCredentialById() method",permalink:"/docs/api/polygonid-js-sdk.credentialstorage.findcredentialbyid"},next:{title:"CredentialStorage.listCredentials() method",permalink:"/docs/api/polygonid-js-sdk.credentialstorage.listcredentials"}},d={},s=[{value:"CredentialStorage.findCredentialsByQuery() method",id:"credentialstoragefindcredentialsbyquery-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"credentialstoragefindcredentialsbyquery-method"},"CredentialStorage.findCredentialsByQuery() method"),(0,a.kt)("p",null,"returns all credentials in the storage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"findCredentialsByQuery(query: ProofQuery): Promise<W3CCredential[]>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"ProofQuery"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","W3CCredential","[","]",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<W3CCredential[]>")))}c.isMDXComponent=!0}}]);