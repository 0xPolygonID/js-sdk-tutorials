"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[38854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),y=s(n),c=i,u=y["".concat(l,".").concat(c)]||y[c]||g[c]||o;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[y]="string"==typeof e?e:i,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={id:"polygonid-js-sdk.identitystorage.getidentity",title:"IdentityStorage.getIdentity() method",hide_title:!0},a=void 0,d={unversionedId:"api/polygonid-js-sdk.identitystorage.getidentity",id:"api/polygonid-js-sdk.identitystorage.getidentity",title:"IdentityStorage.getIdentity() method",description:"IdentityStorage.getIdentity() method",source:"@site/docs/api/polygonid-js-sdk.identitystorage.getidentity.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.identitystorage.getidentity",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identitystorage.getidentity",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.identitystorage.getidentity",title:"IdentityStorage.getIdentity() method",hide_title:!0},sidebar:"api",previous:{title:"IdentityStorage.getAllIdentities() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identitystorage.getallidentities"},next:{title:"IdentityStorage.getProfileById() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identitystorage.getprofilebyid"}},l={},s=[{value:"IdentityStorage.getIdentity() method",id:"identitystoragegetidentity-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"identitystoragegetidentity-method"},"IdentityStorage.getIdentity() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getIdentity(identifier: string): Promise<Identity>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"identifier"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identity"},"Identity"),">"))}y.isMDXComponent=!0}}]);