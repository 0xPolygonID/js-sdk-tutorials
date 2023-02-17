"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[29478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"polygonid-js-sdk.authhandler.parseauthorizationrequest",title:"AuthHandler.parseAuthorizationRequest() method",hide_title:!0},i=void 0,s={unversionedId:"api/polygonid-js-sdk.authhandler.parseauthorizationrequest",id:"api/polygonid-js-sdk.authhandler.parseauthorizationrequest",title:"AuthHandler.parseAuthorizationRequest() method",description:"AuthHandler.parseAuthorizationRequest() method",source:"@site/docs/api/polygonid-js-sdk.authhandler.parseauthorizationrequest.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.authhandler.parseauthorizationrequest",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authhandler.parseauthorizationrequest",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.authhandler.parseauthorizationrequest",title:"AuthHandler.parseAuthorizationRequest() method",hide_title:!0},sidebar:"api",previous:{title:"AuthHandler class",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authhandler"},next:{title:"AuthorizationMessageResponseBody type",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authorizationmessageresponsebody"}},l={},p=[{value:"AuthHandler.parseAuthorizationRequest() method",id:"authhandlerparseauthorizationrequest-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"authhandlerparseauthorizationrequest-method"},"AuthHandler.parseAuthorizationRequest() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"unpacks authorization request "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"parseAuthorizationRequest(request: Uint8Array): Promise<AuthorizationRequestMessage>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"request"),(0,n.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,n.kt)("td",{parentName:"tr",align:null},"raw byte message")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authorizationrequestmessage"},"AuthorizationRequestMessage"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise<AuthorizationRequestMessage>")))}d.isMDXComponent=!0}}]);