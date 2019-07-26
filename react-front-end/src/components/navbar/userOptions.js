import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Avatar } from 'antd';

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
        trigger='click'
      >
        <Avatar src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/13891873_2045259905699730_3445568689788963466_n.jpg?_nc_cat=108&_nc_oc=AQkBxX2XAGMrKHlrOdD4GmsO5ik-vrOGxBr2y5brrV0yXkxXMMfbmUGz_d5ijZ62MO4&_nc_ht=scontent-sjc3-1.xx&oh=b52fdb2dbf20db5989916744d22faa56&oe=5DAD6464' />
      </Popover>
    );
  }
}

export default UserOptions;