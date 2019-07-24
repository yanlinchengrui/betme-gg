import React, { Component } from "react";
import { Popover, Icon } from "antd";

class Notification extends Component {

  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const content = (
      <div className="notification">
        Peter invited you to a bet!
      </div>
    );
    return (
      <Popover
        content={
          <div>
            {content}
          </div>
        }
        trigger="click"
      >
        <Icon type="bell" theme="filled" />
      </Popover>
    );
  }
}

export default Notification;