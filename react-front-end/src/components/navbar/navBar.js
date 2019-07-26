import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewBet from './newbet/NewBet.js';
import NotificationList from './notifications/NotificationList';
import UserOptions from './UserOptions';
import { Menu, Layout } from 'antd';

class NavBar extends Component {

  render() {
    return (
      <Layout.Header className='header'>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>Betme.<span className='logo--accent'>gg</span></Link>
          </div>
          <Menu
            theme='dark'
            mode='horizontal'
            selectable={false}
            className='navigation'
          >
            <Menu.Item>
              <NotificationList
                userBets={this.props.userBets}
                handleNotificationSelection={this.props.handleNotificationSelection}
              />
            </Menu.Item>
            <Menu.Item><UserOptions /></Menu.Item>
          </Menu>
          <div className='navigation__btn'><NewBet /></div>
        </div>
      </Layout.Header>
    );
  }
}

export default NavBar;