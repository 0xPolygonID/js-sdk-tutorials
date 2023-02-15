"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[7590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=n,u=d["".concat(p,".").concat(y)]||d[y]||m[y]||o;return r?a.createElement(u,i(i({ref:t},c),{},{components:r})):a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"polygonid-js-sdk.abstractprivatekeystore.import",title:"AbstractPrivateKeyStore.import() method",hide_title:!0},i=void 0,s={unversionedId:"api/polygonid-js-sdk.abstractprivatekeystore.import",id:"api/polygonid-js-sdk.abstractprivatekeystore.import",title:"AbstractPrivateKeyStore.import() method",description:"AbstractPrivateKeyStore.import() method",source:"@site/docs/api/polygonid-js-sdk.abstractprivatekeystore.import.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.abstractprivatekeystore.import",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.abstractprivatekeystore.import",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.abstractprivatekeystore.import",title:"AbstractPrivateKeyStore.import() method",hide_title:!0},sidebar:"api",previous:{title:"AbstractPrivateKeyStore.get() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.abstractprivatekeystore.get"},next:{title:"AbstractPrivateKeyStore class",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.abstractprivatekeystore"}},p={},l=[{value:"AbstractPrivateKeyStore.import() method",id:"abstractprivatekeystoreimport-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"abstractprivatekeystoreimport-method"},"AbstractPrivateKeyStore.import() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"imports key by alias"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract import(args: {\n        alias: string;\n        key: string;\n    }): Promise<void>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"args"),(0,n.kt)("td",{parentName:"tr",align:null},"{ alias: string; key: string; }"),(0,n.kt)("td",{parentName:"tr",align:null},"key alias and hex representation")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise<void>")))}d.isMDXComponent=!0}}]);