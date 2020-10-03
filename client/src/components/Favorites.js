import React from 'react';

import "../css/favorites.css"
import { Table, Container} from 'react-bootstrap';

import FavoriteItems from './FavoriteItems'
import useFavoriteData from '../hooks/useFavoriteData'

export default function Favorites() {
  const { favorites, favoredActivities, cancelFavorite } = useFavoriteData();

  return (
    <>
      <Container className="list-box">
        <h1>My Favorites </h1>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Activity Title</th>
              <th>Status</th>
              <th>Spots Available</th>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <FavoriteItems
              favorites={favorites}
              favoredActivities={favoredActivities}
              cancelFavorite={cancelFavorite}
            />
          </tbody>
        </Table>
      </Container>
    </>
  )
}