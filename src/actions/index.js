import api from "../api/api";

import { RANDOM_MOVIE, FETCH_GENRES, BEST_MOVIES, FETCH_MOVIES_BY_GENRE, FETCH_LANGUAGES, FETCH_BY_CRITERIA } from "./types";











export const fetchMoviesByCriteria = (formValues, newQuery) => async dispatch => {
    console.log('formvalues MOVIE CRIETEIEA ACTION', formValues)
    let endPoint = "discover/movie?api_key=55881c34587ea582a685d26399d1be47";
    const endPointAppendix = Object.entries(formValues).map(query => {
        
            console.log('QUERY FROM MOVIE CRIETEIEA ACTION', query)
        
        
        
        return  query[0] === 'vote_average' ? `${query[0]}.gte=${query[1]}` : `${query[0]}=${query[1]}`}).join('&');     //there got to be a better way
    endPoint = endPointAppendix ? `${endPoint}&${endPointAppendix}` : endPoint;
    console.log('ENDPOINT FROM MOVIES BY CRITERIA ATION',endPoint)
    const response = await api.get(endPoint);
    console.log('MOVIES BY CRITERIA RESPONSE', response)
    
    dispatch({
      type: FETCH_BY_CRITERIA,
      payload: [response.data, newQuery]
    });
  };









export const fetchLanguageList = () => async dispatch => {
    const response = await api.get(
      "configuration/languages?api_key=55881c34587ea582a685d26399d1be47"
    );
    const languages = response.data.map(({ iso_639_1: iso, english_name: englishName }) => { return { iso, englishName }});
    
    dispatch({
      type: FETCH_LANGUAGES,
      payload: languages
    });
  };








export const fetchGenreList = () => async dispatch => {
  const response = await api.get(
    "genre/movie/list?api_key=55881c34587ea582a685d26399d1be47&language=en-US"
  );
  const genres = {};
  response.data.genres.forEach(genre => genres[genre.name] = genre.id)
  dispatch({
    type: FETCH_GENRES,
    payload: genres
  });
};


export const fetchMoviesByGenre = (genreId, isGenreChanged, page) => async dispatch => {
  const response = await api.get(
    `discover/movie?api_key=55881c34587ea582a685d26399d1be47&page=${page}&with_genres=${genreId}`
  );
  
  dispatch({
    type: FETCH_MOVIES_BY_GENRE,
    payload: [response.data, isGenreChanged]
  });
};


export const generateRandomMovie = () => async dispatch => {
  const latestResponse = await api.get(
    "movie/latest?api_key=55881c34587ea582a685d26399d1be47"
  );
  const latestMovieId = latestResponse.data.id;
  const randomMovieId = Math.ceil(Math.random() * latestMovieId); //maybe sholdt be ceil!!!
  const randomResponse = await api.get(
    `movie/${randomMovieId}?api_key=55881c34587ea582a685d26399d1be47`
  );
  const randomMovie = randomResponse.data;
  
  dispatch({
    type: RANDOM_MOVIE,
    payload: randomMovie
  });
};


export const fetchBestMovies = () => async dispatch => {
  const bestMovies = await api.get(
    "movie/top_rated?api_key=55881c34587ea582a685d26399d1be47&page=1"
  );
  
  dispatch({
    type: BEST_MOVIES,
    payload: bestMovies.data.results
  });
};


// export const fetchTopMovies = category => async dispatch => {
//   ////////NOT SURE WE WANT CATEGORY
//   const latestResponse = await api.get(
//     "movie/latest?api_key=55881c34587ea582a685d26399d1be47"
//   );
//   const latestMovieId = latestResponse.data.id;
//   const randomMovieId = Math.ceil(Math.random() * latestMovieId); //maybe sholdt be ceil!!!
//   const randomResponse = await api.get(
//     `movie/${randomMovieId}?api_key=55881c34587ea582a685d26399d1be47`
//   );
//   const randomMovie = randomResponse.data;
//   console.log(latestResponse);
//   dispatch({
//     type: TOP_MOVIES,
//     payload: topMovies
//   });
// };
