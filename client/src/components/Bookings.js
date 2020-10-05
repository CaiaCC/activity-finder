import React from 'react';

import "../css/favorites.css"
import { Table, Button, Container, Badge } from 'react-bootstrap';

import useBookingData from '../hooks/useBookingData'
import Success from './success'

export default function Bookings(props) {
  const { bookings, bookedActivities, cancelBooking } = useBookingData();
  function getDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let currentDate = yyyy + '-' + mm + '-' + dd
    return currentDate
  }
  let activityDate;
  if(props.location.data){
     activityDate=props.location.data[1]
  }
  
  const bookedItems = bookedActivities.map((bookedActivity, index) => {
    const bookedActivityId = bookedActivity.id
    const booking = bookings.filter(obj => obj.activity_id === bookedActivityId)[0]
    const spotReserved = booking.number_of_participants 
    const bookingId = booking.id
    
    const destroy = (bookingId) => {
      return cancelBooking(bookingId)
      .then(res => console.log("booking cancelled"))
      .catch(err => console.log("booking cancel err: ", err))
    }

    function getDate(){
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      let currentDate = yyyy + '-' + mm + '-' + dd
      return currentDate
    }

    
    return (
      <tr key={index}>
        <td>{bookedActivity.title}</td>
        { getDate() < bookedActivity.date?
          <td><Badge variant="success">Upcoming</Badge>{' '}</td>:
          <td><Badge variant="danger">Expired</Badge>{' '}</td>
        }
        <td>{spotReserved}</td>
        <td>{bookedActivity.date}</td>
        <td>
          {getDate()<bookedActivity.date &&
            <Button variant="danger" onClick={() => destroy(bookingId)}>Cancel</Button>
          }
        </td>
      </tr>
    )
  })
  
  return (
    <>

    {activityDate > getDate()? <Success header='Thank you for booking:' text={props.location.data[0]} />: activityDate &&<Success header='The booking was unsuccessful:' text='The activity you booked has expired'/>}
      <Container className="list-box">
        <h1>Booked Activities</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Activity Title</th>
              <th>Status</th>
              <th>Spots Reserved</th>
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