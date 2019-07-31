import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewBet from './newbet/NewBet.js';
import NotificationList from './notifications/NotificationList';
import UserOptions from './UserOptions';
import { Menu, Layout } from 'antd';
import csgo from '../../images/csgo.svg'
import lol from '../../images/lol.svg'
import ow from '../../images/ow.svg'
import dota from '../../images/dota.svg'

class NavBar extends Component {

  render() {
    return (
      <Layout.Header>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>Betme.<span className='logo--accent'>gg</span></Link>
          </div>
          <Menu mode='horizontal' selectable={false}>
            <Menu.Item>
              <a href='http://localhost:3000/stream/lol'>
                <img src={lol} alt='League of Legends Stream' style={{ width: '24px', height: '24px' }} />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='http://localhost:3000/stream/csgo'>
                <img src={csgo} alt='Counter Strike: Global Offensive Stream' style={{ width: '24px', height: '24px' }} />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='http://localhost:3000/stream/ow'>
                <img src={ow} alt='Overwatch Stream' style={{ width: '24px', height: '24px' }} />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='http://localhost:3000/stream/dota2'>
                <img src={dota} alt='Dota 2 Stream' style={{ width: '24px', height: '24px' }} />
              </a>
            </Menu.Item>
          </Menu>

          <div className='notifications'>
            <NotificationList
              userBets={this.props.userBets}
              handleNotificationRead={this.props.handleNotificationRead}
              handleNotificationSelection={this.props.handleNotificationSelection}
            />
          </div>
          <div className='user-options'>
            <UserOptions userInfo={this.props.userInfo} />
          </div>
          <div className='new-bet'>
            <NewBet upcomingMatches={this.props.upcomingMatches} refreshComponent={this.props.refreshComponent} bank={this.props.userInfo.bank} />
          </div>

        </div>
      </Layout.Header>
    );
  }
}

export default NavBar;