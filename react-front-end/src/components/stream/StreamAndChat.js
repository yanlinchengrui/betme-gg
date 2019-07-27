import React, { Component } from 'react';
import Chat from './chat/Chat'

class StreamAndChat extends Component {
  render() {
    return (
      <div>
        <Chat currentUser={this.props.currentUser} />
      </div>
    );
  }
}
export default StreamAndChat;
