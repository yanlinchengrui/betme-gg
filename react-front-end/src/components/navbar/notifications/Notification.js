import React, { Component } from "react";

class Notification extends Component {
  
  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case "invite":
        notification = (
        <div> 
          <span> You have been invited to a bet!</span> 
          <button name="Accept" onClick={() => this.props.handleNotificationSelection(this.props.userBetId, true) }>Accept </button>
          <button name= "Decline" onClick={() => this.props.handleNotificationSelection(this.props.userBetId, false) }>Decline </button>
        </div>
        )
        break;

      case "teamSelect":
        notification = (
        <div> 
          <span>Pick your team: </span>
          <button name= "Team 1" onClick={() => this.props.handleNotificationSelection(this.props.userBetId, "Team1") }>Team 1 </button>
          <button name="Team 2" onClick={() => this.props.handleNotificationSelection(this.props.userBetId, "Team2") }>Team 2 </button>
          </div>
          )
        break;

      case "win":
        notification = <div> You won! </div>;
        break;

      case "loss":
        notification = <div> Ha! you lost! </div>;
        break;
      
      default:
        break;
    }
    return notification;
  }

  render() {
    return <div>{this.displayNotificationByType()}</div>;
  }
}

export default Notification;
