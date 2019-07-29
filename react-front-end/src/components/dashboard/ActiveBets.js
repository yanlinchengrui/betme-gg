import React, { Component } from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";
import csgo from '../../images/csgo.svg'
import lol from '../../images/lol.svg'
import ow from '../../images/ow.svg'
import dota from '../../images/dota.svg'

class ActiveBet extends Component {

  gameLogo = {
    'CS:GO': csgo,
    'LoL': lol,
    'Overwatch': ow,
    'Dota 2': dota
  }

  displayActiveBets() {
    let activebet;

    switch (this.props.betStatus) {
      case "pending":
        activebet = (
          <div className='bet bet--pending'>
            <div className='bet__match'>
              <div className='bet__match-logo'>
                <img src={this.gameLogo[this.props.game]} alt={this.props.game} style={{ width: '40px', height: '40px' }} />
              </div>
              <div className='bet__match-name'>
                <h4>{this.props.team1} vs {this.props.team2}</h4>
              </div>
              <div className='bet__match-view'>
                <Link to={`/bets/user/${this.props.betId}`}>
                  <Button>View Bet</Button>
                </Link>
              </div>
            </div>

            <footer>
              <div className='bet__info'>
                <p>Status: <span className='capitalize'>{this.props.betStatus}</span></p>
              </div>
              <div className='bet__info'>
                <p>Stakes: ${this.props.stakes * this.props.participants}</p>
              </div>
              <div className='bet__info'>
                <p>Bet Owner: {this.props.owner}</p>
              </div>
              <div className='bet__info'>
                <p>Participants: { this.props.participants }</p>
              </div>
            </footer>
          </div>
        )
        break;

      case "active":
        activebet = (
          <div className='bet bet--active'>
            <div className='bet__match'>
              <div className='bet__match-logo'>
                <img src={this.gameLogo[this.props.game]} alt={this.props.game} style={{ width: '40px', height: '40px' }} />
              </div>
              <div className='bet__match-name'>
                <h4>{this.props.team1} vs {this.props.team2}</h4>
              </div>
              <div className='bet__match-view'>
              <Link to={`/bets/user/${this.props.betId}`}>
                  <Button>View Bet</Button>
                </Link>
              </div>
            </div>
            <footer>
              <div className='bet__info'>
                <p>Status: <span className='capitalize'>{this.props.betStatus}</span></p>
              </div>
              <div className='bet__info'>
                <p>Stakes: ${ this.props.stakes * this.props.participants }</p>
              </div>
              <div className='bet__info'>
                <p>Bet Owner: {this.props.owner}</p>
              </div>
              <div className='bet__info'>
                <p>Participants: { this.props.participants }</p>
              </div>
            </footer>
          </div>
        )
        break;

      default:
        break;
    }
    return activebet;
  }

  render() {
    return <div className='bets'>
      {this.displayActiveBets()}
    </div>;
  }
}

export default ActiveBet;
