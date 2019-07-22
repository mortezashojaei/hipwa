import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Where  import update dialog message and workbox-window
//First install workbox-window with npm
import { Workbox } from 'workbox-window';
import {UpdateMessage} from './Dialogs';
import { initializeFirebase } from './pushNotification.js';

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//intial firebase
initializeFirebase();

//configure service worker and so on:

//What Is Your Service Worker Name?
const ServiceWorkerName = 'sw.js';
//register service worker
if ('serviceWorker' in navigator) {
    const wb = new Workbox(ServiceWorkerName);

    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        if (window.confirm(UpdateMessage)) {
          window.location.reload();
        }
      }
    });
    wb.register();
  }
  
