import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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
    firebase.initializeApp(AppConfig.fbConfig);
}

const auth = firebase.auth();
const db = firebase.database();

export {
    firebase,
    auth,
    db,
};
