import React, { Component } from "react";
import { notification } from "antd";

class Notification extends Component {
  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case "invite":
        message = <div>You have been invited to a bet! </div>;
        break;

      case "teamSelect":
        message = <div />;

        break;

      case "win":
        message = <div />;
        break;

      case "loss":
        message = <div />;
    }
    return notification;
  }

  render() {
    return <div>{this.displayNotificationByType()}</div>;
  }
}

export default Notification;
