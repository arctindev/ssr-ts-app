const cacheName = 'app_cache';
interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}

declare function skipWaiting(): void;
interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response> | Response): Promise<Response>;
}

self.addEventListener('install', (event) => {
  console.log('Service worker: installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  console.log('Service worker: activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  console.log('Service Worker: Fetching', event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .then((response) => {
        console.log('Service Worker: Adding files to cache', event.request.url);
        fetch(event.request).then((response) => {
          const resClone = response.clone();
          caches.open(cacheName).then((cache) => {
            cache.put(event.request, resClone);
          });
        });
        return response;
      })
  );
});
