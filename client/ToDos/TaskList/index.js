// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import TaskItems from './TaskItems';

// action creators
import {
  deleteTaskRequest
} from '../../redux/actionCreators';


@connect(store => ({
  tasks: store.tasks,
  userID: store.user && store.user._id
}))
export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      createdDate: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired
    })).isRequired,
    dispatch: PropTypes.func.isRequired
  }


  deleteTask = _id => this.props.dispatch(deleteTaskRequest(_id));

  render() {
    return (
      <ul className="blog-task-list">
        {
          this.props.tasks.map((task, index) =>
            <TaskItems
              task={task}
              index={index}
              key={task._id}
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
