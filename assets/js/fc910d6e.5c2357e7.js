"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[3615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),g=i,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a={id:"polygonid-js-sdk.credentialstorage.listcredentials",title:"CredentialStorage.listCredentials() method",hide_title:!0},l=void 0,o={unversionedId:"api/polygonid-js-sdk.credentialstorage.listcredentials",id:"api/polygonid-js-sdk.credentialstorage.listcredentials",title:"CredentialStorage.listCredentials() method",description:"CredentialStorage.listCredentials() method",source:"@site/docs/api/polygonid-js-sdk.credentialstorage.listcredentials.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.credentialstorage.listcredentials",permalink:"/docs/api/polygonid-js-sdk.credentialstorage.listcredentials",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.credentialstorage.listcredentials",title:"CredentialStorage.listCredentials() method",hide_title:!0},sidebar:"api",previous:{title:"CredentialStorage.findCredentialsByQuery() method",permalink:"/docs/api/polygonid-js-sdk.credentialstorage.findcredentialsbyquery"},next:{title:"CredentialStorage class",permalink:"/docs/api/polygonid-js-sdk.credentialstorage"}},s={},d=[{value:"CredentialStorage.listCredentials() method",id:"credentialstoragelistcredentials-method",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"credentialstoragelistcredentials-method"},"CredentialStorage.listCredentials() method"),(0,i.kt)("p",null,"returns all credentials in the storage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"listCredentials(): Promise<W3CCredential[]>;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<","W3CCredential","[","]",">"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<W3CCredential[]>")))}p.isMDXComponent=!0}}]);