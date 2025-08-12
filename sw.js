// Define um nome para o cache
const CACHE_NAME = 'checklist-atendimento-v1';

// Lista de arquivos a serem cacheados na instalação
const urlsToCache = [
  './', // Cacheia a raiz (geralmente index.html)
  './index.html', // O seu arquivo principal
  'https://cdn.tailwindcss.com', // Cacheia o Tailwind CSS
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js' // Cacheia a biblioteca jsPDF
];

// Evento de instalação do Service Worker
self.addEventListener('install', event => {
  // Espera até que o cache seja aberto e todos os arquivos sejam adicionados
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de fetch (intercepta as solicitações de rede)
self.addEventListener('fetch', event => {
  event.respondWith(
    // Tenta encontrar a resposta no cache
    caches.match(event.request)
      .then(response => {
        // Se encontrar no cache, retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não encontrar, faz a solicitação à rede
        return fetch(event.request);
      }
    )
  );
});

// Opcional: Limpa caches antigos em uma nova ativação
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
