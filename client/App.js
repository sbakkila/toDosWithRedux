// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// action creators
import { initializationRequests } from './redux/actionCreators';

import Navbar from './Navbar';
import ToDos from './ToDos'

import './App.css';


// export default class App extends Component {
//   state = {
//     user: null,
//     tasks: []
//   };
//
//   getTasks = userID => {
//     request.get(`/api/tasks/${userID}`).then(response =>{
//
//       console.log('*********')
//       console.log(response.data);
//       console.log('*********')
//
//
//       this.setState({
//         tasks: response.data
//       })
//     }
//     ).catch(err => console.error(err));
//   }
//
//
//   addTask = (text, userID) => {
//     const tasksBody = {
//       text: text,
//       user: userID
//     }
//
//     request.post({
//       route: '/api/add/task/',
//       body: tasksBody
//     }).then(res =>
//     //update the state after task is saved
//       this.setState({
//         tasks: this.state.tasks.unshift(res.data) && this.state.tasks
//       })
//     )
//   }
//
//   deleteTask = id =>
//     request.delete(`/api/delete/task/${id}`)
//       .then(() => this.setState({
//         tasks: this.state.tasks.filter(val => val._id !== id)
//       }));
//
//
//
//
//   addPost = postState => {
//     const postBody = {
//       title: postState.title,
//       body: postState.body
//     };
//
//     // Adding authed properties if user is logged in
//     if(this.state.user) postBody.email = this.state.user.email;
//     if(this.state.user && this.state.user.google && this.state.user.google.photo) {
//       postBody.photo = this.state.user.google.photo;
//       postBody.google_link = this.state.user.google.link;
//     }
//     if(this.state.user && this.state.user.facebook && this.state.user.facebook.photo) {
//       postBody.photo = this.state.user.facebook.photo;
//       postBody.facebook_link = this.state.user.facebook.link;
//     }
//
//     request.post({
//       route: '/api/post',
//       body: postBody
//     }).then(res =>
//
//       this.setState({
//       posts: this.state.posts.unshift(res.data) && this.state.posts
//     }));
//   };
//
//   updatePost = (postState, id) => {
//     const index = postState.editIndex;
//     request.put({
//       route: `/api/post/${this.state.posts[index]._id}`,
//       body: {
//         title: postState.title,
//         body: postState.body,
//         createdDate: new Date()
//       }
//     }).then(res => {
//       const newPostsArr = [...this.state.posts];
//       newPostsArr[index] = res.data;
//       this.setState({
//         posts: newPostsArr
//       });
//     });
//   };
//
//   deletePost = id =>
//     request.delete(`/api/post/${id}`)
//       .then(() => this.setState({
//         posts: this.state.posts.filter(val => val._id !== id)
//       }));
//
//   localAuth = (email, password) => {
//     const _id = this.state.user && this.state.user._id;
//     const addingPassword = !!_id;
//     const route = addingPassword ? '/auth/addPassword' : '/auth/login';
//     const body = addingPassword ? {
//       _id,
//       email
//     } : {
//       email,
//       password
//     };
//     request.post({
//       route,
//       body
//     }).then(res => {
//       this.setState({
//         user: res.data
//       })
//       res.data ? this.getTasks(res.data._id) : null;
//     }
//     );
//   }
//
//   logout = () =>
//     request.get('/auth/logout')
//       .then(() =>
//         this.setState({
//           user: null
//         }));
//
//   componentDidMount() {
//     // retrieve app initialization data once root component has mounted
//     request.get('/auth/session')
//       .then(res => {
//         // console.log(res);
//         this.setState({
//           user: res.data || null,
//         });
//         res.data ? this.getTasks(res.data._id) : null;
//       }).catch(err => console.log(err));
//   }


  @connect()
  export default class App extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.dispatch(initializationRequests());
    }

    render() {
      return (
        <div>
          <Navbar />
          <ToDos />
        </div>
      );
    }
  }
