import React, { Component } from "react";
import NewBet from "./newbet/NewBet.js";
import NotificationList from "./notifications/NotificationList";
import UserOptions from "./UserOptions";
import { Menu, Layout } from "antd";
import axios from 'axios'

class NavBar extends Component {
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
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">Betme.<span className="logo--purp">gg</span></div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        style={{ lineHeight: '64px' }}
        className="main-nav"
      >
        <Menu.Item className="main-nav__notification"><NotificationList notificationType= { this.state.userBetInformation }/></Menu.Item>
        <Menu.Item><UserOptions /></Menu.Item>
      </Menu>
      <div className="new-bet__btn"><NewBet/></div>
    </Layout.Header>
    );
  }
}

export default NavBar;


{/* <Icon type="bell" theme="filled" /> */}