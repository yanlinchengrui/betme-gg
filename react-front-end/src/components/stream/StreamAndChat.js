import React, { Component } from 'react';
import Chat from './chat/Chat'
import defaultBg from '../../images/default-bg.png'

class StreamAndChat extends Component {

  pointStream() {
    if (this.props.match.params.game === 'lol') {
      return "https://player.twitch.tv/?channel=riotgames";
    } else if (this.props.match.params.game === 'csgo') {
      return "https://player.twitch.tv/?channel=esl_csgo";
    } else if (this.props.match.params.game === 'dota2') {
      return "https://player.twitch.tv/?channel=esl_dota2";
    } else if (this.props.match.params.game === 'ow') {
      return "https://player.twitch.tv/?channel=overwatchleague";
    }
  }

  render() {

    return (
      <div className='container'>
        <img src={defaultBg} className='bg'/>
        <div className='stream'>
            <div className='stream__window'>
              <iframe
                className='livestream'
                src={this.pointStream()}
                height="100%"
                width="100%"
                frameBorder="0"
                scrolling='false'
                allowFullScreen={true}>
              </iframe>
            </div>
            <div className='stream__chat'>
              <Chat currentUser={this.props.currentUser} game={this.props.match.params.game} />
            </div>
        </div>
      </div>
    );
  }
}
export default StreamAndChat;
