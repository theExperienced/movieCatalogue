import ThemeActionTypes from "./theme.types";

import { themes } from '../../GlobalStyle';

export const toggleTheme = () => ({
    type: ThemeActionTypes.TOGGLE_THEME
});

export const loadThemes = () => ({
    type: ThemeActionTypes.LOAD_THEMES,
    payload: themes
});

// export const fetchMoviesByCriteria = (formValues, isNewQuery) => async dispatch => {
//     let endPoint = "discover/movie?api_key=55881c34587ea582a685d26399d1be47";
//     const endPointAppendix = Object.entries(formValues).map(query => {
        
//         return  query[0] === 'vote_average' ? `${query[0]}.gte=${query[1]}` : `${query[0]}=${query[1]}`}).join('&');     //there got to be a better way

//     endPoint = endPointAppendix ? `${endPoint}&${endPointAppendix}` : endPoint;
//     let result;
//     await api.get(endPoint).
//     then(response => { result = response.data}).
//     catch(error => console.log('ERROR FROM FETCH BY CRITERIA REDUCER', error));
    
//     console.log('PAYLOAD INSIDE MOVIE BY CRITEIRA REDUCER', result)

//     dispatch({
//         type: MovieActionTypes.FETCH_BY_CRITERIA,
//         payload: {
//             movies: result.results,
//             total_pages: result.total_pages, 
//             isNewQuery: isNewQuery
//         }
//     });
// };

// export const fetchMoviesByGenre = (genreId, isGenreChanged, page) => async dispatch => {
//   const response = await api.get(
//     `discover/movie?api_key=55881c34587ea582a685d26399d1be47&page=${page}&with_genres=${genreId}`
//   );
  
//   dispatch({
//     type: MovieActionTypes.FETCH_MOVIES_BY_GENRE,
//     payload: [response.data, isGenreChanged]
//   });
// };

// export const fetchRandomMovie = () => async dispatch => {
//   const latestResponse = await api.get(
//     "movie/latest?api_key=55881c34587ea582a685d26399d1be47"
//   );
//   const latestMovieId = latestResponse.data.id;
//   const randomMovieId = Math.ceil(Math.random() * latestMovieId); //maybe sholdt be ceil!!!
//   const randomResponse = await api.get(
//     `movie/${randomMovieId}?api_key=55881c34587ea582a685d26399d1be47`
//   );
//   const randomMovie = randomResponse.data;
  
//   dispatch({
//     type: MovieActionTypes.FETCH_RANDOM_MOVIE,
//     payload: randomMovie
//   });
// };

// export const fetchBestMovies = () => async dispatch => {
//   const bestMovies = await api.get(
//     "movie/top_rated?api_key=55881c34587ea582a685d26399d1be47&page=1"
//   );
  
//   dispatch({
//     type: MovieActionTypes.FETCH_BEST_MOVIES,
//     payload: bestMovies.data.results
//   });
// };
