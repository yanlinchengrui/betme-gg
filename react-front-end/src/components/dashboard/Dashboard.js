import React, { Component } from 'react';
import ActiveBetsList from './ActiveBetsList';
import UpcomingMatches from './UpcomingMatches';
import bg from '../../images/bg.jpg'

class Dashboard extends Component {

  render() {
    return (
      <div className='container'>
        <img src={bg} className='bg' />
        <div className='dashboard'>
          <UpcomingMatches upcomingMatches={this.props.upcomingMatches} />
          <ActiveBetsList activeBets={this.props.activeBets} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
