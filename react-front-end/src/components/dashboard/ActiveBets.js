import React, { Component } from "react";

class ActiveBet extends Component {

  displayActiveBets() {
    let notification;
    console.log(this.props.betStatus)

    switch (this.props.betStatus) {
      case "pending":
        notification = (
          <div>
            <span> Game {this.props.game}</span>
            <span> Match {this.props.match}:  </span>
            <span> Stakes {this.props.stakes}</span>
            <span> Bet Status {this.props.betStatus}</span>
            <span> Owner {this.props.owner}</span>
          </div>
        )
        break;

      case "active":
        notification = (
          <div>
            <span> Game {this.props.game}</span>
            <span> Match {this.props.match}:  </span>
            <span> Stakes {this.props.stakes}</span>
            <span> Bet Status {this.props.betStatus}</span>
            <span> Owner {this.props.owner}</span>
          </div>
        )
        break;

      default:
        break;
    }
    return notification;
  }

  render() {
    return <div>{this.displayActiveBets()}</div>;
  }
}

export default ActiveBet;
