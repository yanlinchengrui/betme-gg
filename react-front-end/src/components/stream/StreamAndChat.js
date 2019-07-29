import React, { Component } from 'react';
import Chat from './chat/Chat'
import lol from '../../images/lol-bg.jpg'
import csgo from '../../images/csgo-bg.jpg'
import dota2 from '../../images/dota2-bg.jpg'
import ow from '../../images/ow-bg.jpg'

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

  setBackground() {
    if (this.props.match.params.game === 'lol') {
      return lol;
    } else if (this.props.match.params.game === 'csgo') {
      return csgo;
    } else if (this.props.match.params.game === 'dota2') {
      return dota2;
    } else if (this.props.match.params.game === 'ow') {
      return ow;
    }
  }

  render() {

    return (
      <div className='container'>
        <img src={this.setBackground()} className='bg' />
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
