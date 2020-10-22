import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7UNxtYWvEl7vuz8tGOO_OCB71DdFH4C4",
    authDomain: "mindx-web-41-chat-app.firebaseapp.com",
    databaseURL: "https://mindx-web-41-chat-app.firebaseio.com",
    projectId: "mindx-web-41-chat-app",
    storageBucket: "mindx-web-41-chat-app.appspot.com",
    messagingSenderId: "1083542897087",
    appId: "1:1083542897087:web:f257505bf2393b6e08a10a"
  };

  firebase.initializeApp(firebaseConfig);
  export const firebaseAuth = firebase.auth();
  export const firebaseDb = firebase.firestore();