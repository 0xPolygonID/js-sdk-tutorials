"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[63254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(r),u=n,g=c["".concat(i,".").concat(u)]||c[u]||y[u]||s;return r?o.createElement(g,p(p({ref:t},d),{},{components:r})):o.createElement(g,p({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,p=new Array(s);p[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:n,p[1]=a;for(var l=2;l<s;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={id:"polygonid-js-sdk.responsemessagebody",title:"ResponseMessageBody type",hide_title:!0},p=void 0,a={unversionedId:"api/polygonid-js-sdk.responsemessagebody",id:"api/polygonid-js-sdk.responsemessagebody",title:"ResponseMessageBody type",description:"ResponseMessageBody type",source:"@site/docs/api/polygonid-js-sdk.responsemessagebody.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.responsemessagebody",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.responsemessagebody",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.responsemessagebody",title:"ResponseMessageBody type",hide_title:!0},sidebar:"api",previous:{title:"resolvePath variable",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.resolvepath"},next:{title:"RevocationStatus.issuer property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.revocationstatus.issuer"}},i={},l=[{value:"ResponseMessageBody type",id:"responsemessagebody-type",level:2}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"responsemessagebody-type"},"ResponseMessageBody type"),(0,n.kt)("p",null,"ResponseMessageBody is struct the represents request for revocation status"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ResponseMessageBody = {\n    scope: Array<ZeroKnowledgeProofResponse>;\n};\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.zeroknowledgeproofresponse"},"ZeroKnowledgeProofResponse")))}c.isMDXComponent=!0}}]);