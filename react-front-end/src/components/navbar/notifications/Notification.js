import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment-timezone';

class Notification extends Component {

  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case 'invite':
        notification = (
          <div className='notification notification--invite'>
            <div className='notification-content'>
              <div className='notification-content-text'>
                <p>{this.props.owner} has invited you to a bet for <span className='match'><Link to={`/bets/user/${this.props.betId}`}>{this.props.match}</Link></span></p>
                <div className='actions'>
                  <Icon className='accept-btn' type='check-circle' theme='outlined' style={{ fontSize: '24px', marginLeft: '10px' }} onClick={() => this.props.handleNotificationSelection(this.props.userBetId, true, this.props.type)} />
                  <Icon className='accept-btn' type='close-circle' theme='outlined' style={{ fontSize: '24px', marginLeft: '5px' }} onClick={() => this.props.handleNotificationSelection(this.props.userBetId, false, this.props.type)} />
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
            <div className='notification-content'>
              <div className='notification-content-text'>
                <p>Pick your team for <span className='match'><Link to={`/bets/user/${this.props.betId}`}>{this.props.match}</Link></span></p>
                <div className='actions'>
                  <Button className='team-btn team-btn--1' type='primary' style={{ marginLeft: '10px' }} name='Team 1' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team1', this.props.type)}>{this.props.team1}</Button>
                  <Button className='team-btn team-btn--2' type='primary' style={{ marginLeft: '5px' }} name='Team 2' onClick={() => this.props.handleNotificationSelection(this.props.userBetId, 'Team2', this.props.type)}>{this.props.team2}</Button>
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
          <div className='notification notification--winner'>
            <div className='notification-content'>
              <div className='notification-content-text'>
                <p>Winner winner chicken dinner! You won the <span className='match'><Link to={`/bets/user/${this.props.betId}`}>{this.props.match}</Link></span> bet!</p>
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
            <div className='notification-content'>
              <div className='notification-content-text'>
                <p>You lost the <span className='match'><Link to={`/bets/user/${this.props.betId}`}>{this.props.match}</Link></span> bet! Better luck next time, kid!</p>
              </div>
              <footer>
                {moment(this.props.date).tz('America/Vancouver').format('MMMM DD, YYYY - HH:mm')}
              </footer>
            </div>
          </div>
        );
        break;

      case 'declined':
        notification = (
          <div className='notification notification--loser'>
            <div className='notification__content'>
              <div className='notification__content-text'>
                <Icon type="smile" theme="filled" rotate={180} />&nbsp;<p>The bet: <span className='match'>{this.props.match}</span> got cancelled due to some reason... </p>
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
