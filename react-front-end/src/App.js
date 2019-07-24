import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/navbar/NavBar'
import Login from './components/Login'

import './App.css';
import './styles/style.css';
import 'antd/dist/antd.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default App;
