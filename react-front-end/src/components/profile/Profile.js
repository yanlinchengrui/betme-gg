import React, { Component } from "react";
import BetHistoryList from "./BetHistoryList";
import axios from "axios"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gamesWon: "",
      gamesLost: "",
    }
  }

  getWinCount = () => {
    axios
      .get("http://localhost:8080/profile", { withCredentials: true })
      .then(allInfo => {
        let allData = allInfo.data;

        this.setState({
          gamesWon: allData.win,
          gamesLost: allData.loss
        });
        console.log(this.state.userBets)
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getWinCount()
  }


  render() {
    return (
      <div>
        <div>{this.props.currentUser.user_name}</div>
        <div>{this.props.currentUser.first_name}</div>
        <div>{this.props.currentUser.last_name}</div>
        <div>{this.props.currentUser.favorite_team}</div>
        <div>{this.props.currentUser.favorite_game}</div>
        <div>{this.props.currentUser.avatar_url}</div>
        <div>Bets Won: {this.state.gamesWon}</div>    
        <div>Bets Lost: {this.state.gamesLost}</div>        
    
        <div>
          <BetHistoryList betinfo={this.props.betinfo} />
        </div>
      </div>
    );
  }
}

export default Profile;
