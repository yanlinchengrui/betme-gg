import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
// import moment from 'moment';
import moment from 'moment-timezone';
import csgo from '../../images/csgo.svg'
import lol from '../../images/lol.svg'
import ow from '../../images/ow.svg'
import dota from '../../images/dota.svg'

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upcomingMatches: []
    };
  }

  componentDidMount() {
    console.log(process.env)
    axios.get(`https://api.pandascore.co/matches/upcoming?page[size]=5&&token=${process.env.REACT_APP_TOKEN}`)
      .then((rez) => {
        this.setState(
          // { upcomingMatches: rez.data.slice(0, 5) }
          { upcomingMatches: rez.data.filter(match => {
            return match.opponents.length;
          }) }
        );
        console.log(this.state.upcomingMatches.length)
      });
  }

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
              <span className='text'>{moment(match.begin_at).tz('America/Vancouver').format('DD-MMM-YYYY')}</span>
            </div>
            <div className='match__game'>
              <img src={this.gameLogo[match.videogame.name]} alt={match.videogame.name} style={{ width: '25px', height: '25px' }} />
            </div>
            <div className='match__time'>
              <Icon type='clock-circle' theme='outlined' />
              <span className='text'>{moment(match.begin_at).tz('America/Vancouver').format('HH:mm')}</span>
            </div>
          </header>
          <div className='match__vs'>
            <div className='match__team'>
              <img src={match.opponents[0].opponent.image_url} style={{ width: '70px', height: '70px' }} />
              {match.opponents[0].opponent.name}
            </div>
            <span className='vs-text'>VS</span>
            <div className='match__team'>
              {
                match.opponents[1] ?
                  <img src={match.opponents[1].opponent.image_url} style={{ width: '70px', height: '70px' }} />
                  : <img src='https://cdn.pandascore.co/images/team/image/126148/ffamix.png' style={{ width: '70px', height: '70px' }} />
              }
              {match.opponents[1].opponent.name}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {

    return (
      <div className='dashboard'>
        <div className='dashboard__matches'>
          <h2>Upcoming matches</h2>
          {this.renderMatches(this.state.upcomingMatches)}
        </div>
      </div>
    );
  }
}

export default Dashboard;