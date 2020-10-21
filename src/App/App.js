import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../apiFetch.js'
import ReservationCard from '../ReservationCard.js'
import Reservation from '../Reservation/Reservation.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  componentDidMount = async () => {
    await fetchReservations()
    .then(data => {this.setState({reservations: data})})
    .catch(error => console.log("NOT FETCHING DATA"))
  }
  render() {
    return (
      <div className="App">
        <h1> reservations </h1>
        <Reservation reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
