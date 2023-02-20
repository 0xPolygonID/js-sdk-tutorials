"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[37861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),c=a,m=p["".concat(u,".").concat(c)]||p[c]||h[c]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},31090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={id:"js-sdk.iauthhandler.handleauthorizationrequestforgenesisdid",title:"IAuthHandler.handleAuthorizationRequestForGenesisDID() method",hide_title:!0},o=void 0,s={unversionedId:"api/js-sdk.iauthhandler.handleauthorizationrequestforgenesisdid",id:"api/js-sdk.iauthhandler.handleauthorizationrequestforgenesisdid",title:"IAuthHandler.handleAuthorizationRequestForGenesisDID() method",description:"IAuthHandler.handleAuthorizationRequestForGenesisDID() method",source:"@site/docs/api/js-sdk.iauthhandler.handleauthorizationrequestforgenesisdid.md",sourceDirName:"api",slug:"/api/js-sdk.iauthhandler.handleauthorizationrequestforgenesisdid",permalink:"/docs/api/js-sdk.iauthhandler.handleauthorizationrequestforgenesisdid",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.iauthhandler.handleauthorizationrequestforgenesisdid",title:"IAuthHandler.handleAuthorizationRequestForGenesisDID() method",hide_title:!0},sidebar:"api",previous:{title:"IAuthHandler.generateAuthorizationResponse() method",permalink:"/docs/api/js-sdk.iauthhandler.generateauthorizationresponse"},next:{title:"IAuthHandler interface",permalink:"/docs/api/js-sdk.iauthhandler"}},u={},l=[{value:"IAuthHandler.handleAuthorizationRequestForGenesisDID() method",id:"iauthhandlerhandleauthorizationrequestforgenesisdid-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"iauthhandlerhandleauthorizationrequestforgenesisdid-method"},"IAuthHandler.handleAuthorizationRequestForGenesisDID() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Handle authorization request protocol message"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"handleAuthorizationRequestForGenesisDID(did: DID, request: Uint8Array): Promise<{\n        token: string;\n        authRequest: AuthorizationRequestMessage;\n        authResponse: AuthorizationResponseMessage;\n    }>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"did"),(0,a.kt)("td",{parentName:"tr",align:null},"DID"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:null},"request payload")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","{ token: string; authRequest: ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.authorizationrequestmessage"},"AuthorizationRequestMessage"),"; authResponse: ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.authorizationresponsemessage"},"AuthorizationResponseMessage"),"; }",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<{ token: string; authRequest: AuthorizationRequestMessage; authResponse: AuthorizationResponseMessage; }>")))}p.isMDXComponent=!0}}]);