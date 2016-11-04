// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, { Component } from 'react';

// images
import logo from './logo.svg';

// styling
import './index.css';


export default class Navbar extends Component {
  handleLocalAuth = () => {
    const email = this.refs.email && this.refs.email.value;
    const password = this.refs.password && this.refs.password.value;
    this.props.localAuth(email, password);
  }

  render() {
    const user = this.props.user;

    return (
      <nav className="example-react-app-nav">
        <img
          src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAARzAAAAJDBlZmFiN2FhLTM5YjMtNGYyZi04OTkzLTQ0MmVjYzgxMzc0Zg.jpg"
          className="example-react-app-logo"
          alt="example-react-app-logo"
        />
        <h2 className="example-react-app-header">
          Do these things! I believe in you!
        </h2>
        <ul className="navbar-auth nav navbar-nav navbar-right">
          <li
            className={`nav user-photo ${user && user.google && user.google.photo && 'show'}`}
            style={user && user.google && user.google.photo && {backgroundImage: `url(${user.google.photo})`}}
          />
          <li
            className={`nav user-photo ${user && user.facebook && user.facebook.photo && 'show'}`}
            style={user && user.facebook && user.facebook.photo && {backgroundImage: `url(${user.facebook.photo})`}}
          />
          <li className="nav-button">
            {
              (!user || !user.email || !user.hasPassword || !user.google || !user.google.photo || !user.facebook || !user.facebook.photo)
              &&
              <span>
                LOG IN &#10161;
                {
                  (!user || !user.google)
                  &&
                  <a href="/auth/google">
                    <i className="fa fa-google o-auth-btn"/>
                  </a>
                }
                {
                  (!user || !user.facebook)
                  &&
                  <a href="/auth/facebook">
                    <i className="fa fa-facebook o-auth-btn"/>
                  </a>
                }
                {
                  (!user || !user.email)
                  &&
                  <input
                    className="nav-input"
                    ref="email"
                    placeholder="email"
                    type="text"
                  />
                }
                {/*Repeating logic the the two below because of some CSS annoying-ness*/}
                {
                  (!user || !user.hasPassword)
                  &&
                  <input
                    className="nav-input"
                    ref="password"
                    placeholder="password"
                    type="password"
                  />
                }
                {
                  (!user || !user.hasPassword)
                  &&
                  <button
                    className="local-auth-button"
                    onClick={this.handleLocalAuth}
                  >
                    Post LocalAuth
                  </button>
                }
              </span>
            }
            {
              user
              &&
              <a
                className="nav-button log-out-button show"
                href="#"
                onClick={this.props.logout}
              >
                LOG OUT
              </a>
            }
          </li>
        </ul>
      </nav>
    );
  }
}
