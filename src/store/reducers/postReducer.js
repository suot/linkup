const defaultState = {
  posts: {},
}

const postReducer = (state, action) => {
  switch (action.type){
    case 'SET_POST_STATE':
      console.log(action.posts);
      return {
        ...state,
        posts: action.posts,
      };
    
    default: 
      return state = defaultState;
  }
}

export default postReducer;