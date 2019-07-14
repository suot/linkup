const defaultState = {
  callbacks: []
}

const eventReducer = (state, action) => {
  switch (action.type){
    case "UPDATE_EVENTS":
      console.log("Registering new Event...");
      return {
        ...state,
        callbacks: [action, ...state.callbacks]
      };      

    default: 
      return state === undefined ? defaultState : state;
  }
}

export default eventReducer;
