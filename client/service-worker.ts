const cacheName = 'app_cache';

declare function skipWaiting(): void;

interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}
interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response> | Response): Promise<Response>;
}

self.addEventListener('install', (event) => {
  console.log('Service worker: Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  console.log('Service worker: Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing old cache', cache);
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
        fetch(event.request)
          .then((response) => {
            console.log('Service Worker: Adding response to cache', response);
            caches
              .open(cacheName)
              .then((cache) => {
                cache.put(event.request, response);
              })
              .catch((err) =>
                console.log('Service Worker: Cashing error', err)
              );
          })
          .catch((err) => console.log('Service Worker: Fetching error', err));
        return response;
      })
  );
});
