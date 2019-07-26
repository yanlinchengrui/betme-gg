import React, { Component } from 'react';
import { Icon } from 'antd';
import moment from 'moment-timezone';
import csgo from '../../images/csgo.svg'
import lol from '../../images/lol.svg'
import ow from '../../images/ow.svg'
import dota from '../../images/dota.svg'

class CurrentBets extends Component {

  gameLogo = {
    'CS:GO': csgo,
    'LoL': lol,
    'Overwatch': ow,
    'Dota 2': dota
  }

  render() {
    return (
      <div className='dashboard__bets'>
        <h2>Current bets</h2>
      </div>
    );
  }
}

export default CurrentBets;