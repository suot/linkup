import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import callbackReducer from './callbackReducer'
import userReducer from './userReducer'

import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    poststore: postReducer,
    callbackstore: callbackReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});


export default rootReducer
