import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Avatar, Button } from 'antd';

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
      <div className='user-options'>
        <Link to={'/profile'}>
          <Button className='user-options-btn' type='primary' style={{ display: 'block', marginBottom: '6px' }}>Profile</Button>
        </Link>
        <Link to={'/login'}>
          <Button className='user-options-btn' type='primary' style={{ display: 'block' }}>Logout</Button>
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
        placement="bottomRight"
      >
        <Avatar src={this.props.userInfo.avatar_url} />
      </Popover>
    );
  }
}

export default UserOptions;