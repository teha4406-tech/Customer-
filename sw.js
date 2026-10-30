// Service worker بسيط: بيخلي الأبلكيشن قابل للتثبيت، ومبيخزّنش ملفات (عشان التحديثات تظهر فورًا)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
