
import React, { Component } from 'react'
import firebase from 'firebase';
import './style.scss';

class LoginPage extends Component {
    constructor(props) {
      super(props)
    }
    render() { 
        return (
      <div className="login-page">
        <button onClick={this.props.login}>
   Log in 
        </button>
      </div>
        )
    }
  }
  
  export default LoginPage
  