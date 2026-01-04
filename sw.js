/* Offline Service Worker — Streak Challenge AI */
const CACHE_NAME = "streak-ai-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./questionbank_toan9_300.csv",
  "./students_sample.csv",
  "./students_sample.xlsx",
  "./questions_sample.docx",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => (k===CACHE_NAME)?null:caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.url.endsWith(".csv") || req.url.endsWith(".json")) {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).catch(()=>cached)));
});
