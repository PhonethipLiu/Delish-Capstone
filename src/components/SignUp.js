import React, { Component } from 'react';
import { auth } from './config/AuthHelpers';

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

class SignUp extends Component {

    state = { 
            registerError: null 
        }
       
  
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value, this.name.value)
        .then(() => {
            this.props.changeURL("user");
        })
        .catch(e => this.setState(setErrorMsg(e)))
      
  }

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register a new account</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="name" className="form-control" placeholder="Name" ref={(name) => this.name = name} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}

export default SignUp;