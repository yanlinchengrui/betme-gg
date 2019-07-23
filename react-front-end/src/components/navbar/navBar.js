import React, { Component } from "react";
import NewBet from "./newbet/NewBet.js";
import Notification from "./Notification";
import UserOption from "./UserOptions";
import axios from "axios";
import { Menu, Layout, Icon } from "antd";

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
        <Menu.Item key="1"><Icon type="bell" theme="filled" /></Menu.Item>
        <Menu.Item key="2"><Icon type="smile" theme="filled" /></Menu.Item>
      </Menu>
      <div className="new-bet__btn"><NewBet/></div>
    </Layout.Header>
    );
  }
}

export default NavBar;
