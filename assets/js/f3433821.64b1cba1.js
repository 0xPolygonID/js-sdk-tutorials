"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[69598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,f=c["".concat(d,".").concat(y)]||c[y]||u[y]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"polygonid-js-sdk.icredentialstorage.findcredentialsbyquery",title:"ICredentialStorage.findCredentialsByQuery() method",hide_title:!0},o=void 0,l={unversionedId:"api/polygonid-js-sdk.icredentialstorage.findcredentialsbyquery",id:"api/polygonid-js-sdk.icredentialstorage.findcredentialsbyquery",title:"ICredentialStorage.findCredentialsByQuery() method",description:"ICredentialStorage.findCredentialsByQuery() method",source:"@site/docs/api/polygonid-js-sdk.icredentialstorage.findcredentialsbyquery.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.icredentialstorage.findcredentialsbyquery",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.icredentialstorage.findcredentialsbyquery",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.icredentialstorage.findcredentialsbyquery",title:"ICredentialStorage.findCredentialsByQuery() method",hide_title:!0},sidebar:"api",previous:{title:"ICredentialStorage.findCredentialById() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.icredentialstorage.findcredentialbyid"},next:{title:"ICredentialStorage.listCredentials() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.icredentialstorage.listcredentials"}},d={},s=[{value:"ICredentialStorage.findCredentialsByQuery() method",id:"icredentialstoragefindcredentialsbyquery-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"icredentialstoragefindcredentialsbyquery-method"},"ICredentialStorage.findCredentialsByQuery() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"finds credential in the storage for given query"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"findCredentialsByQuery(query: ProofQuery): Promise<W3CCredential[]>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.proofquery"},"ProofQuery")),(0,a.kt)("td",{parentName:"tr",align:null},"query to apply")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.w3ccredential"},"W3CCredential"),"[","]",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<W3CCredential[]>}")))}c.isMDXComponent=!0}}]);