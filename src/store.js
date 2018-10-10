import { applyMiddleware, compose, createStore } from 'redux';
// import reducers from 'store/reducers';
import reducers from 'my-app/store/reducers';
import thunk from 'redux-thunk';

// begin ~@edit@~
// https://youtu.be/gf5bVfVlNUM?t=164
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import AppConfig from '/src/my-app/AppConfig';
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
  reactReduxFirebase(AppConfig.fbConfig),
  // end ~@edit@~
);

const store = createStore(reducers, enhancer);

export default store;