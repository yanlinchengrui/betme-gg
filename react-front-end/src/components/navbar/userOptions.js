import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Avatar } from 'antd';

class UserOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

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
        <Link to={'/login'}>
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
        trigger='click'
      >
        <Avatar shape='square' src={this.props.userInfo.avatar_url} />
      </Popover>
    );
  }
}

export default UserOptions;