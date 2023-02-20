"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[54792],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>g});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(s),m=n,g=l["".concat(o,".").concat(m)]||l[m]||d[m]||a;return s?r.createElement(g,i(i({ref:t},p),{},{components:s})):r.createElement(g,i({ref:t},p))}));function g(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,i=new Array(a);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=s[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},30450:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=s(87462),n=(s(67294),s(3905));const a={id:"js-sdk.credentialissuancerequestmessage",title:"CredentialIssuanceRequestMessage type",hide_title:!0},i=void 0,c={unversionedId:"api/js-sdk.credentialissuancerequestmessage",id:"api/js-sdk.credentialissuancerequestmessage",title:"CredentialIssuanceRequestMessage type",description:"CredentialIssuanceRequestMessage type",source:"@site/docs/api/js-sdk.credentialissuancerequestmessage.md",sourceDirName:"api",slug:"/api/js-sdk.credentialissuancerequestmessage",permalink:"/docs/api/js-sdk.credentialissuancerequestmessage",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.credentialissuancerequestmessage",title:"CredentialIssuanceRequestMessage type",hide_title:!0},sidebar:"api",previous:{title:"CredentialIssuanceMessage type",permalink:"/docs/api/js-sdk.credentialissuancemessage"},next:{title:"CredentialIssuanceRequestMessageBody type",permalink:"/docs/api/js-sdk.credentialissuancerequestmessagebody"}},o={},u=[{value:"CredentialIssuanceRequestMessage type",id:"credentialissuancerequestmessage-type",level:2}],p={toc:u};function l(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"credentialissuancerequestmessage-type"},"CredentialIssuanceRequestMessage type"),(0,n.kt)("p",null,"CredentialIssuanceRequestMessage represent Iden3message for credential request"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export type CredentialIssuanceRequestMessage = {\n    id: string;\n    typ?: MediaType;\n    type: ProtocolMessage;\n    thid?: string;\n    body?: CredentialIssuanceRequestMessage;\n    from?: string;\n    to?: string;\n};\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.constants.mediatype"},"MediaType"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.protocolmessage"},"ProtocolMessage"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.credentialissuancerequestmessage"},"CredentialIssuanceRequestMessage")))}l.isMDXComponent=!0}}]);