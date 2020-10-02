import {useState, useEffect} from "react";
import axios from 'axios';

export default function useFavoriteData() {
	const [favorites, setFavorites] = useState([]);
	const [favoredActivities, setFavoredActivities] = useState([]);

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/favorites')),
      Promise.resolve(axios.get('/api/activities/user/1/favored'))
    ])
    .then(all => {
      setFavorites(all[0].data);
      setFavoredActivities(all[1].data);
    })
    .catch(err => console.log("useFavoriteData.js err: ", err))
	}, [])
	

  function cancelFavorite(favoriteId) {
		return Promise.all([
      Promise.resolve(axios.delete(`/api/users/1/favorites/${favoriteId}`)),
			Promise.resolve(axios.get('/api/users/1/favorites')),
			Promise.resolve(axios.get('/api/activities/user/1/favored'))
    ]).then(all => { 
      setFavorites(all[1].data);
      setFavoredActivities(all[2].data);
    })
			.catch(err => console.log(err))
  }
  
  function createFavorite(activity_id) {
    const favoriteInfo = {
			user_id: 1, 
			activity_id: activity_id
		}
    return Promise.all([
      Promise.resolve(axios.post('/api/users/1/favorites', favoriteInfo)),
			Promise.resolve(axios.get('/api/users/1/favorites')),
			Promise.resolve(axios.get('/api/activities/user/1/favored'))
    ]).then(all => { 
      setFavorites(all[1].data);
      setFavoredActivities(all[2].data);
    })
			.catch(err => console.log(err))
  }
	return {favorites, favoredActivities, cancelFavorite, createFavorite}
}