// import "*"  from "firebase"
import firebase from "firebase";
import React from "react";
import { getAuth } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
// import App from './_app';

const firebaseConfig = {
  apiKey: "AIzaSyCIel7fNmXX_M25xo-1zKQ9v_5NYdqT9oE",
  authDomain: "products-ecommerce-10d93.firebaseapp.com",
  projectId: "products-ecommerce-10d93",
  storageBucket: "products-ecommerce-10d93.appspot.com",
  messagingSenderId: "302344863369",
  appId: "1:302344863369:web:5c10d7f18943cd89b01058",
  measurementId: "G-KVXJH1HP88",
};

// firebase.initializeApp(config);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// export default firebase;
