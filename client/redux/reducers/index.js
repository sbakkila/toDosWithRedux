import * as actionTypes from '../actionTypes';

const initialState = {
  user: null,
  tasks: [],
  taskForm: {
    text: '',
    user: ''
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_APP :
      return Object.assign({},state,{
        user: action.user,
        tasks: action.tasks
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
        tasks: [
          action.task,
          ...state.tasks
        ],
        taskForm: Object.assign({}, initialState.taskForm) // clear form
      });

    case actionTypes.DELETE_TASK :
      return Object.assign({},state,{
        tasks: state.tasks.filter(task => task._id !== action._id),
      });

    case actionTypes.TEXT_CHANGE :
      return Object.assign({},state,{
        taskForm: Object.assign({}, state.taskForm, action.text)
      })

      // taskform: { text: <value> }

    default:
      return state;
  }
};

export default rootReducer;
