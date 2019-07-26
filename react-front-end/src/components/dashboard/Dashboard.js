import React, { Component } from "react";
import UpcomingMatches from "./UpcomingMatches";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <UpcomingMatches upcomingMatches={this.props.upcomingMatches} />
      </div>
    );
  }
}

export default Dashboard;
