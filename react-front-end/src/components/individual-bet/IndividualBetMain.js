import React, { Component } from "react";
import IndividualBet from "./IndividualBet";
import axios from "axios"

class IndividualBetMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      betInfo: {}
    }
  }
  
  getBetDetails = () => {
        axios
        .get(`http://localhost:8080/bets/user/${this.props.match.params.id}`, { withCredentials: true})
        .then(allInfo => {
          let allData = allInfo.data;
          console.log(allData)
          this.setState({
            betInfo: allData,
          });
        })
        .then(() => {
          console.log("sfsdfcasdf", this.state)
        })
        .catch(err => {
          console.log(err)
        })
      }
      
      
      componentDidMount() {
        this.getBetDetails()
      }

  render() {
    return (
      <div className="container">
        <div className="bet">
          <IndividualBet betInfo={this.state.betInfo} handleNotificationSelection={this.props.handleNotificationSelection} currentUser={this.props.currentUser}/>
        </div>
      </div>
    );
  }
}

export default IndividualBetMain;
