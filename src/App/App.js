import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../apiFetch.js'
import ReservationCard from '../ReservationCard.js'


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
        <ReservationCard />
      </div>
    )
  }
}

export default App;
