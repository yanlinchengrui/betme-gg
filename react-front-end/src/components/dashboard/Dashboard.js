import React, { Component } from 'react';
import ActiveBetsList from './ActiveBetsList';
import UpcomingMatches from './UpcomingMatches';
import defaultBg from '../../images/default-bg.png'

class Dashboard extends Component {

  render() {
    return (
      <div className='container'>
        <img src={defaultBg} alt='background' className='bg' />
        <div className='dashboard'>
          <UpcomingMatches upcomingMatches={this.props.upcomingMatches} />
          <ActiveBetsList activeBets={this.props.activeBets} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
