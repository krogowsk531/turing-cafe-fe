import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
      id: 0,
      error: ''
      }
    }

    eventHandler = (event) => {
      event.preventDefault()
      this.setState({[event.target.name]: event.target.value})
    }

    submitReservation = (event) => {
      event.preventDefault()
      const reservationName = this.state.name
      const reservationDate = this.state.date
      const reservationTime = this.state.time
      const numberOfGuests = this.state.number
      const id = this.state.id
      const aNewReservation = { reservationName, reservationDate, reservationTime, numberOfGuests, id}
      this.props.addReservation(aNewReservation)
    }

    render() {
      return (
        <section>
          <label>Name: </label>
          <input className="reservation-name"
            type="text"
            id="reservationName"
            name="reservationName"
            onChange={this.eventHandler}
            value={this.state.name}
          />
          <label>Date: </label>
          <input className="reservation-date"
            type="text"
            id="reservationDate"
            name="reservationDate"
            onChange={this.eventHandler}
            value={this.state.date}
          />
          <label>Time: </label>
          <input className="reservation-time"
            type="text"
            id="reservationTime"
            name="reservationTime"
            onChange={this.eventHandler}
            value={this.state.time}
          />
          <label>Number of Guests: </label>
          <input className="number-of-guests"
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            onChange={this.eventHandler}
            value={this.state.number}
          />
          <button className="button" type="submit"
            onClick={this.submitReservation}
            >Make Reservation</button>
        </section>
      )
  }
}

export default Form;

//{name: <String>, date: <String>, time: <String>, number: <Number>}
//{ id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }
