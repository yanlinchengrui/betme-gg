import React, { Component } from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import Countdown from 'react-countdown-now';

class IndividualBet extends Component {
  gameName = {
    'CS:GO': 'csgo',
    'LoL': 'lol',
    'Overwatch': 'ow',
    'Dota 2': 'dota2'
  }

  render() {

    const LiveBtn = () => {
      return <Link to={`/stream/${this.gameName[this.props.betInfo.game]}`}>Watch Live!</Link>
    }

    const renderer = ({ days, hours, minutes, seconds, end }) => {
      if ((end - Date.now() < (3600000 * 2)) && (end - Date.now()) > 0) {
        return <LiveBtn />
      } else if ((end - Date.now()) < 0) {
        return 'Match Over';
      } else {
        return <Countdown date={Date.now() + (days * 3600000 * 24) + (hours * 3600000 - 3600000 * 2) + (minutes * 60000) + (seconds * 1000)} />;
      }
    };

    const getParticipantInformation = () => {
      if (!this.props.betInfo.users) {
        return null;
      }

      return this.props.betInfo.users.map(participant => {

        if (!participant.User_Bet.termStatus) {
          return <div className='Awaiting' key={participant.id}> {participant.user_name}: Awaiting Bet Acceptence </div>

        } else if (!participant.User_Bet.teamSelect) {
          return <div className='Awaiting' key={participant.id}>{participant.user_name}: Awaiting Team Selection </div>

        } else {
          return <div className={participant.User_Bet.teamSelect} key={participant.id}>{participant.user_name} {participant.User_Bet.userWinStatus === null || (participant.User_Bet.userWinStatus ? ' won the bet!' : ' lost the bet!')}</div>
        }
      })
    }

    const renderTeamSelection = () => {
      if (!this.props.currentUser.id) {
        return null;
      }

      if (!this.props.betInfo.users) {
        return null;
      }

      return this.props.betInfo.users.map(owner => {
        if (owner.User_Bet.user_id === this.props.currentUser.id) {

          switch (owner.User_Bet.termStatus) {

            case null:
              return (
                <div key={this.props.currentUser.id}>
                  <h2> Accept or decline the invite: </h2>
                  <div className='team-pick'>
                    <Button className='t1-btn' type='dashed' onClick={async () => {
                      await this.props.handleNotificationSelection(owner.User_Bet.id, true, 'invite');
                      this.props.getBetDetails();
                    }}>
                      Accept
                    </Button>
                    <Button className='t2-btn' type='dashed' onClick={async () => {
                      await this.props.handleNotificationSelection(owner.User_Bet.id, false, 'invite');
                      this.props.getBetDetails();
                    }}>
                      Decline
                    </Button>
                  </div>
                </div>
              )

            case true:
              return (
                owner.User_Bet.teamSelect ?
                  <h2 key={this.props.currentUser.id}> You have chosen your team! </h2>
                  :
                  <div key={this.props.currentUser.id}>
                    <h2>Pick your team!</h2>
                    <div className='team-pick' >
                      <Button className='t1-btn' type='dashed' onClick={async () => {
                        await this.props.handleNotificationSelection(owner.User_Bet.id, 'Team1', 'teamSelect');
                        this.props.getBetDetails();
                      }}>
                        {this.props.betInfo.team1}
                      </Button>
                      <Button className='t2-btn' type='dashed' onClick={async () => {
                        await this.props.handleNotificationSelection(owner.User_Bet.id, 'Team2', 'teamSelect');
                        this.props.getBetDetails();
                      }}>
                        {this.props.betInfo.team2}
                      </Button>
                    </div>
                  </div>
              )

            case false:
              return (
                <div key={this.props.currentUser.id}>
                  <h2> Are you sure? </h2>
                  <div className='team-pick'>
                    <Button className='t1-btn' style={{ marginRight: '0' }} type='dashed' onClick={async () => {
                      await this.props.handleNotificationSelection(owner.User_Bet.id, true, 'invite');
                      this.props.getBetDetails();
                    }}>
                      Let me in!
                    </Button>
                  </div>
                </div>
              )

            default:
              return;
          }
        }
      })
    }

    let gameday = new Date(moment(this.props.betInfo.start_time).tz('America/Vancouver').toDate().getTime() + 3600000 * 2);

    return (
      <div className='individual'>
        <div className='individual__match'>
          <div className='match-details'>
            <Countdown date={gameday} renderer={(things) => {
              things.end = gameday;
              return renderer(things)
            }
            }
            />
          </div>
          <div className='team team--1'>
            <div className='team__name'>
              <h2>{this.props.betInfo.team1FullName}</h2>
            </div>
            <div className='team__logo'>
              <img src={this.props.betInfo.team1logo} />
            </div>
          </div>
          <div className='team team--2'>
            <div className='team__name'>
              <h2>{this.props.betInfo.team2FullName}</h2>
            </div>
            <div className='team__logo'>
              <img src={this.props.betInfo.team2logo} />
            </div>
          </div>
        </div>
        <div className='individual__info'>
          <div className='pot'>
            Stakes: ${this.props.betInfo.participants * this.props.betInfo.stakes}
          </div>
          <div className='date'>
            {moment(this.props.betInfo.start_time).tz('America/Vancouver').format('MMMM DD, YYYY - HH:mm')}
          </div>
          <div className='participants'>
            Participants: {this.props.betInfo.participants}
          </div>
        </div>
        <div className='individual__pick'>

          <div className='individual__pick-btns'>
            {renderTeamSelection()}
          </div>

        </div>

        <div className='individual__participants'>
          {getParticipantInformation()}
        </div>

      </div>
    )
  }
}

export default IndividualBet;
