import {useState, useEffect} from "react";
import axios from 'axios';

export default function useBookingData() {
  const [bookings, setBookings] = useState([]);
  const [bookedActivities, setBookedActivities] = useState([]);
  
  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/bookings')),
      Promise.resolve(axios.get('/api/activities/user/1/booked'))
    ])
    .then(all => {
      setBookings(all[0].data);
      setBookedActivities(all[1].data);
      })
    .catch(err => console.log("useBookingData.js err: ", err))
  }, [bookings.length])
  
  const getBookedActivities = () => {
    return axios.get('/api/activities/user/1/booked')
    .then(res => setBookedActivities(res.data)) 
  };

  function cancelBooking(bookingId) {
    return axios.delete(`/api/users/1/bookings/${bookingId}`)
    .then(res => console.log('Sent delete booking request'))
    .then(() => getBookedActivities())
    .catch(err => console.log('Err form delete booking request: ', err))
  }
  
  function createBooking(activityId, pricePerPerson, numberOfPeople) {
    const newBooking = {
      number_of_participants: numberOfPeople, 
      price_per_person: pricePerPerson, 
      user_id: 1, 
      activity_id: activityId
    }

    return axios.post('/api/users/1/bookings', newBooking)
    .then(res => console.log('Sent post booking request'))
    .then(() => getBookedActivities())
    .catch(err => console.log('Err form post booking request: ', err))

  }
  return {bookings, bookedActivities, cancelBooking, createBooking}
}