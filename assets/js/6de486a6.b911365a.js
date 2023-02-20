"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[93338],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(a),u=n,k=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return a?r.createElement(k,s(s({ref:e},d),{},{components:a})):r.createElement(k,s({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[p]="string"==typeof t?t:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47223:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"js-sdk.jsonschemavalidator",title:"JsonSchemaValidator class",hide_title:!0},s=void 0,l={unversionedId:"api/js-sdk.jsonschemavalidator",id:"api/js-sdk.jsonschemavalidator",title:"JsonSchemaValidator class",description:"JsonSchemaValidator class",source:"@site/docs/api/js-sdk.jsonschemavalidator.md",sourceDirName:"api",slug:"/api/js-sdk.jsonschemavalidator",permalink:"/js-sdk-tutorials/docs/api/js-sdk.jsonschemavalidator",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.jsonschemavalidator",title:"JsonSchemaValidator class",hide_title:!0},sidebar:"api",previous:{title:"JsonSchemaValidator.(constructor)",permalink:"/js-sdk-tutorials/docs/api/js-sdk.jsonschemavalidator._constructor_"},next:{title:"JsonSchemaValidator.validate() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.jsonschemavalidator.validate"}},i={},c=[{value:"JsonSchemaValidator class",id:"jsonschemavalidator-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],d={toc:c};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"jsonschemavalidator-class"},"JsonSchemaValidator class"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"JSON Schema Validator"),(0,n.kt)("p",null," JsonSchemaValidator"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class JsonSchemaValidator \n")),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.jsonschemavalidator._constructor_"},"(constructor)()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Creates an instance of JsonSchemaValidator.")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.jsonschemavalidator.validate"},"validate(dataB, schemaB)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Validate data according to the given schema")))))}p.isMDXComponent=!0}}]);