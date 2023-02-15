"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[2112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={id:"polygonid-js-sdk.bjjprovider.sign",title:"BjjProvider.sign() method",hide_title:!0},a=void 0,p={unversionedId:"api/polygonid-js-sdk.bjjprovider.sign",id:"api/polygonid-js-sdk.bjjprovider.sign",title:"BjjProvider.sign() method",description:"BjjProvider.sign() method",source:"@site/docs/api/polygonid-js-sdk.bjjprovider.sign.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.bjjprovider.sign",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.bjjprovider.sign",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.bjjprovider.sign",title:"BjjProvider.sign() method",hide_title:!0},sidebar:"api",previous:{title:"BjjProvider.publicKey() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.bjjprovider.publickey"},next:{title:"BrowserDataSource.(constructor)",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.browserdatasource._constructor_"}},l={},s=[{value:"BjjProvider.sign() method",id:"bjjprovidersign-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bjjprovidersign-method"},"BjjProvider.sign() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"signs prepared payload of size, with a key id"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"sign(keyId: KmsKeyId, data: Uint8Array): Promise<Uint8Array>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.kmskeyid"},"KmsKeyId")),(0,i.kt)("td",{parentName:"tr",align:null},"key identifier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,i.kt)("td",{parentName:"tr",align:null},"data to sign (32 bytes)")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<","Uint8Array",">"),(0,i.kt)("p",null,"Uint8Array signature"))}c.isMDXComponent=!0}}]);