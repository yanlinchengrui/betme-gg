import React, { Component } from 'react';
import { Icon } from 'antd';
import moment from 'moment-timezone';
import csgo from '../../images/csgo.svg'
import lol from '../../images/lol.svg'
import ow from '../../images/ow.svg'
import dota from '../../images/dota.svg'

class UpcomingMatches extends Component {

  gameLogo = {
    'CS:GO': csgo,
    'LoL': lol,
    'Overwatch': ow,
    'Dota 2': dota
  }

  renderMatches(matches) {
    return matches.map(match => {
      return (
        <div className='match' key={match.id}>
          <header>
            <div className='match-date'>
              <Icon type='calendar' theme='outlined' />
              <span className='text'>{moment(match.begin_at).tz('America/Vancouver').format('DD MMM YYYY')}</span>
            </div>
            <div className='match-game'>
              <img src={this.gameLogo[match.videogame.name]} alt={match.videogame.name} style={{ width: '24px', height: '24px' }} />
            </div>
            <div className='match-time'>
              <Icon type='clock-circle' theme='outlined' />
              <span className='text'>{moment(match.begin_at).tz('America/Vancouver').format('HH:mm')}</span>
            </div>
          </header>
          <div className='match-team-logos'>
            <img src={match.opponents[0].opponent.image_url} alt={match.opponents[0].opponent.name} style={{ width: '80px', height: '80px' }} />
            <div className='vs'>VS</div>
            {
              match.opponents[1] ?
                <img src={match.opponents[1].opponent.image_url} alt={match.opponents[1].opponent.name} style={{ width: '80px', height: '80px' }} />
                : <img src='https://cdn.pandascore.co/images/team/image/126148/ffamix.png' alt="TBD" style={{ width: '80px', height: '80px' }} />
            }
          </div>
          <footer>
            <div className='match-team-name'>
              {match.opponents[0].opponent.name}
            </div>
            <div className='match-team-name'>
              {match.opponents.length > 1 ? match.opponents[1].opponent.name : "TBD"}
            </div>
          </footer>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='matches'>
        <div className='title'>
          <h2>Upcoming matches</h2>
        </div>
        <div className='match-list'>
          {this.renderMatches(this.props.upcomingMatches)}
        </div>
      </div>
    );
  }
}

export default UpcomingMatches;