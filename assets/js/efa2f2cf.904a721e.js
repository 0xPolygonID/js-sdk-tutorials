"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[54885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>T});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var E=n.createContext({}),p=function(e){var t=n.useContext(E),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(E.Provider,{value:t},e.children)},l="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,E=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(r),O=o,T=l["".concat(E,".").concat(O)]||l[O]||_[O]||s;return r?n.createElement(T,a(a({ref:t},c),{},{components:r})):n.createElement(T,a({ref:t},c))}));function T(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=O;var i={};for(var E in t)hasOwnProperty.call(t,E)&&(i[E]=t[E]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},77912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={id:"js-sdk.protocol_constants.protocol_message_type",title:"PROTOCOL_CONSTANTS.PROTOCOL_MESSAGE_TYPE variable",hide_title:!0},a=void 0,i={unversionedId:"api/js-sdk.protocol_constants.protocol_message_type",id:"api/js-sdk.protocol_constants.protocol_message_type",title:"PROTOCOL\\_CONSTANTS.PROTOCOL\\_MESSAGE\\_TYPE variable",description:"PROTOCOL\\CONSTANTS.PROTOCOL\\MESSAGE\\_TYPE variable",source:"@site/docs/api/js-sdk.protocol_constants.protocol_message_type.md",sourceDirName:"api",slug:"/api/js-sdk.protocol_constants.protocol_message_type",permalink:"/js-sdk-tutorials/docs/api/js-sdk.protocol_constants.protocol_message_type",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.protocol_constants.protocol_message_type",title:"PROTOCOL\\_CONSTANTS.PROTOCOL\\_MESSAGE\\_TYPE variable",hide_title:!0},sidebar:"api",previous:{title:"PROTOCOL\\_CONSTANTS.MediaType enum",permalink:"/js-sdk-tutorials/docs/api/js-sdk.protocol_constants.mediatype"},next:{title:"PROTOCOL\\_CONSTANTS.SUPPORTED\\_PUBLIC\\_KEY\\_TYPES variable",permalink:"/js-sdk-tutorials/docs/api/js-sdk.protocol_constants.supported_public_key_types"}},E={},p=[{value:"PROTOCOL_CONSTANTS.PROTOCOL_MESSAGE_TYPE variable",id:"protocol_constantsprotocol_message_type-variable",level:2}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"protocol_constantsprotocol_message_type-variable"},"PROTOCOL","_","CONSTANTS.PROTOCOL","_","MESSAGE","_","TYPE variable"),(0,o.kt)("p",null,"Constants for Iden3 protocol"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"PROTOCOL_MESSAGE_TYPE: Readonly<{\n    AUTHORIZATION_REQUEST_MESSAGE_TYPE: string;\n    AUTHORIZATION_RESPONSE_MESSAGE_TYPE: string;\n    CREDENTIAL_ISSUANCE_REQUEST_MESSAGE_TYPE: string;\n    CREDENTIAL_FETCH_REQUEST_MESSAGE_TYPE: string;\n    CREDENTIAL_OFFER_MESSAGE_TYPE: string;\n    CREDENTIAL_ISSUANCE_RESPONSE_MESSAGE_TYPE: string;\n    DEVICE_REGISTRATION_REQUEST_MESSAGE_TYPE: string;\n    MESSAGE_FETCH_REQUEST_MESSAGE_TYPE: string;\n    PROOF_GENERATION_REQUEST_MESSAGE_TYPE: string;\n    PROOF_GENERATION_RESPONSE_MESSAGE_TYPE: string;\n    REVOCATION_STATUS_REQUEST_MESSAGE_TYPE: string;\n    REVOCATION_STATUS_RESPONSE_MESSAGE_TYPE: string;\n}>\n")))}l.isMDXComponent=!0}}]);