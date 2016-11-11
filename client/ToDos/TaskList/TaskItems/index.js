// this.updateTask
import React, {Component} from 'react';

// this.updateTask = => {
//
// }

export default class TaskItems extends Component {
 render() {
   return (
     <div>
      <p>{this.props.task}</p>
      <button onClick={this.props.deleteTask.bind(this, this.props.id)}>Delete</button>

    </div>
  );
 }

}
