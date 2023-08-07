"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[79952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=s,g=u["".concat(o,".").concat(m)]||u[m]||c[m]||n;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:s,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(87462),s=(r(67294),r(3905));const n={id:"js-sdk.credentialstatusresolverregistry.register",title:"CredentialStatusResolverRegistry.register() method",hide_title:!0},i=void 0,l={unversionedId:"api/js-sdk.credentialstatusresolverregistry.register",id:"api/js-sdk.credentialstatusresolverregistry.register",title:"CredentialStatusResolverRegistry.register() method",description:"CredentialStatusResolverRegistry.register() method",source:"@site/docs/api/js-sdk.credentialstatusresolverregistry.register.md",sourceDirName:"api",slug:"/api/js-sdk.credentialstatusresolverregistry.register",permalink:"/js-sdk-tutorials/docs/api/js-sdk.credentialstatusresolverregistry.register",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.credentialstatusresolverregistry.register",title:"CredentialStatusResolverRegistry.register() method",hide_title:!0},sidebar:"api",previous:{title:"CredentialStatusResolverRegistry class",permalink:"/js-sdk-tutorials/docs/api/js-sdk.credentialstatusresolverregistry"},next:{title:"CredentialStatusType enum",permalink:"/js-sdk-tutorials/docs/api/js-sdk.credentialstatustype"}},o={},d=[{value:"CredentialStatusResolverRegistry.register() method",id:"credentialstatusresolverregistryregister-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"credentialstatusresolverregistryregister-method"},"CredentialStatusResolverRegistry.register() method"),(0,s.kt)("p",null,"register is a method to add a credential status resolver for specific credential status type"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Signature:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"register(type: CredentialStatusType, resolver: CredentialStatusResolver): void;\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"type"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.credentialstatustype"},"CredentialStatusType")),(0,s.kt)("td",{parentName:"tr",align:null},"one of the credential status types")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"resolver"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.credentialstatusresolver"},"CredentialStatusResolver")),(0,s.kt)("td",{parentName:"tr",align:null},"resolver")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")),(0,s.kt)("p",null,"void"))}u.isMDXComponent=!0}}]);