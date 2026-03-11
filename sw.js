const CACHE_NAME = 'mgd-temizlik-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js',
    'https://unpkg.com/mqtt@5.0.3/dist/mqtt.min.js' // DÜZELTİLDİ: index.html ile aynı sürüm
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) return response;
                return fetch(event.request);
            })
    );
});
