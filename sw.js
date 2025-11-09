self.addEventListener('install', e=>{
  e.waitUntil(caches.open('pdelta-v1').then(c=>c.addAll([
    '/', '/index.html', '/styles.css', '/app.js',
    '/assets/logo.svg','/assets/search.svg','/assets/filter.svg','/assets/home.svg','/assets/saved.svg','/assets/history.svg','/assets/external.svg'
  ])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
