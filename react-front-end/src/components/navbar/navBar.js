import React, { Component } from "react";
import CreateBet from "./createbet/createBet.js";
import Notification from "./notification";
import UserOption from "./userOptions";
import axios from "axios";
import { Menu, Layout, Form } from "antd";

import "../../styles/navbar/navbar.css";

class NavBar extends Component {

  render() {
    return (
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">Betme.<span className="logo--purp">gg</span></div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        className="main-nav"
      >
        <Menu.Item key="1">Notifications</Menu.Item>
        <Menu.Item key="2">User Options</Menu.Item>
      </Menu>
      <div className="create-bet__btn"><CreateBet/></div>
    </Layout.Header>
    );
  }
}

export default NavBar;
