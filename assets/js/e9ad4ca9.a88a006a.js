"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[56149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=p(r),u=n,m=k["".concat(l,".").concat(u)]||k[u]||c[u]||s;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[k]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"js-sdk.sec256k1provider",title:"Sec256k1Provider class",hide_title:!0},o=void 0,i={unversionedId:"api/js-sdk.sec256k1provider",id:"api/js-sdk.sec256k1provider",title:"Sec256k1Provider class",description:"Sec256k1Provider class",source:"@site/docs/api/js-sdk.sec256k1provider.md",sourceDirName:"api",slug:"/api/js-sdk.sec256k1provider",permalink:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.sec256k1provider",title:"Sec256k1Provider class",hide_title:!0},sidebar:"api",previous:{title:"Sec256k1Provider.keyType property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider.keytype"},next:{title:"Sec256k1Provider.newPrivateKeyFromSeed() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider.newprivatekeyfromseed"}},l={},p=[{value:"Sec256k1Provider class",id:"sec256k1provider-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:p};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sec256k1provider-class"},"Sec256k1Provider class"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Provider for Sec256p1 keys256p1"),(0,n.kt)("p",null," Sec256p1Provider  implements IKeyProvider interface"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Sec256k1Provider implements IKeyProvider \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implements:")," ",(0,n.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.ikeyprovider"},"IKeyProvider")),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider._constructor_"},"(constructor)(keyType, keyStore)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Creates an instance of BjjProvider.")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider.keytype"},"keyType")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.kmskeytype"},"KmsKeyType")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," key type that is handled by BJJ Provider  {KmsKeyType}")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider.newprivatekeyfromseed"},"newPrivateKeyFromSeed()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," generates a baby jub jub key from a seed phrase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider.publickey"},"publicKey(keyId)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Gets public key by kmsKeyId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.sec256k1provider.sign"},"sign(keyId, data, opts)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," signs prepared payload of size, with a key id")))))}k.isMDXComponent=!0}}]);