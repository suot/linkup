import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './components/auth/config/fbConfig';
import { HttpService } from './services/HttpService'
import { urls } from './urls'
import { DataUtil } from './services/DataUtil'

if (localStorage.getItem('user.token')) HttpService.setAuthHeader("Bearer", localStorage.getItem('user.token'));

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore, HttpService, urls, DataUtil })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    )
);

// noinspection JSUnresolvedVariable
store.firebaseAuthIsReady.then(() => {
        ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
        serviceWorker.unregister()
    }
);
