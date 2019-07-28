import React, { Component } from "react";
import HistoricalBet from "./BetHistory";

class BetHistoryList extends Component {

  render() {
    
    const historicalBets = this.props.betinfo.map(historicalBet => {
      return (
        <HistoricalBet
          key={historicalBet.id}
          match={historicalBet.match}
          stakes={historicalBet.stakes}
          owner={historicalBet.owner}
          betStatus={historicalBet.bet_status}
          game={historicalBet.game}
          participants={historicalBet.participants}
        />
      );
    });
    return (
      <div className='dashboard__bets'>
        <h2>Historical bets</h2>
        {historicalBets}
      </div>
    );
  }
}

export default BetHistoryList;
