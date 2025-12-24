importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: 'AIzaSyCdO0gJq9pddwtH2Ixwmh2ZyBH7b-yAF9I',
    appId: '1:160379888343:web:1acd2f66599033954f8692',
    messagingSenderId: '160379888343',
    projectId: 'sumato-1bef7',
    authDomain: 'sumato-1bef7.firebaseapp.com',
    storageBucket: 'sumato-1bef7.firebasestorage.app',
    measurementId: 'G-8HGBZTHYJH',
};
firebase.initializeApp(firebaseConfig);

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] BG message:", payload);

  var notification = payload.notification || {};
  var title = notification.title || "Notification";

  var options = {
    body: notification.body || "",
    icon: "/icons/Icon-192.png",
  };

  self.registration.showNotification(title, options);
});