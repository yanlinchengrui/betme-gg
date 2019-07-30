import React, { Component } from "react";
import BetHistoryList from "./BetHistoryList";
import axios from "axios"
import csgo from '../../images/csgo-header.jpg'
import lol from '../../images/lol-header.jpg'
import ow from '../../images/ow-header.jpg'
import dota from '../../images/dota2-header.jpg'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gamesWon: "",
      gamesLost: "",
    }
  }

  favGame = {
    'CS:GO': csgo,
    'LoL': lol,
    'Overwatch': ow,
    'Dota 2': dota
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
      <div className='container'>
        <div className='profile'>
          <div className='profile__header' style={{ backgroundImage: `url(${this.favGame[this.props.currentUser.favorite_game]})` }}>
            <div className='header__avatar' style={{ backgroundImage: `url(${this.props.currentUser.avatar_url})` }}></div>
          </div>
          <div className='profile__info'>
            <div className='info__user'>
              <h2>User information</h2>
              <div className='info__container'>
                <h4>{this.props.currentUser.user_name}</h4>
                <div className='user-info'>
                  <span className='user-info__title'>First Name:</span>{this.props.currentUser.first_name}
                </div>
                <div className='user-info'>
                  <span className='user-info__title'>Last Name:</span>{this.props.currentUser.last_name}
                </div>
                <div className='user-info'>
                  <span className='user-info__title'>Favourite Team:</span>{this.props.currentUser.favorite_team}
                </div>
                <div className='user-info'>
                  <span className='user-info__title'>Favourite Game:</span>{this.props.currentUser.favorite_game}
                </div>
                <div className='user-info'>
                  <span className='user-info__title'>Bank: </span>${this.props.currentUser.bank}
                </div>
                <div className='user-info'>
                  <span className='user-info__title'>Bets Won:</span>{this.state.gamesWon}
                </div>
                <div className='user-info'>
                  <span className='user-info__title'>Bets Lost:</span>{this.state.gamesLost}
                </div>
              </div>
            </div>
            <div className='info__past-bets'>
              <BetHistoryList betinfo={this.props.betinfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
