"use strict";var precacheConfig=[["/index.html","6f9ce0bca5e1f4ea66dbeb97987ca2fe"],["/static/css/main.52df3278.css","d704f73377f016cf0428a9ba22f36191"],["/static/js/main.b8a0e8de.js","0fb053eccf9361f0f08a04b00c576912"],["/static/media/AvisoLegal.6bb7b1ce.pdf","6bb7b1ce49d44680b213ad7b4b372d20"],["/static/media/JosefinSans-Bold.9880fc08.ttf","9880fc0845d0f3950e490e4f3b05c08c"],["/static/media/JosefinSans-Light.f0cc419e.ttf","f0cc419ee290311a49733e728d598f8e"],["/static/media/JosefinSans-Regular.aff001b4.ttf","aff001b45565556d667c11fe85cada0d"],["/static/media/JosefinSans-SemiBold.217a5e7e.ttf","217a5e7ed12c8787bfab3b6ea9e6538b"],["/static/media/PoliticaDeCookies.628a72f9.pdf","628a72f9bc7d64179010b6e15f106735"],["/static/media/PoliticaDeDatos.f9b545fe.pdf","f9b545fe9bcd66ccbdb220615823f46f"],["/static/media/energia.f03db4c8.png","f03db4c813391804459c7705ada90861"],["/static/media/fondoenergia.7f729847.png","7f7298470b8afdea6e964a4c6a6076a9"],["/static/media/fondogas.cad82cca.png","cad82cca70af1454f0d8581330633196"],["/static/media/fondoluz.375eb73c.png","375eb73cf38dc3be436af3fbb086498b"],["/static/media/luz-graficoespañol.b9fa9fe8.png","b9fa9fe8621423b7ccba5339e168afce"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});