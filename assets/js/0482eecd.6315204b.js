"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[19872],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>m});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=c(s),y=n,m=l["".concat(u,".").concat(y)]||l[y]||d[y]||o;return s?r.createElement(m,a(a({ref:t},p),{},{components:s})):r.createElement(m,a({ref:t},p))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,a=new Array(o);a[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<o;c++)a[c]=s[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}y.displayName="MDXCreateElement"},58240:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=s(87462),n=(s(67294),s(3905));const o={id:"js-sdk.revocationstatusrequestmessagebody",title:"RevocationStatusRequestMessageBody type",hide_title:!0},a=void 0,i={unversionedId:"api/js-sdk.revocationstatusrequestmessagebody",id:"api/js-sdk.revocationstatusrequestmessagebody",title:"RevocationStatusRequestMessageBody type",description:"RevocationStatusRequestMessageBody type",source:"@site/docs/api/js-sdk.revocationstatusrequestmessagebody.md",sourceDirName:"api",slug:"/api/js-sdk.revocationstatusrequestmessagebody",permalink:"/js-sdk-tutorials/docs/api/js-sdk.revocationstatusrequestmessagebody",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.revocationstatusrequestmessagebody",title:"RevocationStatusRequestMessageBody type",hide_title:!0},sidebar:"api",previous:{title:"RevocationStatusRequestMessage type",permalink:"/js-sdk-tutorials/docs/api/js-sdk.revocationstatusrequestmessage"},next:{title:"RevocationStatusResponseMessage type",permalink:"/js-sdk-tutorials/docs/api/js-sdk.revocationstatusresponsemessage"}},u={},c=[{value:"RevocationStatusRequestMessageBody type",id:"revocationstatusrequestmessagebody-type",level:2}],p={toc:c};function l(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"revocationstatusrequestmessagebody-type"},"RevocationStatusRequestMessageBody type"),(0,n.kt)("p",null,"RevocationStatusRequestMessageBody is struct the represents request for revocation status"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export type RevocationStatusRequestMessageBody = {\n    revocation_nonce: number;\n};\n")))}l.isMDXComponent=!0}}]);