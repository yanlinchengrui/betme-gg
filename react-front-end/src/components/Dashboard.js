import React, { Component } from "react";
import axios from "axios";
// import moment from 'moment';
import moment from 'moment-timezone';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upcomingMatches: []
    };
  }

  componentDidMount() {
    console.log(process.env)
    axios.get(`https://api.pandascore.co/matches/upcoming?token=${process.env.REACT_APP_TOKEN}`)
      .then((rez) => {
        console.log(rez.data);
        this.setState(
          // { upcomingMatches: rez.data.slice(0, 10) }
          { upcomingMatches: rez.data }
        );
      });
  }

  gameLogo = {
    "CS:GO": "https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg",
    "LoL": "https://pandascore.co/assets/landingpage/icon-flat/LOL-dfcf243283cfa3b9f251bb5566d5fc268a616ed78860cfb6ca47685826f62924.png",
    "Overwatch": "https://pandascore.co/assets/landingpage/icon-flat/OW-715576a0b5fc0e93d143c8cac437803ff3e565df60801c0b8e4070cea21665d5.png",
    "Dota2": "https://pandascore.co/assets/landingpage/icon-flat/DOTA2-ced998caab272cce0c809d80cbeecc52eda50821fd1821ce8f3f7c04899a4d8a.png"
  }

  renderMatches(matches) {
    return matches.map(match => {
      return (
        <div key={match.id}>
          <img src={this.gameLogo[match.videogame.name]} alt={match.videogame.name} style={{ width: 50 + 'px', height: 50 + 'px' }} />
          {match.name} {match.begin_at} => {moment(match.begin_at).tz("America/Vancouver").format('YYYY-MM-DD HH:mm:00')} ?
          <img src={match.opponents[0].opponent.image_url} style={{ width: 50 + 'px', height: 50 + 'px' }} /> VS
           {
            match.opponents[1] ?
              <img src={match.opponents[1].opponent.image_url} style={{ width: 50 + 'px', height: 50 + 'px' }} />
              : <img src="https://cdn.pandascore.co/images/team/image/126148/ffamix.png" style={{ width: 50 + 'px', height: 50 + 'px' }} />
          }
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <p style={{ paddingTop: '100px' }}>Dashboard</p>
        {this.renderMatches(this.state.upcomingMatches)}
      </div>
    );
  }
}

export default Dashboard;


{/* <Icon type="bell" theme="filled" /> */ }