const cacheName = 'v1';

const cacheAssets = [
  'index.html',
  'main.js',
  'main.css',
  'home.js',
  'about.js',
  'services.js',
  'favicon.ico',
  'manifest.json',
]

self.addEventListener('install' , (event : any) => {
  console.log('Service worker: installed');

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Service Worker : Caching Files')
      cache.addAll(cacheAssets);
    })
    .then(() => (self as any).skipWaiting())
  );
});

self.addEventListener('activate' , (event : any) => {
  console.log('Service worker: activated');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache!== cacheName) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      )
    })
  )
});

self.addEventListener('fetch', (event : any) => {
  console.log('Service Worker: Fetching');
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  )
})
