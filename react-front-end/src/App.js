import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/NavBar'
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return <Navbar />
  }
}

export default App;
