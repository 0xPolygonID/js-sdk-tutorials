"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[17863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={id:"polygonid-js-sdk.stateverificationfunc",title:"StateVerificationFunc type",hide_title:!0},a=void 0,s={unversionedId:"api/polygonid-js-sdk.stateverificationfunc",id:"api/polygonid-js-sdk.stateverificationfunc",title:"StateVerificationFunc type",description:"StateVerificationFunc type",source:"@site/docs/api/polygonid-js-sdk.stateverificationfunc.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.stateverificationfunc",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.stateverificationfunc",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.stateverificationfunc",title:"StateVerificationFunc type",hide_title:!0},sidebar:"api",previous:{title:"StateTransitionPubSignals.userId property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.statetransitionpubsignals.userid"},next:{title:"strMTHex variable",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.strmthex"}},c={},p=[{value:"StateVerificationFunc type",id:"stateverificationfunc-type",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"stateverificationfunc-type"},"StateVerificationFunc type"),(0,i.kt)("p",null,"signature of state function verifier"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type StateVerificationFunc = (id: string, pubSignals: Array<string>) => Promise<boolean>;\n")))}u.isMDXComponent=!0}}]);