// Service worker mínimo, solo para que el móvil reconozca la web como
// instalable. No cachea nada todavía; los datos siempre se piden
// directamente a Google Sheets.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // De momento no interceptamos peticiones, solo dejamos pasar.
});
