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
  //custom:chache any image used in webapp
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
  

// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  // Retrieve the textual payload from event.data (a PushMessageData object).
  // Other formats are supported (ArrayBuffer, Blob, JSON), check out the documentation
  // on https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData.
  const payload = event.data ? event.data.text() : 'no payload';

  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and use the payload
    // as the body.
    self.registration.showNotification('ServiceWorker Cookbook', {
      body: payload,
    })
  );
});


  
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }