import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = e => {
    this.setState({ email: e.target.value })
  }

  handlePassword = e => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    Axios.post('http://localhost:3000/login', {
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type='email' value={this.state.email} onChange={this.handleEmail} />
        </label>
        <label>
          Password:
          <input type='password' value={this.state.password} onChange={this.handlePassword} />
        </label>
        <input type='submit' value='Login' />
      </form>
    );
  }
}

export default Login;