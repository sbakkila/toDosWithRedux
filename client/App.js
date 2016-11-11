// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// action creators
import { initializationRequests } from './redux/actionCreators';

import Navbar from './Navbar';
import ToDos from './ToDos'

import './App.css';

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
