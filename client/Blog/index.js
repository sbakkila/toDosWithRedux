// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, { Component } from 'react';

// components
import AddPostForm from './AddPostForm';
import BlogPost from './BlogPost';

// styling
import './index.css';

const cleanState = () => ({
  addOrUpdate: 'add',
  title: '',
  body: '',
  editIndex: null
});


class Blog extends Component {
  state = cleanState();

  updateState(prop, event) {
    this.setState({
      [prop]: event.target.value
    });
  }

  editPost = (post, index) => {
    this.setState({
      addOrUpdate: 'update',
      title: post.title,
      body: post.body,
      editIndex: index
    });
  }

  deletePost = id => this.props.deletePost(id);

  addPost = () => {
    this.props.addPost(this.state);
    this.setState(cleanState());
  }

  updatePost = () => {
    this.props.updatePost(this.state);
    this.setState(cleanState());
  }

  render() {
    return (
      <ul className="blog-list">
        <h1>
          To Do List!
        </h1>
        <AddPostForm
          title={this.state.title}
          titleChange={this.updateState.bind(this,'title')}
          body={this.state.body}
          bodyChange={this.updateState.bind(this,'body')}
          buttonStr={`${this.state.addOrUpdate === 'update' ? 'Update' : 'Add'} Task`}
          buttonClickFunc={this.state.addOrUpdate === 'update' &&
          this.updatePost ||
          this.addPost}
        />
        {
          this.props.posts.map((post, index) =>
            <BlogPost
              post={post}
              index={index}
              key={post._id}
              delete={this.deleteTask}
              edit={this.editTask}
              userEmail={this.props.userEmail}
            />
          )
        }
      </ul>
    );
  }
}

Blog.defaultProps = {
  posts: []
};

export default Blog;
