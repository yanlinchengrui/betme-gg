import React, { Component } from 'react';
import UpcomingMatches from './UpcomingMatches';

class Dashboard extends Component {
  render() {
    return (
      <div class='container'>
        <div className='dashboard'>
          <UpcomingMatches upcomingMatches={this.props.upcomingMatches} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
