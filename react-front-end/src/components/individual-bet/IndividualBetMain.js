import React, { Component } from "react";
import IndividualBet from "./IndividualBet";
import axios from "axios"
import defaultBg from '../../images/default-bg.png'

class IndividualBetMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      betInfo: {}
    }

    this.getBetDetails.bind(this);
  }

  getBetDetails = () => {
    axios
      .get(`http://localhost:8080/bets/user/${this.props.match.params.id}`, { withCredentials: true })
      .then(allInfo => {
        let allData = allInfo.data;
        this.setState({
          betInfo: allData,
        });
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getBetDetails();
  }

  render() {
    return (
      <div className="container">
        <img alt='background' src={defaultBg} className='bg' />
        <div className="bet-page">
          <IndividualBet betInfo={this.state.betInfo} handleNotificationSelection={this.props.handleNotificationSelection} currentUser={this.props.currentUser} getBetDetails={this.getBetDetails} />
        </div>
      </div>
    );
  }
}

export default IndividualBetMain;
