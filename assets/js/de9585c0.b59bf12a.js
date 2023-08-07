"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[38408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"js-sdk.agentresolver.resolve",title:"AgentResolver.resolve() method",hide_title:!0},s=void 0,l={unversionedId:"api/js-sdk.agentresolver.resolve",id:"api/js-sdk.agentresolver.resolve",title:"AgentResolver.resolve() method",description:"AgentResolver.resolve() method",source:"@site/docs/api/js-sdk.agentresolver.resolve.md",sourceDirName:"api",slug:"/api/js-sdk.agentresolver.resolve",permalink:"/js-sdk-tutorials/docs/api/js-sdk.agentresolver.resolve",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.agentresolver.resolve",title:"AgentResolver.resolve() method",hide_title:!0},sidebar:"api",previous:{title:"AgentResolver class",permalink:"/js-sdk-tutorials/docs/api/js-sdk.agentresolver"},next:{title:"AtomicQueryMTPV2Inputs.claim property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerymtpv2inputs.claim"}},i={},p=[{value:"AgentResolver.resolve() method",id:"agentresolverresolve-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"agentresolverresolve-method"},"AgentResolver.resolve() method"),(0,a.kt)("p",null,"resolve is a method to resolve a credential status from an agent."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"resolve(credentialStatus: CredentialStatus, credentialStatusResolveOptions?: CredentialStatusResolveOptions): Promise<RevocationStatus>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"credentialStatus"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.credentialstatus"},"CredentialStatus")),(0,a.kt)("td",{parentName:"tr",align:null},"credential status to resolve")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"credentialStatusResolveOptions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.credentialstatusresolveoptions"},"CredentialStatusResolveOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(Optional)")," options for resolver")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.revocationstatus"},"RevocationStatus"),">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<RevocationStatus>}")))}d.isMDXComponent=!0}}]);