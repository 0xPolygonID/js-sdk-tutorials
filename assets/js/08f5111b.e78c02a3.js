"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[56763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=s(r),d=n,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||p;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[k]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const p={id:"js-sdk.zkppacker.unpack",title:"ZKPPacker.unpack() method",hide_title:!0},o=void 0,i={unversionedId:"api/js-sdk.zkppacker.unpack",id:"api/js-sdk.zkppacker.unpack",title:"ZKPPacker.unpack() method",description:"ZKPPacker.unpack() method",source:"@site/docs/api/js-sdk.zkppacker.unpack.md",sourceDirName:"api",slug:"/api/js-sdk.zkppacker.unpack",permalink:"/js-sdk-tutorials/docs/api/js-sdk.zkppacker.unpack",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.zkppacker.unpack",title:"ZKPPacker.unpack() method",hide_title:!0},sidebar:"api",previous:{title:"ZKPPacker.provingParamsMap property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.zkppacker.provingparamsmap"},next:{title:"ZKPPacker.verificationParamsMap property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.zkppacker.verificationparamsmap"}},c={},s=[{value:"ZKPPacker.unpack() method",id:"zkppackerunpack-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:s};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"zkppackerunpack-method"},"ZKPPacker.unpack() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"validate envelope which is jwz token"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"unpack(envelope: Uint8Array): Promise<BasicMessage>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"envelope"),(0,n.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.basicmessage"},"BasicMessage"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise<BasicMessage>")))}k.isMDXComponent=!0}}]);