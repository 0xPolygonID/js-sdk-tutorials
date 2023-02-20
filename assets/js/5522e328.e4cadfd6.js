"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[51782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,k=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return r?a.createElement(k,s(s({ref:t},m),{},{components:r})):a.createElement(k,s({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"js-sdk.parser.parseclaim",title:"Parser.parseClaim() method",hide_title:!0},s=void 0,i={unversionedId:"api/js-sdk.parser.parseclaim",id:"api/js-sdk.parser.parseclaim",title:"Parser.parseClaim() method",description:"Parser.parseClaim() method",source:"@site/docs/api/js-sdk.parser.parseclaim.md",sourceDirName:"api",slug:"/api/js-sdk.parser.parseclaim",permalink:"/js-sdk-tutorials/docs/api/js-sdk.parser.parseclaim",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.parser.parseclaim",title:"Parser.parseClaim() method",hide_title:!0},sidebar:"api",previous:{title:"Parser class",permalink:"/js-sdk-tutorials/docs/api/js-sdk.parser"},next:{title:"Parser.parseSlots() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.parser.parseslots"}},o={},p=[{value:"Parser.parseClaim() method",id:"parserparseclaim-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"parserparseclaim-method"},"Parser.parseClaim() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"ParseClaim creates core.Claim object from W3CCredential"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"parseClaim(credential: W3CCredential, credentialType: string, jsonSchemaBytes: Uint8Array, opts?: CoreClaimOptions): Promise<CoreClaim>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"credential"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.w3ccredential"},"W3CCredential")),(0,n.kt)("td",{parentName:"tr",align:null},"Verifiable Credential")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"credentialType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"credential type that will be used as schema hash e.g. ",(0,n.kt)("a",{parentName:"td",href:"https://url-to-ld-schema.com%5C#AuthBJJCredential"},"https://url-to-ld-schema.com\\#AuthBJJCredential"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jsonSchemaBytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,n.kt)("td",{parentName:"tr",align:null},"json schema bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"opts"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.coreclaimoptions"},"CoreClaimOptions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Optional)")," options to parse core claim")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","CoreClaim",">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise<CoreClaim>")))}c.isMDXComponent=!0}}]);