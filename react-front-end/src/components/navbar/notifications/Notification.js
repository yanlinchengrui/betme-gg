import React, { Component } from "react";

class Notification extends Component {
  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case "invite":
        notification = <div> You have been invited to a bet! </div>;
        break;

      case "teamSelect":
        notification = <div> Pick your team: </div>;
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
