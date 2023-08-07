"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[66860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(n),u=a,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={id:"js-sdk.identitywallet.getgenesisdidmetadata",title:"IdentityWallet.getGenesisDIDMetadata() method",hide_title:!0},l=void 0,s={unversionedId:"api/js-sdk.identitywallet.getgenesisdidmetadata",id:"api/js-sdk.identitywallet.getgenesisdidmetadata",title:"IdentityWallet.getGenesisDIDMetadata() method",description:"IdentityWallet.getGenesisDIDMetadata() method",source:"@site/docs/api/js-sdk.identitywallet.getgenesisdidmetadata.md",sourceDirName:"api",slug:"/api/js-sdk.identitywallet.getgenesisdidmetadata",permalink:"/js-sdk-tutorials/docs/api/js-sdk.identitywallet.getgenesisdidmetadata",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.identitywallet.getgenesisdidmetadata",title:"IdentityWallet.getGenesisDIDMetadata() method",hide_title:!0},sidebar:"api",previous:{title:"IdentityWallet.getDIDTreeModel() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.identitywallet.getdidtreemodel"},next:{title:"IdentityWallet.getProfileByVerifier() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.identitywallet.getprofilebyverifier"}},d={},o=[{value:"IdentityWallet.getGenesisDIDMetadata() method",id:"identitywalletgetgenesisdidmetadata-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"identitywalletgetgenesisdidmetadata-method"},"IdentityWallet.getGenesisDIDMetadata() method"),(0,a.kt)("p",null,"gets profile nonce by it's id. if profile is genesis identifier - 0 is returned"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getGenesisDIDMetadata(did: DID): Promise<{\n        nonce: number;\n        genesisDID: DID;\n    }>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"did"),(0,a.kt)("td",{parentName:"tr",align:null},"DID"),(0,a.kt)("td",{parentName:"tr",align:null},"profile that has been derived or genesis identity")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","{ nonce: number; genesisDID: DID; }",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<{nonce:number, genesisIdentifier: DID}>}")))}c.isMDXComponent=!0}}]);