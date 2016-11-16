import React, {Component} from 'react';
import CreateToDos from './CreateToDos';
import TaskList from './TaskList'


export default class ToDos extends Component {

  render() {
    return (
      <div>
        <CreateToDos />
        <TaskList />
      </div>
    )
  }
}
