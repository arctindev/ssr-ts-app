self.addEventListener("install",(function(e){console.log("Service worker: installed")})),self.addEventListener("activate",(function(e){console.log("Service worker: activated"),e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if("v1"!==e)return console.log("Service Worker: Clearing old cache"),caches.delete(e)})))})))})),self.addEventListener("fetch",(function(e){console.log("Service Worker: Fetching",e.request.url),e.respondWith(fetch(e.request).then((function(n){var t=n.clone();return caches.open("v1").then((function(n){n.put(e.request,t)})),n})).catch((function(){return caches.match(e.request)})).then((function(e){return e})))}));