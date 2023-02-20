"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[50233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,b=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},49906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const s={id:"js-sdk.swapendianness",title:"swapEndianness variable",hide_title:!0},i=void 0,o={unversionedId:"api/js-sdk.swapendianness",id:"api/js-sdk.swapendianness",title:"swapEndianness variable",description:"swapEndianness variable",source:"@site/docs/api/js-sdk.swapendianness.md",sourceDirName:"api",slug:"/api/js-sdk.swapendianness",permalink:"/docs/api/js-sdk.swapendianness",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.swapendianness",title:"swapEndianness variable",hide_title:!0},sidebar:"api",previous:{title:"SubjectPosition enum",permalink:"/docs/api/js-sdk.subjectposition"},next:{title:"toClaimNonRevStatus variable",permalink:"/docs/api/js-sdk.toclaimnonrevstatus"}},p={},l=[{value:"swapEndianness variable",id:"swapendianness-variable",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"swapendianness-variable"},"swapEndianness variable"),(0,a.kt)("p",null,"SwapEndianness swaps the endianness of the value encoded in buf. If buf is Big-Endian, the result will be Little-Endian and vice-versa."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"swapEndianness: (buf: Uint8Array) => Uint8Array\n")))}d.isMDXComponent=!0}}]);