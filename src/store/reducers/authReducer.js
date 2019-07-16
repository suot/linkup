const initState = {
    authError: null,
    token: null
    //region: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'SIGNUP_SUCCESS':
            console.log('Sign up success');
            return {
                ...state,
                authError: null,
                // status: 'SIGN_UP_SUCCESS'
            };
        case 'SIGNUP_ERROR':
            console.log('Sign up error: ', action.err);
            return {
                ...state,
                authError: action.err
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGOUT_SUCCESS':
            console.log('Logout success');
            return {
                //state: null,
                authError: null
            }
        case 'LOGOUT_ERROR':
            console.log('Logout error');
            return {
                ...state,
                authError: 'Logout failed'
            }
        case 'PROFILE_UPDATE_SUCCESS':
            console.log('Profile was updated successfully');
            return {
                ...state
            };
        case 'PROFILE_UPDATE_ERROR':
            console.log('Error occurred when updating profile');
            return {
                ...state,
                authError: 'Error occurred when updating profile'
            };
        case "SET_AUTH_TOKEN":
          console.log('Setting user token');
          
          localStorage.setItem("user.token", action.token);
          return {
            ...state,
            token: action.token
          };
        
        default:
            var token = localStorage.getItem("user.token");

            if( state == undefined && token != null)
              return initState; 

            return {
              ...state,
              token: token
            };
    }
};

export default authReducer
