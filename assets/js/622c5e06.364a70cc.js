"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[68540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:s,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={id:"js-sdk.credentialissuancemessage",title:"CredentialIssuanceMessage type",hide_title:!0},i=void 0,c={unversionedId:"api/js-sdk.credentialissuancemessage",id:"api/js-sdk.credentialissuancemessage",title:"CredentialIssuanceMessage type",description:"CredentialIssuanceMessage type",source:"@site/docs/api/js-sdk.credentialissuancemessage.md",sourceDirName:"api",slug:"/api/js-sdk.credentialissuancemessage",permalink:"/docs/api/js-sdk.credentialissuancemessage",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.credentialissuancemessage",title:"CredentialIssuanceMessage type",hide_title:!0},sidebar:"api",previous:{title:"CredentialFetchRequestMessageBody type",permalink:"/docs/api/js-sdk.credentialfetchrequestmessagebody"},next:{title:"CredentialIssuanceRequestMessage type",permalink:"/docs/api/js-sdk.credentialissuancerequestmessage"}},o={},p=[{value:"CredentialIssuanceMessage type",id:"credentialissuancemessage-type",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"credentialissuancemessage-type"},"CredentialIssuanceMessage type"),(0,s.kt)("p",null,"CredentialIssuanceMessage represent Iden3message for credential issuance"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Signature:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export type CredentialIssuanceMessage = {\n    id: string;\n    typ?: MediaType;\n    type: ProtocolMessage;\n    threadID?: string;\n    body?: IssuanceMessageBody;\n    from?: string;\n    to?: string;\n};\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"References:")," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.constants.mediatype"},"MediaType"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.protocolmessage"},"ProtocolMessage"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.issuancemessagebody"},"IssuanceMessageBody")))}d.isMDXComponent=!0}}]);