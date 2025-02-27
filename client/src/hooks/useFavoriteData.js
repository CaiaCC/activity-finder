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
    .catch(err => console.log("getStates err: ", err))
  }, []);

  const getFavoredActivities = () => {
    return axios.get('/api/activities/user/1/favored')
    .then(res => setFavoredActivities(res.data))
  };
  const getFavorites = () => {
    return axios.get('/api/users/1/favorites')
    .then(res => setFavorites(res.data))
  }

  const cancelFavorite = favoriteId => {
    return axios.delete(`/api/users/1/favorites/${favoriteId}`)
    .then(() => getFavoredActivities())
    .then(res => console.log('Sent delete favorite request'))
    .catch(err => console.log('Err form delete favorite request: ', err))
  };
  
  const createFavorite = activity_id => {
    const existActivity = favoredActivities.filter(obj => obj.activity_id === activity_id);
    if(existActivity.length === 0) {
      console.log("favoriteActivities did not include: ")

      const newFavorite = {
        user_id: 1, 
        activity_id: activity_id
      }

      return axios.post('/api/users/1/favorites', newFavorite)
      .then(getFavorites())
      .then(getFavoredActivities())
      .then(res => console.log('Sent post favorite request'))
      .catch(err => console.log('Err form post favorite request: ', err))
    }
  }
  
  return { favorites, favoredActivities, cancelFavorite, createFavorite, getFavoredActivities };
};