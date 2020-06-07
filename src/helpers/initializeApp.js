import { firestore, initializeApp } from "firebase/app";
import "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyCIjD5wVf0xYTm4a4kkavDXZTHVNsEab08",
  authDomain: "forum-a1417.firebaseapp.com",
  databaseURL: "https://forum-a1417.firebaseio.com",
  projectId: "forum-a1417",
  storageBucket: "forum-a1417.appspot.com",
  messagingSenderId: "713794119649",
  appId: "1:713794119649:web:af0cb38099bec495c694a0",
});

firestore().settings({ timestampsInSnapshots: true });

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch((err) => {
    console.error(err);
  });
