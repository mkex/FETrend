var CACHE_NAME = 'zerocopy-pwa-demo-v1';

var urlsToCache = [
	'/',
	'/index.html',
	'/css/app.css',
	'/js/app.js',
	'/images/icon-192x192.png',
	'/images/icon-384x384.png',
  '/images/profile.png'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
		})
	);
	console.log('Service Worker installed');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
		.then(function(res) {
			return res;
		})
  );
});