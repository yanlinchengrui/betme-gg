import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/Login";
import IndividualBetMain from "./components/individual-bet/IndividualBetMain";
import StreamAndChat from "./components/stream/StreamAndChat";
import Profile from "./components/profile/Profile";
import Footer from "./components/Footer";
import axios from "axios";
import compareObjs from "deep-equal";

import "./App.css";
import "./styles/styles.css";
import "antd/dist/antd.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { avatar_url: '' },
      userBets: [],
      userBetInformation: [],
      upcomingMatches: []
    };
  }

  getUserBetsDetails = () => {
    return axios
      .get("http://localhost:8080/users/details", { withCredentials: true })
      .then(allInfo => {
        let allData = allInfo.data;
        const bets = allData.bets;
        delete allData["bets"];
        this.setState({
          userInfo: allData,
          userBets: bets
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getUpcomingMatches = () => {
    axios.get(`https://api.pandascore.co/matches/upcoming?page[size]=20&&token=${process.env.REACT_APP_TOKEN}`)
      .then((rez) => {
        let upcomingMatches = rez.data.filter(match => {
          return match.opponents.length && match.opponents[0].opponent.image_url && match.opponents[1].opponent.image_url;
        }).slice(0, 5);

        upcomingMatches.forEach(match => {
          let matchName = match.name;
          if (matchName.indexOf(':') !== -1) {
            matchName = matchName.substring(matchName.indexOf(":") + 2);
            match.name = matchName;
          }
        });

        this.setState({ upcomingMatches: upcomingMatches });
      });
  }

  handleNotificationSelection = (id, truthy, notificationType) => {
    switch (notificationType) {
      case "invite":
        return axios
          .put(
            `http://localhost:8080/notifications/${id}/termStatus`,
            { termStatus: truthy },
            { withCredentials: true }
          )
          .then(() => {
            // refresh notifications
            return this.getUserBetsDetails();
          });

      case "teamSelect":
        return axios
          .put(
            `http://localhost:8080/notifications/${id}/teamSelect`,
            { teamSelect: truthy },
            { withCredentials: true }
          )
          .then(() => {
            // refresh notifications
            return this.getUserBetsDetails();
          });

      default:
        break;
    }
  }

  handleNotificationRead = (ids) => {
    Promise.all(ids.map((id) => {
      return axios.put(`http://localhost:8080/notifications/${id}/notificationRead`,
        { withCredentials: true }
      )
    })).then(() => {
      this.getUserBetsDetails();
    });
  }

  componentDidMount() {
    this.getUpcomingMatches();
    this.getUserBetsDetails();
    setInterval(this.getUserBetsDetails, 5000);
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (compareObjs(nextState.userBets, this.state.userBets) &&
      compareObjs(nextState.userBetInformation, this.state.userBetInformation)) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <NavBar
          userBets={this.state.userBets}
          handleNotificationRead={this.handleNotificationRead}
          handleNotificationSelection={this.handleNotificationSelection}
          refreshComponent={this.getUserBetsDetails}
          upcomingMatches={this.state.upcomingMatches}
          userInfo={this.state.userInfo}
        />
        <main>
          <Switch>
            <Route exact path="/" component={() => <Dashboard upcomingMatches={this.state.upcomingMatches} activeBets={this.state.userBets} getUserBetsDetails={this.getUserBetsDetails} />} />

            <Route path="/login" render={(props) => { return (<Login {...props} getUserBetsDetails={this.getUserBetsDetails} />) }} />

            <Route path="/bets/user/:id" render={(props) => { return (<IndividualBetMain {...props} handleNotificationSelection={this.handleNotificationSelection} currentUser={this.state.userInfo} />) }} />

            <Route path="/profile" render={(props) => { return (<Profile {...props} currentUser={this.state.userInfo} betinfo={this.state.userBets} />) }} />

            <Route path="/stream/:game" render={(props) => { return <StreamAndChat {...props} currentUser={this.state.userInfo} /> }} />

          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
