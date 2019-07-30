import React, { Component } from "react";
import HistoricalBet from "./BetHistory";

class BetHistoryList extends Component {

  render() {
    
    const historicalBets = this.props.betinfo.map(historicalBet => {
      return (
        <HistoricalBet
          key={historicalBet.id}
          team1={historicalBet.team1FullName}
          team2={historicalBet.team2FullName}
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
        <h2>Past bets</h2>
        {historicalBets}
      </div>
    );
  }
}

export default BetHistoryList;
