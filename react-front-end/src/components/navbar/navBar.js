import React, { Component } from 'react';
import NewBet from './newbet/NewBet.js';
import Notification from './Notification';
import UserOptions from './UserOptions';
import { Menu, Layout } from 'antd';

class NavBar extends Component {

  render() {
    return (
      <Layout.Header className='header'>
        <div className='logo'>Betme.<span className='logo--accent'>gg</span></div>
        <Menu
          theme='dark'
          mode='horizontal'
          selectable={false}
          className='navigation'
        >
          <Menu.Item><Notification /></Menu.Item>
          <Menu.Item><UserOptions /></Menu.Item>
        </Menu>
        <div className='navigation__btn'><NewBet/></div>
      </Layout.Header>
    );
  }
}

export default NavBar;