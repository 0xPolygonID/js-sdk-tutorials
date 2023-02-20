"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[29193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),y=n,m=l["".concat(p,".").concat(y)]||l[y]||d[y]||s;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:n,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},56351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const s={id:"js-sdk.authorizationmessageresponsebody",title:"AuthorizationMessageResponseBody type",hide_title:!0},a=void 0,i={unversionedId:"api/js-sdk.authorizationmessageresponsebody",id:"api/js-sdk.authorizationmessageresponsebody",title:"AuthorizationMessageResponseBody type",description:"AuthorizationMessageResponseBody type",source:"@site/docs/api/js-sdk.authorizationmessageresponsebody.md",sourceDirName:"api",slug:"/api/js-sdk.authorizationmessageresponsebody",permalink:"/docs/api/js-sdk.authorizationmessageresponsebody",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.authorizationmessageresponsebody",title:"AuthorizationMessageResponseBody type",hide_title:!0},sidebar:"api",previous:{title:"AuthHandler.parseAuthorizationRequest() method",permalink:"/docs/api/js-sdk.authhandler.parseauthorizationrequest"},next:{title:"AuthorizationRequestMessage type",permalink:"/docs/api/js-sdk.authorizationrequestmessage"}},p={},u=[{value:"AuthorizationMessageResponseBody type",id:"authorizationmessageresponsebody-type",level:2}],c={toc:u};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"authorizationmessageresponsebody-type"},"AuthorizationMessageResponseBody type"),(0,n.kt)("p",null,"AuthorizationMessageResponseBody is struct the represents authorization response data"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export type AuthorizationMessageResponseBody = {\n    did_doc?: JSONObject;\n    message?: string;\n    scope: Array<ZeroKnowledgeProofResponse>;\n};\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.jsonobject"},"JSONObject"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.zeroknowledgeproofresponse"},"ZeroKnowledgeProofResponse")))}l.isMDXComponent=!0}}]);