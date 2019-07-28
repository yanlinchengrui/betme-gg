import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const messages = this.props.messages.map((msg) => {
      if (msg.game === this.props.game) {
        return (<Message key={msg.id} {...msg} />);
      }
    });
    return (
      <div className="chat__messages">
        {messages}
        <div ref={(el) => { this.messagesEnd = el; }}></div>
      </div>
    );
  }
}

export default MessageList;