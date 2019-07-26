import React, { Component } from "react";
import ActiveBet from "./ActiveBets"

class ActiveBetList extends Component {

  render() {
    console.log(this.props.activeBets)
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
      <div>
        {activeBets}
      </div>
    );
  }
}

export default ActiveBetList;
