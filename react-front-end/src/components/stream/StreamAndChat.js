import React, { Component } from 'react';
import Chat from './chat/Chat'
import { Redirect } from "react-router-dom";

class StreamAndChat extends Component {

  pointStream() {
    if (this.props.match.params.game === 'lol') {
      console.log('1 lol');
      return "https://player.twitch.tv/?channel=riotgames";
    } else if (this.props.match.params.game === 'csgo') {
      console.log('2 lol');
      return "https://player.twitch.tv/?channel=esl_csgo";
    } else if (this.props.match.params.game === 'dota2') {
      console.log('3 lol');
      return "https://player.twitch.tv/?channel=esl_dota2";
    } else if (this.props.match.params.game === 'ow') {
      console.log('4 lol');
      return "https://player.twitch.tv/?channel=overwatchleague";
    } else {
      // console.log('5 lol');
      // return <Redirect to='/' />
    }
  }

  render() {

    return (
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
    );
  }
}
export default StreamAndChat;
