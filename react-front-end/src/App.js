import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/Login'
import axios from 'axios'

import './App.css';
import './styles/styles.css';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userBetInformation: []
    }

    this.handleNotificationSelection = this.handleNotificationSelection.bind(this);
  }

  getNotifications() {
    axios.get('http://localhost:8080/notifications', { withCredentials: true })
    .then(response => {
      console.log("---------", response)
      this.setState({
        userBetInformation: response.data
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  handleNotificationSelection = (id, truthy) => {
    // event.preventDefault()
    
    console.log("-----------", id, truthy )
    let result = this.state.userBetInformation.find(rez => {
      return rez.id === id
    })
    console.log(result.notificationType)

    switch(result.notificationType) {
      case ("invite"):
      axios.put(`http://localhost:8080/notifications/${result.id}/termStatus`, {termStatus: truthy}, {withCredentials: true});
      break;

      case ("teamSelect"):
          axios.put(`http://localhost:8080/notifications/${result.id}/teamSelect`, {teamSelect: truthy}, {withCredentials: true});
          break;
      
      default: 
      break;
    }
  }

  componentDidMount() {
    this.getNotifications()
  }

  render() {
    return (
      <div>
        <NavBar 
        notificationType = { this.state.userBetInformation }
        handleNotificationSelection = { this.handleNotificationSelection }
        />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
