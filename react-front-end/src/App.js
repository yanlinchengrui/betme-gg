import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import axios from 'axios'

import './App.css';
import './styles/style.css';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userBetInformation: []
    }
  }

  getNotifications() {
    axios.get('http://localhost:8080/notifications', { withCredentials: true })
    .then(response => {
      this.setState({
        userBetInformation: response.data
      })
      console.log(response.data)
      console.log(this.state.userBetInformation)
    })
    .catch(err => {
      console.log(err)
    })

  }

  componentDidMount() {
    this.getNotifications()
  }

  render() {
    return (
      <div>
        <NavBar notificationType = { this.state.userBetInformation }/>
    
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
