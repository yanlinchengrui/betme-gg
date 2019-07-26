import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';
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
      <div style={{ width: '300px', margin: '0 auto', padding: '20px', backgroundColor: '#3745fe', borderRadius: '20px' }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input placeholder='Email' value={this.state.email} onChange={this.handleEmail} />
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder='Password' value={this.state.password} onChange={this.handlePassword} />
          </Form.Item>
          <Button htmlType='submit' type='primary' style={{ width: '100%' }}>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;