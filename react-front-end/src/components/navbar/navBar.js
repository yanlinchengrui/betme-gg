import React, { Component } from "react";
import CreateBet from "./createBet.js";
import Notification from "./notification";
import UserOption from "./userOptions";
import axios from "axios";
import { Menu, Layout, Form } from "antd";

class NavBar extends Component {

  render() {
    return (
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div style={{ float: 'left', color:'white' }}>Betme.gg</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', float: 'right' }}
      >
        <Menu.Item key="1">Notifications</Menu.Item>
        <Menu.Item key="2">User Options</Menu.Item>
        <Menu.Item key="3"><CreateBet/></Menu.Item>
      </Menu>
    </Layout.Header>
    );
  }
}

export default NavBar;
