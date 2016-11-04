import React, {Component} from 'react';
import CreateToDos from './CreateToDos';
import TaskList from './TaskList'

// user={this.state.user && this.state.user.email}
// tasks={this.state.tasks}
// addTask={this.addTask}


const cleanState = () => ({
  text: '',
  editIndex: null,
});

export default class ToDos extends Component {
  state = cleanState();

  updateState(prop, event) {
    this.setState({
      [prop]: event.target.value
    });
  }

  addTask = () => {
    this.props.addTask(this.state.text, this.props.user);
    this.setState(cleanState());
  }

  deleteTask = id => this.props.deleteTask(id);



  render() {
    return (
      <div>
        <CreateToDos
          addTask={this.addTask}
          user={this.props.user}
          task={this.state.text}
          textChange={this.updateState.bind(this,'text')}
        />

        {this.props.tasks.map((task, index) =>
          <TaskList
            task={task.text}
            index={index}
            id={task._id}
            key={task._id}
            deleteTask={this.deleteTask}
            user={this.props.user}
          />

         )}

      </div>
    )
  }
}
