"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[28827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,g=f["".concat(i,".").concat(d)]||f[d]||u[d]||s;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[f]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={id:"js-sdk.proofgenerationresponsemessage",title:"ProofGenerationResponseMessage type",hide_title:!0},a=void 0,p={unversionedId:"api/js-sdk.proofgenerationresponsemessage",id:"api/js-sdk.proofgenerationresponsemessage",title:"ProofGenerationResponseMessage type",description:"ProofGenerationResponseMessage type",source:"@site/docs/api/js-sdk.proofgenerationresponsemessage.md",sourceDirName:"api",slug:"/api/js-sdk.proofgenerationresponsemessage",permalink:"/docs/api/js-sdk.proofgenerationresponsemessage",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.proofgenerationresponsemessage",title:"ProofGenerationResponseMessage type",hide_title:!0},sidebar:"api",previous:{title:"ProofGenerationRequestMessageBody type",permalink:"/docs/api/js-sdk.proofgenerationrequestmessagebody"},next:{title:"ProofPurpose enum",permalink:"/docs/api/js-sdk.proofpurpose"}},i={},c=[{value:"ProofGenerationResponseMessage type",id:"proofgenerationresponsemessage-type",level:2}],l={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"proofgenerationresponsemessage-type"},"ProofGenerationResponseMessage type"),(0,o.kt)("p",null,"ProofGenerationResponseMessage is struct the represents body for proof generation request"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ProofGenerationResponseMessage = {\n    id: string;\n    typ?: MediaType;\n    type: ProtocolMessage;\n    thid?: string;\n    body?: ResponseMessageBody;\n    from?: string;\n    to?: string;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"References:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.constants.mediatype"},"MediaType"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.protocolmessage"},"ProtocolMessage"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.responsemessagebody"},"ResponseMessageBody")))}f.isMDXComponent=!0}}]);