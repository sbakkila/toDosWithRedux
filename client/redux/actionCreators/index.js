import * as actionTypes from '../actionTypes';
import request from '../../utils/request';

export function initializeUserAndTasks({user, tasks}) {
 return {
   type: actionTypes.INITIALIZE_APP,
   user,
   tasks
 };
}

export function initializationRequests() {
 return dispatch =>
   // retrieve app initialization data once root component has mounted

    request.get('/auth/session')
      .then(
        ({ data: user }) =>
          Promise.all([
            Promise.resolve(user),
             user && user._id && request.get(`/api/tasks/${user._id}`) || {}
          ])
        )
      .then(([userData, { data: tasks = []}]) =>
              dispatch(initializeUserAndTasks({
                user: userData || null,
                tasks:tasks.sort((a,b) => Date.parse(b.createdDate) - Date.parse(a.createdDate)) // sort by date, descending
              }))
      ).catch( err => console.log(err))
  }

export function localAuth(user) {
 return {
   type: actionTypes.LOCAL_AUTH,
   user
 };
}

export function localAuthRequest(_id, email, password) {
 const addingPassword = !!_id;
 const route = addingPassword ? '/auth/addPassword' : '/auth/login';
 const body = addingPassword ? {
   _id,
   email
 } : {
   email,
   password
 };
 return dispatch => request.post({
   route,
   body
 }).then(({ data: user }) =>
   dispatch(localAuth(user)));
}

export function logout() {
 return {
   type: actionTypes.LOG_OUT
 };
}

export function logoutRequest() {
 return dispatch => request.get('/auth/logout')
   .then(() =>
     dispatch(logout()));
}

export function addTask(task) {
 return {
   type: actionTypes.ADD_TASK,
   task
 };
}

export function addTaskRequest(taskBody) {
 return dispatch => request.post({
   route: `api/add/task/`,
   body: taskBody
 }).then(({ data }) => dispatch(addTask(data)));
}

//edit these
export function deleteTask(_id) {
 return {
   type: actionTypes.DELETE_TASK,
   _id
 };
}

export function deleteTaskRequest(_id) {
 return dispatch => request.delete(`api/delete/task/${_id}`)
   .then(res => dispatch(deleteTask(_id)));
}

export function textChange(text) {
  return {
    type: actionTypes.TEXT_CHANGE,
    text
  }
}
