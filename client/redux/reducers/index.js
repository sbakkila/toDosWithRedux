import * as actionTypes from '../actionTypes';

const initialState = {
  user: null,
  tasks: [],
  taskForm: {
    text: ''
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_APP :
      return Object.assign({},state,{
        user: action.user,
        posts: action.posts
      });

    case actionTypes.LOCAL_AUTH :
      return Object.assign({},state,{
        user: action.user
      });

    case actionTypes.LOG_OUT :
      return Object.assign({},state,{
        user: null
      });

    case actionTypes.ADD_TASK :
      // state is immutable, each change replaces an old object with a new one
      return Object.assign({},state,{
        posts: [
          action.post,
          ...state.posts
        ],
        taskForm: Object.assign({}, initialState.postForm) // clear form
      });

    case actionTypes.DELETE_TASK :
      return Object.assign({},state,{
        posts: state.posts.filter(post => post._id !== action._id),
      });

    default:
      return state;
  }
};

export default rootReducer;
