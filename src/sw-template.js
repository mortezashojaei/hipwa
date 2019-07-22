if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
  
/*  Updating SW lifecycle to update the app after user triggered refresh    */
      workbox.core.skipWaiting();
      workbox.core.clientsClaim();


      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([]);
  
  /* custom cache rules*/
  //custom:chache any image used in webapp
  workbox.routing.registerRoute(
        /^((?!\/morteza).)*$/,
        workbox.strategies.cacheFirst({
          cacheName: 'notmorteza',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );



// Register event listener for the 'push' event.
self.addEventListener('push', function(e) {
  var body,title,icon,click_action,vibrate;
  var actions = [];
  const {notification} =e.data.json()
    console.log();
    body = notification.body;
    title= notification.title;
    icon= notification.icon;
    click_action=notification.click_action;
    actions=JSON.parse(e.data.json().data.actions);
    vibrate=notification.vibrate;

 
  var options = {
    body: body,
    icon: icon,
    vibrate: vibrate,
    actions: actions,
    click_action:click_action
  };
  e.waitUntil(
    self.registration.showNotification(title, options)
  );
});

  
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }