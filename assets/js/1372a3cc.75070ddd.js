"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[30132],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=s(r),f=o,u=m["".concat(l,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(u,i(i({ref:e},d),{},{components:r})):n.createElement(u,i({ref:e},d))}));function u(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60578:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"polygonid-js-sdk.claimwithmtpproof",title:"ClaimWithMTPProof interface",hide_title:!0},i=void 0,p={unversionedId:"api/polygonid-js-sdk.claimwithmtpproof",id:"api/polygonid-js-sdk.claimwithmtpproof",title:"ClaimWithMTPProof interface",description:"ClaimWithMTPProof interface",source:"@site/docs/api/polygonid-js-sdk.claimwithmtpproof.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.claimwithmtpproof",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.claimwithmtpproof",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.claimwithmtpproof",title:"ClaimWithMTPProof interface",hide_title:!0},sidebar:"api",previous:{title:"ClaimWithMTPProof.issuerID property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.claimwithmtpproof.issuerid"},next:{title:"ClaimWithMTPProof.nonRevProof property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.claimwithmtpproof.nonrevproof"}},l={},s=[{value:"ClaimWithMTPProof interface",id:"claimwithmtpproof-interface",level:2},{value:"Properties",id:"properties",level:2}],d={toc:s};function m(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"claimwithmtpproof-interface"},"ClaimWithMTPProof interface"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Claim for circuit with non revocation proof and proof of merkle tree inclusion"),(0,o.kt)("p",null," ClaimWithMTPProof"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ClaimWithMTPProof \n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.claimwithmtpproof.claim"},"claim")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Claim"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"(BETA)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.claimwithmtpproof.incproof"},"incProof")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.mtproof"},"MTProof")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"(BETA)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.claimwithmtpproof.issuerid"},"issuerID?")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Id"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,o.kt)("em",{parentName:"td"},"(Optional)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.claimwithmtpproof.nonrevproof"},"nonRevProof")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.mtproof"},"MTProof")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"(BETA)")))))))}m.isMDXComponent=!0}}]);