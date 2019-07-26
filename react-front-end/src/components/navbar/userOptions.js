import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Popover, Avatar } from "antd";

class UserOptions extends Component {

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
      <div>
        <Link to={'./login'}>
          Login
        </Link>
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
        <Avatar style={{ backgroundColor: '#3745fe' }} icon="user" />
      </Popover>
    );
  }
}

export default UserOptions;