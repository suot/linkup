const defaultState = {
  posts: []
}

const postReducer = (state, action) => {
  switch (action.type){
    case "SET_POST_STATE":
      console.log("UPDATING POST STATE...");
      return {
        ...state,
        posts: action.posts,
      };

    case "APPEND_POST_STATE":
      console.log("APPENDIG POST STATE...");
      return {
        ...state,
        posts: [action.post, ...state.posts]
      };

    default: 
      return state === undefined ? defaultState : state;
  }
}

export default postReducer;