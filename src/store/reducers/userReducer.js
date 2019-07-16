const initialState = {
  email: null,
  photo: null,
  firstName: null,
  lastName: null,
};

const userReducer = (state, action) => {
  switch(action.type){
    case "SET_USER":
      console.log("Setting new user...")
      return {
        ...state,
        email: action.user.email,
        photo: action.user.photo,
        firstName: action.user.firstName,
        lastName: action.user.lastName
      };
  
    default: 
      return state == undefined ? initialState : state;     
  }
};

export default userReducer;
  