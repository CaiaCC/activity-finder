import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Alert, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import '../css/confirmation.css'

function Confirmation(props) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [individualPrice, setIndividualPrice] = useState(0)
  const [maxPeople, setMaxPeople] = useState(0)
  const [peopleSelected, setPeopleSelected] = useState(0)

  useEffect(() => {
    const id = props.match.params.id;
    const url = `/api/activities/${id}`
    axios.get(url)
      .then(res => {
        setTitle(res.data.title)
        console.log(res)
        setIndividualPrice(res.data.price_per_person)
        setMaxPeople(res.data.max_number_of_participants)
      })

      .catch(res => console.log(res))

  }, [])

  const exception = (event) => {
    if (peopleSelected == 0 || peopleSelected > maxPeople) {
      event.preventDefault();
    }
  }

  const id = props.match.params.id
  const backLink = `/activities/${id}`
  console.log(maxPeople)
  return (
    <>
      <Container>
        <row><h1 className='confirm'>Awesome! Let's book you in for</h1></row>

        <row><h2 className='title'>{title}</h2></row>
        <row><span className='question-spot'>How many spots do you want to reserve?</span></row>
        <input
          className='input-spot'
          type='number'
          min='1'
          placeholder='# of spots'
          size='10px'
          onChange={event => {
            setPrice(event.target.value * individualPrice)
            setPeopleSelected(event.target.value)
          }
          }
        />
        {peopleSelected > maxPeople && <Alert variant='danger' className='error-max'>The spots selected exceeds the maximum number of participants</Alert>}
        {peopleSelected == 0 && <Alert variant='danger' className='error-min'>You must select at least one spot</Alert>}
        <h3 className='total-price'>Total price : ${price}</h3>
        <div className='button-group'>
          <Link to='/api/bookings'>
            <Button variant="warning" onClick={exception}>Confirm your booking</Button>{' '}
          </Link>
          <Link to={backLink}>
            <Button variant="danger">Cancel</Button>{' '}
          </Link>
        </div>
      </Container>
    </>
  )

}


export default Confirmation