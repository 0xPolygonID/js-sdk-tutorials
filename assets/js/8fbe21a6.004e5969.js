"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[37283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),y=s(n),c=r,u=y["".concat(l,".").concat(c)]||y[c]||g[c]||o;return n?i.createElement(u,a(a({ref:t},p),{},{components:n})):i.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[y]="string"==typeof e?e:r,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={id:"polygonid-js-sdk.iidentitystorage.getidentity",title:"IIdentityStorage.getIdentity() method",hide_title:!0},a=void 0,d={unversionedId:"api/polygonid-js-sdk.iidentitystorage.getidentity",id:"api/polygonid-js-sdk.iidentitystorage.getidentity",title:"IIdentityStorage.getIdentity() method",description:"IIdentityStorage.getIdentity() method",source:"@site/docs/api/polygonid-js-sdk.iidentitystorage.getidentity.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.iidentitystorage.getidentity",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitystorage.getidentity",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.iidentitystorage.getidentity",title:"IIdentityStorage.getIdentity() method",hide_title:!0},sidebar:"api",previous:{title:"IIdentityStorage.getAllIdentities() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitystorage.getallidentities"},next:{title:"IIdentityStorage.getProfileById() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitystorage.getprofilebyid"}},l={},s=[{value:"IIdentityStorage.getIdentity() method",id:"iidentitystoragegetidentity-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"iidentitystoragegetidentity-method"},"IIdentityStorage.getIdentity() method"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,r.kt)("p",null,"gets identity from the the data source"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getIdentity(identifier: string): Promise<Identity | undefined>;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"id of identity")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identity"},"Identity")," ","|"," undefined",">"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{(Promise<Identity | undefined>)}")))}y.isMDXComponent=!0}}]);