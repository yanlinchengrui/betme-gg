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
            <div className='match__date'>
              <Icon type='calendar' theme='outlined' />
              <span className='text'>{moment(match.begin_at).tz('America/Vancouver').format('DD MMM YYYY')}</span>
            </div>
            <div className='match__game'>
              <img src={this.gameLogo[match.videogame.name]} alt={match.videogame.name} style={{ width: '25px', height: '25px' }} />
            </div>
            <div className='match__time'>
              <Icon type='clock-circle' theme='outlined' />
              <span className='text'>{moment(match.begin_at).tz('America/Vancouver').format('HH:mm')}</span>
            </div>
          </header>
          <div className='match__team-logos'>
            <div className='logo-container'>
              <img src={match.opponents[0].opponent.image_url} alt={match.opponents[0].opponent.name} style={{ width: '50px', height: '50px' }} />
            </div>
            <span className='vs-text'>VS</span>
            <div className='logo-container'>
              {
                match.opponents[1] ?
                  <img src={match.opponents[1].opponent.image_url} alt={match.opponents[1].opponent.name} style={{ width: '50px', height: '50px' }} />
                  : <img src='https://cdn.pandascore.co/images/team/image/126148/ffamix.png' alt="TBD" style={{ width: '50px', height: '50px' }} />
              }
            </div>
          </div>
          <footer>
            <div className='match__team-name'>
              {match.opponents[0].opponent.name}
            </div>
            <div className='match__team-name'>
              {match.opponents.length > 1 ? match.opponents[1].opponent.name : "TBD"}
            </div>
          </footer>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='dashboard__matches'>
        <h2>Upcoming matches</h2>
        {this.renderMatches(this.props.upcomingMatches)}
      </div>
    );
  }
}

export default UpcomingMatches;