import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



import {
  addTaskRequest,
  deleteTaskRequest,
  textChange
} from '../../redux/actionCreators';


@connect(store => ({
  taskForm: store.taskForm,
  user: store.user
}))
export default class CreateToDos extends Component {
  static propTypes = {
    taskForm: PropTypes.shape({
      text: PropTypes.string,
      user: PropTypes.string
    }),
    dispatch: PropTypes.func.isRequired
  };

  addTask = () => this.props.dispatch(

    addTaskRequest({
      text: this.props.taskForm.text,
      user: this.props.user._id
    })
  );

  changeText = event => this.props.dispatch(
      textChange({
        text: event.target.value
      })
  );

  render() {
    return (
    <li>
      <input value={this.props.taskForm.text}
        onChange={this.changeText}
      />
      <button onClick={this.addTask}>
        Add a task!
      </button>
    </li>
    );
  }
}
