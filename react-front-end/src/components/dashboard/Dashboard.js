import React, { Component } from 'react';
import UpcomingMatches from './UpcomingMatches';
import CurrentBets from './CurrentBets';

class Dashboard extends Component {
  render() {
    return (
      <div class='container'>
        <div className='dashboard'>
          <UpcomingMatches upcomingMatches={this.props.upcomingMatches} />
          <CurrentBets />
        </div>
      </div>
    );
  }
}

export default Dashboard;
