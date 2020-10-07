import React from 'react';

import { Link } from 'react-router-dom'

import { Button, Badge } from 'react-bootstrap';

import spotsRemaining from '../helper/helpers'

export default function FavoriteItems(props) {
	const { favorites, favoredActivities, cancelFavorite } = props;

	const favoredItems = favoredActivities.map((favoredActivity, index) => {
    const today = new Date();
    const date = new Date(favoredActivity.date);
    const formatedDate = date.toLocaleDateString();

    const favoredActivityId = favoredActivity.id
    const favoriteId = favorites.filter(obj => obj.activity_id === favoredActivityId)[0].id
		const activityUrl = `/activities/${favoredActivityId}`;
		const spots = spotsRemaining(favoredActivity);

    function destroy(favoriteId) {
      return cancelFavorite(favoriteId)
      .then(res => console.log("favorite cancelled"))
			.catch(err => console.log("favorite cancel err: ", err))
    }

    return (
      <tr key={index}>
        <td>{favoredActivity.title}</td>
        {today < date?
          <td><Badge variant="success">Upcoming</Badge>{' '}</td>:
          <td><Badge variant="danger">Expired</Badge>{' '}</td>
        }
        <td>{spots}</td>
        <td>{formatedDate}</td>
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