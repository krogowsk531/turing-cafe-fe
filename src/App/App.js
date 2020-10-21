import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../apiFetch.js'
import ReservationCard from '../ReservationCard.js'
import Reservation from '../Reservation/Reservation.js'
import Form from '../Form/Form.js'


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

  addReservation = (newReservation) => {
    this.setState({reservations: this.state.reservations.concat(newReservation)})
  }
  render() {
    return (
      <div className="App">
        <h1> reservations </h1>
        <Reservation reservations={this.state.reservations} />
        <Form addReservation={this.addReservation} />
      </div>
    )
  }
}

export default App;
