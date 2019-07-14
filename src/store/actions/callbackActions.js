export const registerCallback = (event, eventID, eventType) => {
  return(dispatch, getState, {getFirebase, getFirestore, HttpService, urls, DataUtil}) =>{
    dispatch({type: "UPDATE_EVENTS", event: event, id: eventID, etype: eventType}) 
  }
  }

export const executeCallback = (eventID, eventType, nextState) => {
  return(dispatch, getState, {getFirebase, getFirestore, HttpService, urls, DataUtil}) => {
    const callbacks = getState().callbackstore.callbacks;

    if(callbacks.length != 0){
      callbacks.forEach( callback => {
        if( callback.id == eventID && typeof callback.event === 'function' ){
          callback.event(nextState); }  
      })
    }
  }
}
