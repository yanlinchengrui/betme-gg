import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import moment from 'moment-timezone';

class Notification extends Component {

  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case 'invite':
        notification = (
          <div className='notification notification--invite'>
            <div className='notification__content'>
              <div className='notification__content-text'>
                <p>{this.props.owner} has invited you to a bet for <span className='match'>{this.props.match}</span></p>
                <div className='actions'>
                  <Icon type='check-circle' theme='filled' style={{ fontSize: '24px', color: '#52c41a', marginLeft: '10px' }} onClick={() => this.props.handleNotificationSelection(this.props.userBetId, true, this.props.type)} />
                  <Icon type='close-circle' theme='filled' style={{ fontSize: '24px', color: '#ff4d4f', marginLeft: '5px' }} onClick={() => this.props.handleNotificationSelection(this.props.userBetId, false, this.props.type)} />
                </div>
              </div>
              <footer>
                {moment(this.props.date).tz('America/Vancouver').format('MMMM DD, YYYY - HH:mm')}
              </footer>
            </div>
          </div>
        )
        break;

      case 'teamSelect':
        notification = (
          <div className='notification notification--teamselect'>
            <div className='notification__content'>
              <div className='notification__content-text'>
                <p>Pick your team for <span className='match'>{this.props.match}</span></p>
                <div className='actions'>
                  <Button className='team-btn' style={{ marginLeft: '10px' }} name='Team 1' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team1', this.props.type)}>{this.props.team1}</Button>
                  <Button className='team-btn' style={{ marginLeft: '5px' }} name='Team 2' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team2', this.props.type)}>{this.props.team2}</Button>
                </div>
              </div>
              <footer>
                {moment(this.props.date).tz('America/Vancouver').format('MMMM DD, YYYY - HH:mm')}
              </footer>
            </div>
          </div>
        )
        break;

      case 'win':
        notification = (
          <div className='notification notification--weiner'>
            <div className='notification__content'>
              <div className='notification__content-text'>
                <p>Winner winner chicken dinner! You won the <span className='match'>{this.props.match}</span> bet!</p>
              </div>
          
              <footer>
                {moment(this.props.date).tz('America/Vancouver').format('MMMM DD, YYYY - HH:mm')}
              </footer>
            </div>
          </div>
        );
        break;

      case 'loss':
        notification = (
          <div className='notification notification--loser'>
            <div className='notification__content'>
              <div className='notification__content-text'>
                <p>You lost the <span className='match'>{this.props.match}</span> bet! Better luck next time, kid!</p>
              </div>
              <footer>
                {moment(this.props.date).tz('America/Vancouver').format('MMMM DD, YYYY - HH:mm')}
              </footer>
            </div>
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
