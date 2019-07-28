import React, { Component } from "react";
import { Button } from 'antd';


class IndividualBet extends Component {
     
  
  render() {
        
      const getParticipantInformation = () => {
        if (!this.props.betInfo.users) {
          return null;
        }

         return this.props.betInfo.users.map(participant => {
          
           if (!participant.User_Bet.termStatus) {
            return <div key={participant.id}> {participant.user_name}: Awaiting Bet Acceptence </div>
         
          } else if (!participant.User_Bet.teamSelect) {
            return <div key={participant.id}>{ participant.user_name}: Awaiting team selection </div>
          
          } else {
            return <div key={participant.id}>{participant.user_name}</div>
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
              <div key={this.props.currentUser.id} >
                <Button onClick={() => this.props.handleNotificationSelection(owner.User_Bet.id, 'Team1', 'teamSelect')}>{this.props.betInfo.team1}</Button>
                <Button onClick={() => this.props.handleNotificationSelection(owner.User_Bet.id, 'Team2', 'teamSelect')}>{this.props.betInfo.team2}</Button>
                </div>
              )
            }
          }) 
        }
      
      return (
        <div>
          <div>{this.props.betInfo.team1}</div>
          <div>{this.props.betInfo.team2}</div>
          <div>{this.props.betInfo.start_time}</div>
          <div>{this.props.betInfo.team1logo}</div>
          <div>{this.props.betInfo.team2logo}</div>
          <div> { this.props.betInfo.participants }</div>
          <div> ${ this.props.betInfo.participants * this.props.betInfo.stakes } </div>
          {<div>{getParticipantInformation()}</div>}
          {renderTeamSelection()}
     
        </div>
    )
  }
}

export default IndividualBet;
