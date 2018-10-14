import * as firebase from 'firebase';
// import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// https://www.npmjs.com/package/redux-firestore
// import { createStore, combineReducers, compose } from 'redux'
// import { reduxFirestore, firestoreReducer } from 'redux-firestore'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
import 'firebase/firestore'

import AppConfig from '../../src/my-app/AppConfig.js';

// const prodConfig = {
//     apiKey           : "YOUR_API_KEY",
//     authDomain       : "your-app.firebaseapp.com",
//     databaseURL      : "https://your-app.firebaseio.com",
//     projectId        : "your-app",
//     storageBucket    : "your-app.appspot.com",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
// };

// const devConfig = {
//     apiKey           : "YOUR_API_KEY",
//     authDomain       : "your-app.firebaseapp.com",
//     databaseURL      : "https://your-app.firebaseio.com",
//     projectId        : "your-app",
//     storageBucket    : "your-app.appspot.com",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
// };

// const config = process.env.NODE_ENV === 'production'
//     ? prodConfig
//     : devConfig;

if ( !firebase.apps.length )
{
  // console.log('firebase1\n', firebase);
  firebase.initializeApp(AppConfig.fbConfig);
  firebase.firestore();
  // console.log('firebase2\n', firebase);
  // firebase.collection('test').add({new: 'data'});
  // firebase.firestore().collection('test').add({new: 'data'});
}

const db = firebase.database();
const auth = firebase.auth();
// const firestore = firebase.firestore();

export {
  db,
  auth,
  // firestore,
  firebase,
};
