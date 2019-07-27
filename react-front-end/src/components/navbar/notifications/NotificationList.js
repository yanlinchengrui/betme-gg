import React, { Component } from 'react';
import { Popover, Icon } from 'antd';
import Notification from './Notification';

class NotificationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
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

  render() {

    const notification = this.props.userBets.map((bet) => {
      return <Notification
        key={bet.User_Bet.id}
        userBetId={bet.User_Bet.id}
        match={bet.match}
        owner={bet.owner}
        type={bet.User_Bet.notificationType}
        team1={bet.team1}
        team2={bet.team2}
        date={bet.User_Bet.updatedAt}
        handleNotificationSelection={this.props.handleNotificationSelection}
      />;
    });

    return (
      <Popover content={<div>{notification}</div>} trigger='click'>
        <Icon type='bell' theme='filled' style={{ fontSize: '24px' }} />
      </Popover>
    );
  }
}

export default NotificationList;
