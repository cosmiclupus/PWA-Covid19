var CACHE_NAME =  'covid19-pwa';
var urlsToCache = [
    '/'
];

// Install a service worker 

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
         .then(function(cache){
             console.log('Opened Cache');
             return cache.addAll(urlsToCache);
         })
    );
})

// Cache and return requests
self.addEventListener('fetch', event=> {
    event.respondeWith(
        caches.match(event.request)
          .then(function(response){
              if (response) {
                  return response;
              }
              return fetch(event.request);
            
            }
          )
        );
    })

// Update a service worker
self.addEventListener('activate', event => {
    var cacheWhitelist = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
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
    )
})
    
