import React, {Component} from 'react';

export default class CreateToDos extends Component {
 render() {
   return (
     <li>
       <input
          onChange={this.props.textChange}
          value={this.props.task}
       />
       <button onClick={this.props.addTask}>
         Add a task!
       </button>
     </li>
   );
 }
}
