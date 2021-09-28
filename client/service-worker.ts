const cacheName = "v1";

self.addEventListener("install", (event: any) => {
  console.log("Service worker: installed");
});

self.addEventListener("activate", (event: any) => {
  console.log("Service worker: activated");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event: any) => {
  if (
    event.request.url ===
    "chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js"
  ) {
    return null;
  }
  console.log("Service Worker: Fetching", event.request.url);
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(event.request))
      .then((res) => res)
  );
});
