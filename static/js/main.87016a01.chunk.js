(this["webpackJsonpconfig-composer"]=this["webpackJsonpconfig-composer"]||[]).push([[408],{24:function(e,n,t){"use strict";var o=t(1),i=Object(o.createContext)({meta:"",setMeta:function(){}});n.a=i},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),r=t(23),c=t.n(r),a=t(25),s=t(66),l=t(67),d=t(63),u=t(68),j=t(65),f=t(24),h=t(26),b=t(2),m=function(){return Object(b.jsx)("div",{style:{marginTop:"1rem",padding:"1rem",position:"fixed",bottom:0,left:0,width:"100%"},children:Object(b.jsx)(d.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",alignContent:"center",wrap:"nowrap",children:Object(b.jsx)("small",{style:{userSelect:"none"},children:"SrA Harry Randazzo - aka Razzle-Dazzle \u2728"})})})},g=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(414)]).then(t.bind(null,909))})),p=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(410),t.e(416)]).then(t.bind(null,913))})),w=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(412),t.e(415)]).then(t.bind(null,910))})),O=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(413)]).then(t.bind(null,914))})),v=function(){return Object(b.jsx)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",alignContent:"center",children:Object(b.jsx)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",alignContent:"center",children:Object(b.jsx)(u.a,{style:{width:"80%",backgroundColor:h.euiColorDisabledText},color:"secondary"})})})},x=function(){var e=Object(o.useState)({json:"undefined",markdown:"undefined"}),n=Object(a.a)(e,2),t=n[0],i={meta:t,setMeta:n[1]};return Object(b.jsx)(f.a.Provider,{value:i,children:Object(b.jsxs)(j.a,{maxWidth:"md",style:{paddingBottom:"3.5rem"},children:[Object(b.jsx)(s.a,{size:"l",children:Object(b.jsx)("h1",{style:{textAlign:"center",padding:"1rem"},children:"Config Composer"})}),Object(b.jsx)(o.Suspense,{fallback:Object(b.jsx)("div",{}),children:Object(b.jsx)(g,{})}),Object(b.jsx)(o.Suspense,{fallback:Object(b.jsx)("div",{}),children:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{}),Object(b.jsxs)(o.Suspense,{fallback:Object(b.jsx)(v,{}),children:[Object(b.jsx)(w,{}),Object(b.jsx)(l.a,{}),"undefined"!==t.json&&"undefined"!==t.markdown&&Object(b.jsx)(p,{})]}),Object(b.jsx)(m,{})]})})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(46),t(47),t(48);var S=t(27);Object(S.initDB)({name:"history",version:3,objectStoresMeta:[{store:"history",storeSchema:[{name:"json",keypath:"json",options:{unique:!1}},{name:"markdown",keypath:"markdown",options:{unique:!1}}]}]}),c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/config-composer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/config-composer","/service-worker.js");k?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(n,e)}))}}()}},[[49,409,411]]]);
//# sourceMappingURL=main.87016a01.chunk.js.map