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
      this.setState({[event.target.name]: event.target.value})
    }

    submitReservation = (event) => {
      event.preventDefault()
      const name = this.state.name
      const date = this.state.date
      const time = this.state.time
      const number = this.state.number
      const id = this.state.id
      const aNewReservation = { name, date, time, number}
      this.props.addReservation(aNewReservation)
    }

    render() {
      return (
        <section>
        <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.eventHandler}
            value={this.state.name}
          />
          <label>Date: </label>
          <input
            type="text"
            name="date"
            onChange={this.eventHandler}
            value={this.state.date}
          />
          <label>Time: </label>
          <input
            type="text"
            name="time"
            onChange={this.eventHandler}
            value={this.state.time}
          />
          <label>Number of Guests: </label>
          <input
            type="number"
            name="number"
            onChange={this.eventHandler}
            value={this.state.number}
          />
          </div>
          <button type="submit" onClick={this.submitReservation}>Make Reservation</button>
          </form>
        </section>
      )
  }
}

export default Form;

//{name: <String>, date: <String>, time: <String>, number: <Number>}
//{ id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }
