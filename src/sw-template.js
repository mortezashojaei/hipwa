if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
  
/*  Updating SW lifecycle to update the app after user triggered refresh    */
      workbox.core.skipWaiting()
      workbox.core.clientsClaim()


      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([]);
  
  /* custom cache rules*/
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
  
  
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }