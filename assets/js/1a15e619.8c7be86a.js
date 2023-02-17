"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[85389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,g=d["".concat(l,".").concat(c)]||d[c]||h[c]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"polygonid-js-sdk.authhandler.generateauthorizationresponse",title:"AuthHandler.generateAuthorizationResponse() method",hide_title:!0},s=void 0,i={unversionedId:"api/polygonid-js-sdk.authhandler.generateauthorizationresponse",id:"api/polygonid-js-sdk.authhandler.generateauthorizationresponse",title:"AuthHandler.generateAuthorizationResponse() method",description:"AuthHandler.generateAuthorizationResponse() method",source:"@site/docs/api/polygonid-js-sdk.authhandler.generateauthorizationresponse.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.authhandler.generateauthorizationresponse",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authhandler.generateauthorizationresponse",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.authhandler.generateauthorizationresponse",title:"AuthHandler.generateAuthorizationResponse() method",hide_title:!0},sidebar:"api",previous:{title:"AuthHandler.(constructor)",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authhandler._constructor_"},next:{title:"AuthHandler.handleAuthorizationRequestForGenesisDID() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authhandler.handleauthorizationrequestforgenesisdid"}},l={},p=[{value:"AuthHandler.generateAuthorizationResponse() method",id:"authhandlergenerateauthorizationresponse-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"authhandlergenerateauthorizationresponse-method"},"AuthHandler.generateAuthorizationResponse() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Generates zero-knowledge proofs for given requests and credentials "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"generateAuthorizationResponse(userGenesisDID: DID, authProfileNonce: number, authRequest: AuthorizationRequestMessage, zkpRequestsWithCreds?: ZKPRequestWithCredential[]): Promise<{\n        token: string;\n        authRequest: AuthorizationRequestMessage;\n        authResponse: AuthorizationResponseMessage;\n    }>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userGenesisDID"),(0,a.kt)("td",{parentName:"tr",align:null},"DID"),(0,a.kt)("td",{parentName:"tr",align:null},"user genesis identifier for which user holds key pair.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authProfileNonce"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"profile nonce that will be used for authorization.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authRequest"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authorizationrequestmessage"},"AuthorizationRequestMessage")),(0,a.kt)("td",{parentName:"tr",align:null},"authorization request, protocol message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zkpRequestsWithCreds"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.zkprequestwithcredential"},"ZKPRequestWithCredential"),"[","]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(Optional)")," zero knowledge proof request with chosen credential to use.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","{ token: string; authRequest: ",(0,a.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authorizationrequestmessage"},"AuthorizationRequestMessage"),"; authResponse: ",(0,a.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authorizationresponsemessage"},"AuthorizationResponseMessage"),"; }",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<{ token: string; authRequest: AuthorizationRequestMessage; authResponse: AuthorizationResponseMessage; }>}")))}d.isMDXComponent=!0}}]);