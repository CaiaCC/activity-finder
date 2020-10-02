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
			console.log();
      setBookings(all[0].data);
      setBookedActivities(all[1].data);
      })
    .catch(err => console.log("useBookingData.js err: ", err))
	}, [])
	

  function cancelBooking(bookingId) {
		return Promise.all([
      Promise.resolve(axios.delete(`/api/users/1/bookings/${bookingId}`)),
			Promise.resolve(axios.get('/api/users/1/bookings')),
			Promise.resolve(axios.get('/api/activities/user/1/booked'))
		]).then(all => {
			setBookings(all[1].data);
			setBookedActivities(all[2].data);
		})
			.catch(err => console.log(err))
  }
  
  function createBooking(activity_id, price, numberOfPeople ) {
		const bookingInfo = {
			number_of_participants: numberOfPeople, 
			price_per_person: price, 
			user_id: 1, 
			activity_id: activity_id
		}
		return Promise.all([
      Promise.resolve(axios.post('/api/users/1/bookings', bookingInfo)),
			Promise.resolve(axios.get('/api/users/1/bookings')),
			Promise.resolve(axios.get('/api/activities/user/1/booked'))
		]).then(all => {
			setBookings(all[1].data);
			setBookedActivities(all[2].data);
		})
			.catch(err => console.log(err))
  }
	return {bookings, bookedActivities, cancelBooking, createBooking}
}