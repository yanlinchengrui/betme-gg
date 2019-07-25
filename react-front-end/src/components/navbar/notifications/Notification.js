import React, { Component } from "react";
import axios from 'axios'

class Notification extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault()
    console.log("----------------------", event.target.value)
    switch(this.props.type) {
      case ("invite"):
      axios.put(`http://localhost:8080/notifications/${this.props.userBetId}/termstatus`, (event.target.name), {withCredentials: true});
      break;

      case ("teamSelect"):
          axios.put(`http://localhost:8080/notifications/${this.props.userBetId}/teamselect`, {withCredentials: true});
          break;
      
      default: 
      break;
    }
  }
  
  displayNotificationByType() {
    let notification;

    switch (this.props.type) {
      case "invite":
        notification = (
        <div> 
          <span> You have been invited to a bet!</span> 
          <form onSubmit={this.handleSubmit}>
          <span><input type='submit' name='Accept' value= 'Accept'/> </span>
          <span><input type='submit' name='Decline' value= 'Decline'/> </span>
          </form>
        </div>
        )
        break;

      case "teamSelect":
        notification = <div> 
          <span>Pick your team: </span>
          <form onSubmit={this.handleSubmit}>
          <span><input type='submit' name='Team1' value= 'Team1'/> </span>
          <span><input type='submit' name='Team2' value= 'Team2'/> </span>
          </form>
          </div>;
        break;

      case "win":
        notification = <div> You won! </div>;
        break;

      case "loss":
        notification = <div> Ha! you lost! </div>;
        break;
      
      default:
        break;
    }
    return notification;
  }

  render() {
    return <div>{this.displayNotificationByType()}</div>;
  }
}

export default Notification;
