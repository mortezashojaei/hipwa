import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBFuSXQGnIsX-MnDi6WxVUEgguAfKMGS9E",
    authDomain: "hipwa-4a5e8.firebaseapp.com",
    databaseURL: "https://hipwa-4a5e8.firebaseio.com",
    projectId: "hipwa-4a5e8",
    storageBucket: "",
    messagingSenderId: "207283395332",
    appId: "1:207283395332:web:7137fd2fc16316ce"
  });


  navigator.serviceWorker
  .register('/sw.js')
  .then((registration) => {
    firebase.messaging().useServiceWorker(registration);
  });

}


export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}