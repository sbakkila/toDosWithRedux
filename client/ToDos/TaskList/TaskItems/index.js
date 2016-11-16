// this.updateTask
import React, {Component} from 'react';

// this.updateTask = => {
//
// }

export default class TaskItems extends Component {
 render() {
   return (
     <div>
      <p>{this.props.task.text}</p>
      <button
        onClick={this.props.delete.bind(this, this.props.task._id)
      }>
        Delete
      </button>
    </div>
  );
 }

}
