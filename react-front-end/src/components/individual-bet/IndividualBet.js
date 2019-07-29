import React, { Component } from "react";
import { Button } from 'antd';
import moment from 'moment-timezone';

class IndividualBet extends Component {
     
  
  render() {
        
      const getParticipantInformation = () => {
        if (!this.props.betInfo.users) {
          return null;
        }

         return this.props.betInfo.users.map(participant => {
          
           if (!participant.User_Bet.termStatus) {
            return <div className='Awaiting' key={participant.id}> {participant.user_name}: Awaiting Bet Acceptence </div>
         
          } else if (!participant.User_Bet.teamSelect) {
            return <div className='Awaiting' key={participant.id}>{ participant.user_name}: Awaiting team selection </div>
          
          } else {
            return <div className={participant.User_Bet.teamSelect} key={participant.id}>{participant.user_name}</div>
          }
        })
        }

        const renderTeamSelection = () => {
          if (!this.props.currentUser.id) {
            return null;
          }

          if(!this.props.betInfo.users) {
            return null;
          }

          return this.props.betInfo.users.map(owner => {
            if (owner.User_Bet.user_id === this.props.currentUser.id) {
              return (
                <div className='team-pick' key={this.props.currentUser.id} >
                  <Button className='t1-btn' type='dashed' onClick={() => this.props.handleNotificationSelection(owner.User_Bet.id, 'Team1', 'teamSelect')}>{this.props.betInfo.team1}</Button>
                  <Button className='t2-btn' type='dashed' onClick={() => this.props.handleNotificationSelection(owner.User_Bet.id, 'Team2', 'teamSelect')}>{this.props.betInfo.team2}</Button>
                </div>
              )
            }
          }) 
        }
      
      return (
        <div className='individual'>
          <div className='individual__match'>
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
            <h2>Pick your team!</h2>
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
