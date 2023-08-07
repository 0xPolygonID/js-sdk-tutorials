"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[25274],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},93123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={id:"js-sdk.onchainresolver.parseonchainid",title:"OnChainResolver.parseOnChainId() method",hide_title:!0},o=void 0,s={unversionedId:"api/js-sdk.onchainresolver.parseonchainid",id:"api/js-sdk.onchainresolver.parseonchainid",title:"OnChainResolver.parseOnChainId() method",description:"OnChainResolver.parseOnChainId() method",source:"@site/docs/api/js-sdk.onchainresolver.parseonchainid.md",sourceDirName:"api",slug:"/api/js-sdk.onchainresolver.parseonchainid",permalink:"/js-sdk-tutorials/docs/api/js-sdk.onchainresolver.parseonchainid",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.onchainresolver.parseonchainid",title:"OnChainResolver.parseOnChainId() method",hide_title:!0},sidebar:"api",previous:{title:"OnChainResolver.networkByChainId() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.onchainresolver.networkbychainid"},next:{title:"OnChainResolver.resolve() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.onchainresolver.resolve"}},l={},c=[{value:"OnChainResolver.parseOnChainId() method",id:"onchainresolverparseonchainid-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"onchainresolverparseonchainid-method"},"OnChainResolver.parseOnChainId() method"),(0,a.kt)("p",null,"Parse credentialStatus id to get contractAddress, chainId and revocationNonce"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"parseOnChainId(id: string): {\n        contractAddress: string;\n        chainId: number;\n        revocationNonce: number;\n        issuer: string;\n    };\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"credential status id")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"{ contractAddress: string; chainId: number; revocationNonce: number; issuer: string; }"),(0,a.kt)("p",null,"{{contractAddress: string, chainId: number, revocationNonce: number}}"))}d.isMDXComponent=!0}}]);