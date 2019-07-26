import React, { Component } from "react";
import ActiveBet from "./ActiveBets"

class ActiveBetList extends Component {

  render() {
    const activeBets = this.props.activeBets.map(activeBet => {
      return (
        <ActiveBet
          key={activeBet.id}
          match={activeBet.match}
          stakes={activeBet.stakes}
          owner={activeBet.owner}
          betStatus={activeBet.bet_status}

        />
      );
    });
    return (
      <div className='dashboard__bets'>
        <h2>Active bets</h2>
        {activeBets}
      </div>
    );
  }
}

export default ActiveBetList;
