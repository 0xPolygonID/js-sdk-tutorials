"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[49695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=o,y=f["".concat(a,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[f]="string"==typeof e?e:o,p[1]=l;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"polygonid-js-sdk.profile",title:"Profile type",hide_title:!0},p=void 0,l={unversionedId:"api/polygonid-js-sdk.profile",id:"api/polygonid-js-sdk.profile",title:"Profile type",description:"Profile type",source:"@site/docs/api/polygonid-js-sdk.profile.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.profile",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.profile",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.profile",title:"Profile type",hide_title:!0},sidebar:"api",previous:{title:"prepareSiblingsStr variable",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.preparesiblingsstr"},next:{title:"ProofGenerationOptions.authProfileNonce property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.proofgenerationoptions.authprofilenonce"}},a={},s=[{value:"Profile type",id:"profile-type",level:2}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"profile-type"},"Profile type"),(0,o.kt)("p",null,"Profile structure that can be used for profiles storage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Profile = {\n    id: string;\n    nonce: number;\n    genesisIdentifier: string;\n    verifier: string;\n};\n")))}f.isMDXComponent=!0}}]);