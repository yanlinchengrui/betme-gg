import React, { Component } from 'react';
import Chat from './chat/Chat'

class StreamAndChat extends Component {
  render() {
    return (
      <div className='stream'>
        <div className='stream__window'>
          <iframe
            className='livestream'
            src="https://player.twitch.tv/?channel=riotgames"
            height="100%"
            width="100%"
            frameborder="0"
            scrolling="false"
            allowfullscreen="true">
          </iframe>
        </div>
        <div className='stream__chat'>
          <Chat currentUser={this.props.currentUser} game={this.props.match.params.game} />
        </div>
      </div>
    );
  }
}
export default StreamAndChat;
