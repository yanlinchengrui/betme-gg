import React, { Component } from 'react';
import ChatBar from './ChatBar';
import MessageList from './MessageList';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Anonymous" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      onlineUsers: '',
      color: '',
      game: this.props.game
    };
    this.ws = new WebSocket('ws://localhost:8080');
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    this.updateCurrentUser()

    this.ws.onopen = (event) => {
      console.log(this.props.currentUser);
      console.log('Connected to server');
    };
    this.ws.onmessage = (event) => {
      // console.log(event.data);
      const jsonData = JSON.parse(event.data);
      if (jsonData.onlineUsers) {
        this.setState({ onlineUsers: jsonData.onlineUsers });
      }
      else if (jsonData.color && !jsonData.type) { // only need to setup color once when there is only one key for color
        this.setState({ color: jsonData.color });
      }
      else {
        this.setState({ messages: this.state.messages.concat(jsonData) });
      }
    }
  }

  addMessage(message) {
    message.color = this.state.color;
    this.ws.send(JSON.stringify(message));
  }

  updateCurrentUser() {
    if (!this.props.currentUser) {
      return null;
    }
    this.setState({ currentUser: { name: this.props.currentUser.user_name } });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (JSON.stringify(this.props.currentUser) !== JSON.stringify(prevProps.currentUser)) {
      this.setState({ currentUser: { name: this.props.currentUser.user_name } }, () => {
        console.log(this.state.currentUser);
      });
    }
  }


  render() {
    return (
      <div className='chat'>
        {/* <strong className="navbar-onlineUsers" > {this.state.onlineUsers} users online❗️ </strong> */}

        <MessageList messages={this.state.messages} game={this.state.game} />

        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} color={this.state.color} game={this.state.game} />
      </div>
    );
  }
}
export default Chat;
