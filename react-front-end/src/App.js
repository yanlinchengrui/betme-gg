import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

import './App.css';
import './styles/style.css';
import 'antd/dist/antd.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
    
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
