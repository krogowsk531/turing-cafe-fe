import React from 'react'
import ReservationCard from '../ReservationCard.js'

const Reservation = ( {reservations} ) => {
  return (
    <section>
      <h2>Your Reservations</h2>
        {reservations.map(res => {
          return <ReservationCard
            customerName={res.name}
            resDate={res.date}
            time={res.time}
            number={res.number}
            />
        })
      }
    </section>
  )
}

export default Reservation;
