import React from 'react'

const ReservationCard = ( {id, customerName, resDate, time, number} ) => {
  return (
    <section >
      <h2>Name: {customerName}</h2>
      <h2>Date: {resDate}</h2>
      <h2>Time: {time}</h2>
      <h2>Number of Guests: {number}</h2>
    </section>
  )
}

export default ReservationCard;


//Array of all existing reservations: [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]
