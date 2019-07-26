import React, { Component } from 'react';

class Notification extends Component {

  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case 'invite':
        notification = (
          <div>
            <span> {this.props.match}:  </span>
            <span> {this.props.owner} has invited you to a bet!</span>
            <button name='Accept' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, true, this.props.type)}>Accept </button>
            <button name='Decline' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, false, this.props.type)}>Decline </button>
          </div>
        )
        break;

      case 'teamSelect':
        notification = (
          <div>
            <span> {this.props.match}: Pick your team: </span>
            <button name='Team 1' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team1', this.props.type)}>Team 1 </button>
            <button name='Team 2' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team2', this.props.type)}>Team 2 </button>
          </div>
        )
        break;

      case 'win':
        notification = (
          <div>
            <div> {this.props.match} </div>
            <div> You won! </div>
          </div>
        );
        break;

      case 'loss':
        notification = (
          <div>
            <div> {this.props.match} </div>
            <div> Ha! you lost! </div>
          </div>
        );
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
