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
    // const content = (
    //   <div className="notification">
    //     Peter invited you to a bet!
    //   </div>
    // );

    const notificationType = this.props.notificationType.map(betInfo => {
      console.log(betInfo)
      return <Notification key={betInfo.bet_id} type={betInfo.notificationType} />;

    });

    return (
      <Popover content={<div>{ notificationType }</div>} trigger="click">
        <Icon type="bell" theme="filled" />
      </Popover>
    );
  }
}

export default NotificationList;
