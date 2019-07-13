import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
// import warehouseReducer from './warehouseReducer'

import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    poststore: postReducer,
    // travel: travelReducer,
    // warehouse: warehouseReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});


export default rootReducer
