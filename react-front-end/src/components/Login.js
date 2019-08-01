import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

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
    axios.post('http://localhost:3000/login', {
      email: this.state.email,
      password: this.state.password
    }).then(() => {
      this.props.getUserBetsDetails();
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div style={{ width: '300px', height: '205px', margin: '40px auto 0', padding: '20px', backgroundColor: '#3745fe', borderRadius: '20px' }}>
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