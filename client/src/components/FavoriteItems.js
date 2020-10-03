import React from 'react';

import { Link } from 'react-router-dom'

import { Button, Badge } from 'react-bootstrap';

import spotsRemaining from '../helper/helpers'

export default function FavoriteItems(props) {
	const { favorites, favoredActivities, cancelFavorite, getFavoredActivities } = props;

	const favoredItems = favoredActivities.map((favoredActivity, index) => {
		console.log(favoredActivity)
    const favoredActivityId = favoredActivity.id
    const favoriteId = favorites.filter(obj => obj.activity_id === favoredActivityId)[0].id
		const activityUrl = `/activities/${favoredActivityId}`;
		const spots = spotsRemaining(favoredActivity);
    console.log(typeof favoredActivity.bookings.length)
    function destroy(favoriteId) {
      return cancelFavorite(favoriteId)
      .then(res => console.log("favorite cancelled"))
			.catch(err => console.log("favorite cancel err: ", err))
			
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
        <td>{favoredActivity.title}</td>
        {getDate()<favoredActivity.date?
        <td><Badge variant="success">Upcoming</Badge>{' '}</td>:
        <td><Badge variant="danger">Expired</Badge>{' '}</td>
        }
        <td>{spots}</td>
        <td>{favoredActivity.date}</td>
        <td>
          <Link to={activityUrl}>
            <Button variant="warning">More Detail</Button>{' '}
          </Link>
        </td>
        <td>
          <Button variant="danger" onClick={() => destroy(favoriteId)}>
            Delete
          </Button>
        </td>
      </tr>
    )
	})
	return (<>{favoredItems}</>)
}