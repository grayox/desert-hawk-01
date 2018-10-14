// source: original fuse template plus edits inspired by https://youtu.be/gf5bVfVlNUM?t=164
// import { firestore } from './firebase-db';
import { firebase } from './firebase-db';

import { applyMiddleware, compose, createStore } from 'redux';
import reducers from 'my-app/store/reducers';
// import reducers from 'my-app/store/reducers/my-reducers';
import thunk from 'redux-thunk';

// begin ~@edit@~
// https://youtu.be/gf5bVfVlNUM?t=164
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import AppConfig from 'my-app/AppConfig';
// import firebase from 'firebase'

// Initialize firebase instance
// firebase.initializeApp(AppConfig.fbConfig);
// end ~@edit@~

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  // begin ~@edit@~
  // applyMiddleware(thunk)
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(AppConfig.fbConfig),
  reactReduxFirebase(firebase, AppConfig.fbConfig),
  // reactReduxFirebase(firestore, AppConfig.fbConfig),
  // end ~@edit@~
);

const store = createStore(reducers, enhancer);

export default store;