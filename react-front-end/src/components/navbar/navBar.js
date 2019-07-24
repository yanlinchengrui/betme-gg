import React, { Component } from "react";
import NewBet from "./newbet/NewBet.js";
import Notification from "./Notification";
import UserOptions from "./UserOptions";
import { Menu, Layout } from "antd";

class NavBar extends Component {

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
        <Menu.Item className="main-nav__notification"><Notification /></Menu.Item>
        <Menu.Item><UserOptions /></Menu.Item>
      </Menu>
      <div className="new-bet__btn"><NewBet/></div>
    </Layout.Header>
    );
  }
}

export default NavBar;


{/* <Icon type="bell" theme="filled" /> */}