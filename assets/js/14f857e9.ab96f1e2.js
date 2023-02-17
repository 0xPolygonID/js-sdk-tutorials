"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[41837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=s.createContext({}),c=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return s.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),y=r,g=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return n?s.createElement(g,a(a({ref:t},l),{},{components:n})):s.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}y.displayName="MDXCreateElement"},33527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const o={id:"polygonid-js-sdk.issuancemessagebody",title:"IssuanceMessageBody type",hide_title:!0},a=void 0,i={unversionedId:"api/polygonid-js-sdk.issuancemessagebody",id:"api/polygonid-js-sdk.issuancemessagebody",title:"IssuanceMessageBody type",description:"IssuanceMessageBody type",source:"@site/docs/api/polygonid-js-sdk.issuancemessagebody.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.issuancemessagebody",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.issuancemessagebody",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.issuancemessagebody",title:"IssuanceMessageBody type",hide_title:!0},sidebar:"api",previous:{title:"isIssuerGenesis() function",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.isissuergenesis"},next:{title:"Issuer.claimsTreeRoot property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.issuer.claimstreeroot"}},p={},c=[{value:"IssuanceMessageBody type",id:"issuancemessagebody-type",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"issuancemessagebody-type"},"IssuanceMessageBody type"),(0,r.kt)("p",null,"IssuanceMessageBody is struct the represents message when credential is issued"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type IssuanceMessageBody = {\n    credential: W3CCredential;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"References:")," ",(0,r.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.w3ccredential"},"W3CCredential")))}d.isMDXComponent=!0}}]);