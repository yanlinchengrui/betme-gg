import React, { Component } from 'react';
import { Popover, Icon, Badge } from 'antd';
import Notification from './Notification';

class NotificationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      dot: false
    };
  }

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  checkNotifications = () => {
    if (!this.props.userBets) {
      return null;
    }

    const dot = this.props.userBets.some((bet) => {
      return bet.User_Bet.notificationRead === false;
    });
    this.setState({ dot });
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.userBets) !== JSON.stringify(prevProps.userBets)) {
      this.checkNotifications();
    }
  }

  render() {

    const notification = this.props.userBets.map((bet) => {
      return <Notification
        key={bet.User_Bet.id}
        betId={bet.User_Bet.bet_id}
        userBetId={bet.User_Bet.id}
        match={bet.match}
        owner={bet.owner}
        type={bet.User_Bet.notificationType}
        team1={bet.team1}
        team2={bet.team2}
        date={bet.User_Bet.createdAt}
        handleNotificationSelection={this.props.handleNotificationSelection}
        earnOrLost={bet.User_Bet.earnOrLost}
      />;
    });

    const userBetIds = this.props.userBets.map((bet) => bet.User_Bet.id);

    return (
      <Popover placement="bottomRight" content={<div>{notification}</div>} trigger='click' onClick={() => this.props.handleNotificationRead(userBetIds)}>
        <Badge dot={this.state.dot}>
          <Icon type='bell' theme='outlined' style={{ fontSize: '24px' }} />
        </Badge>
      </Popover>
    );
  }
}

export default NotificationList;
