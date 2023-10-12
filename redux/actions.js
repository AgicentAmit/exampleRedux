import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'b449bd34b8de40456df8c210b094e356';

export const getMovies = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}?api_key=${API_KEY}&page=1`);
      dispatch({
        type: GET_MOVIES,
        payload: response.data.results, // Assuming movies are in 'results' field
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
};

export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  });
};

export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  });
};
