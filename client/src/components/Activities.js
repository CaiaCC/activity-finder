import React, { useEffect, useState } from 'react';
import './Activities.css'
import axios from 'axios';

export default function Activities() {
	const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('api/activities')
      .then(res => {
        setActivities(res.data)
        console.log(res.data)
      })
      .catch(res => console.log(res))

  }, []);

  const listActivity = activities.map( activity => {
    return (
      <li
        key={activity.id}
      >
        {activity.title}
      </li>
    )
	});

	return (
    <div className='activity'>
      {listActivity}
    </div>
  )
}