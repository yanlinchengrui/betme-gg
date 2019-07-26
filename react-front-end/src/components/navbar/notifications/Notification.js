import React, { Component } from 'react';
import { Button, Icon } from 'antd';

class Notification extends Component {

  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case 'invite':
        notification = (
          <div className='notification notification--invite'>
            <span className='notification__match'>{this.props.match}: </span>
            <span> {this.props.owner} has invited you to a bet!</span>
            <Icon type='check-circle' style={{ fontSize: '24px', color: '#52c41a', marginLeft: '10px' }} onClick={() => this.props.handleNotificationSelection(this.props.userBetId, true, this.props.type)} />
            <Icon type='close-circle' style={{ fontSize: '24px', color: '#ff4d4f', marginLeft: '5px' }} onClick={() => this.props.handleNotificationSelection(this.props.userBetId, false, this.props.type)} />
          </div>
        )
        break;

      case 'teamSelect':
        notification = (
          <div className='notification notification--team-select'>
            <span className='notification__match'>{this.props.match}:</span> 
            <span>Pick your team:</span>
            <Button className='notification__team-btn' style={{ marginLeft: '10px' }} name='Team 1' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team1', this.props.type)}>Team 1 </Button>
            <Button className='notification__team-btn' style={{ marginLeft: '5px' }} name='Team 2' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team2', this.props.type)}>Team 2 </Button>
          </div>
        )
        break;

      case 'win':
        notification = (
          <div className='notification notification--winner'>
            <div> {this.props.match} </div>
            <div> You won! </div>
          </div>
        );
        break;

      case 'loss':
        notification = (
          <div className='notification notification--loser'>
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
    return (
      <div className='notifications'>
        {this.displayNotificationByType()}
      </div>
    );
  }
}

export default Notification;
