import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from "./Banner"
import "../css/favorites.css"

import { Table, Button, Container } from 'react-bootstrap';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [bookedActivities, setBookedActivities] = useState([]);

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/bookings')),
      Promise.resolve(axios.get('/api/activities/user/1/booked'))
    ])
      .then(all => {
        console.log(all)
        setBookings(all[0].data)
        setBookedActivities(all[1].data)
      })
      .catch(err => console.log("bookings.js err: ", err))
  }, [bookings.length])

  function CancelButton(props) {
    return (
      <Button variant="danger"
        onClick={props.onClick}
      >
        Cancel
      </Button>
      )
  }
  
  function findBookingIdByBookedActivityId(bookings, bookedActivityId) {
    const result = bookings.filter(obj => obj.activity_id === bookedActivityId).id
    console.log(result)
    return result.id
  }

  const bookedItems = bookedActivities.map(bookedActivity => {
    const bookedActivityId = bookedActivity.id

    function cancelBooking(bookedActivityId) {

      const bookingId = findBookingIdByBookedActivityId(bookings, bookedActivityId);

      axios.delete(`/api/users/1/bookings/${bookingId}`)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log('err from cancel booking', err)
        })
    }

    return (
      <tr key={bookedActivity.id}>
        <td>{bookedActivity.title}</td>
        <td></td>
        <td>{bookedActivity.date}</td>
        <td>
          <CancelButton onClick={cancelBooking} />
        </td>
      </tr>
    )
  })
  return (
    <>
      <Container className="list-box">
        <h1>Booked Activities</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Activity Title</th>
              <th>Status</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookedItems}
          </tbody>
        </Table>
      </Container>
    </>
  )
}