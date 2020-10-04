import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../detail/activity.css"
import { Alert } from 'react-bootstrap'

import { Button, Badge, Row, Container, Col } from 'react-bootstrap';
import Banner from '../Banner'
import useFavoriteData from '../../hooks/useFavoriteData'
import spotsRemaining from '../../helper/helpers'

function Activity(props) {
  const [activity, setActivity] = useState([])
  const { createFavorite, getFavoredActivities } = useFavoriteData();
  
  useEffect(() => {
    const id = props.match.params.id;
    const url = `/api/activities/${id}`
    // console.log(props)
    axios.get(url)
      .then(res => setActivity(res.data))
      .catch(res => console.log(res))

  }, [])

  const id = props.match.params.id;
  const confirmationLink = `${id}/confirmation`;

  console.log( activity.bookings)

  function addFav() {
    return createFavorite(id)
    .then(console.log("Add to Fav"))
    .then(getFavoredActivities())
    .catch(err => console.log("Err adding fav from detail activity page" ,err))
  }
  
  const spots = spotsRemaining(activity);
  const isBooked = () => {
    if (Array.isArray(activity.bookings) || activity.bookings.length) {
      return true;
    } else {
      return false;
    }
  }
  const isFavored = () => {
    if (Array.isArray(activity.favorites) || activity.favorites.length) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
    <Banner></Banner>
      <Container>
        { isBooked &&  
          <Alert variant='primary'>
          You already booked this activity, please check it out on 
          <Alert.Link href="/bookings"> My bookings</Alert.Link> page.
        </Alert>
        }
        { isFavored &&  
          <Alert variant='primary'>
          You already added this activity to 
          <Alert.Link href="/favorites"> My favorites</Alert.Link>.
        </Alert>
        }
        { spots === 0 &&  
          <Alert variant='danger'>
          No more spots remain for this activity.
        </Alert>
        }
        <Row>
          <Col>
            <div className='info'>
              <h1>{activity.title}</h1>
              <div className='date'>Date: {activity.date}</div>
            </div>
            <div className='spots'>
              Spots remaining:  <Badge color='info'>{spots}</Badge>
            </div>
            <div className='pricetag'>Price per person: ${activity.price_per_person}
            </div>
            <div className='CTA'>
              { !isBooked &&
                <Link to = {confirmationLink}>
                <Button variant="warning">Join this activity</Button>{' '}
                </Link>
              }
              { !isFavored &&

              <Link to='/favorites'>
                <Button variant="info" onClick={addFav}>Add to favorites</Button>{' '}
              </Link>
              }
            </div>
          </Col>

          <Col>
            <div className='image'><img src={activity.image_url} alt={activity.title}></img></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='description'>{activity.description}</div>
          </Col>

        </Row>

      </Container>

    </>
  )
}

export default Activity