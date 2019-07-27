import React, { Component } from 'react';
import Chat from './chat/Chat'

class StreamAndChat extends Component {
  render() {
    return (
      <div>
        <Chat currentUser={this.props.userInfo} />
      </div>
    );
  }
}
export default StreamAndChat;
