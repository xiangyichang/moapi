"use strict";var precacheConfig=[["/index.html","8e8c49c7b53ca5b0c7570cace7569c42"],["/static/css/main.893865dc.css","cd294bec4e893e44fbbd7312754e09d6"],["/static/js/0.444615aa.chunk.js","85a054d089636c75936bf5aa364fc8d6"],["/static/js/1.649d27fa.chunk.js","38bd97b5c8a593bbf20e3a96d3fa9312"],["/static/js/2.49c1efed.chunk.js","74ede9080e986a8644dec342df61cb8f"],["/static/js/3.cbe37d21.chunk.js","ec3faa2f29e9f05e62a3f2ef08992bfb"],["/static/js/main.8903c7fd.js","868aa898a877c000b0fefaf16d85ab05"],["/static/media/iconfont.07fa4ce3.ttf","07fa4ce3eda2850961eb61ba7da28b97"],["/static/media/iconfont.132d8fd2.eot","132d8fd2c3cab34a640d5d9e3cfaa3e0"],["/static/media/iconfont.3a2ba315.ttf","3a2ba31570920eeb9b1d217cabe58315"],["/static/media/iconfont.5aca6085.svg","5aca60856635bc5f965796b049aba6f5"],["/static/media/iconfont.9ec5e40e.eot","9ec5e40edddff9ff300e6791941fe869"],["/static/media/iconfont.ca5d4588.svg","ca5d4588dad9c32f49e895e7f19479df"],["/static/media/iconfont.de3f28fd.woff","de3f28fdd0af647ec0d2b1c22d845064"],["/static/media/mock.b94950ca.snippers","b94950ca7448a50ee265cde46cb17a77"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});