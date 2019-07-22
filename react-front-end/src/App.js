import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/navBar'
import './App.css';
import 'antd/dist/antd.css';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }



  render() {
    return <Navbar />
  }
}

export default App;
