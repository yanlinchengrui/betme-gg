import React, { Component } from "react";
import { Popover, Icon } from "antd";
import Notification from "./Notification";

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

    const notification = this.props.notificationType.map(betInfo => {
      console.log(betInfo)
      return <Notification key={betInfo.bet_id} userBetId={betInfo.id} type={betInfo.notificationType} />;

    });

    return (
      <Popover content={<div>{ notification }</div>} trigger="click">
        <Icon type="bell" theme="filled" />
      </Popover>
    );
  }
}

export default NotificationList;
