"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[1659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,y=c["".concat(o,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(y,d(d({ref:t},s),{},{components:n})):r.createElement(y,d({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,d=new Array(a);d[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,d[1]=l;for(var p=2;p<a;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"polygonid-js-sdk.icredentialstorage.findcredentialbyid",title:"ICredentialStorage.findCredentialById() method",hide_title:!0},d=void 0,l={unversionedId:"api/polygonid-js-sdk.icredentialstorage.findcredentialbyid",id:"api/polygonid-js-sdk.icredentialstorage.findcredentialbyid",title:"ICredentialStorage.findCredentialById() method",description:"ICredentialStorage.findCredentialById() method",source:"@site/docs/api/polygonid-js-sdk.icredentialstorage.findcredentialbyid.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.icredentialstorage.findcredentialbyid",permalink:"/docs/api/polygonid-js-sdk.icredentialstorage.findcredentialbyid",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.icredentialstorage.findcredentialbyid",title:"ICredentialStorage.findCredentialById() method",hide_title:!0},sidebar:"api",previous:{title:"IAuthHandler interface",permalink:"/docs/api/polygonid-js-sdk.iauthhandler"},next:{title:"ICredentialStorage.findCredentialsByQuery() method",permalink:"/docs/api/polygonid-js-sdk.icredentialstorage.findcredentialsbyquery"}},o={},p=[{value:"ICredentialStorage.findCredentialById() method",id:"icredentialstoragefindcredentialbyid-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icredentialstoragefindcredentialbyid-method"},"ICredentialStorage.findCredentialById() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"finds credential by identifier"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"findCredentialById(id: string): Promise<W3CCredential | undefined>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"id of credential")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<","W3CCredential ","|"," undefined",">"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{(Promise<W3CCredential | undefined>)}")))}c.isMDXComponent=!0}}]);