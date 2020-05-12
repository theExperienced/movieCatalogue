import api from '../../api/api';

import MovieActionTypes from './movies.types';

export const fetchMoviesByCriteria = (formValues, page, isNewQuery) => async dispatch => {    //maybe just page instead of isNewQury
  // console.log('PAYLOAD INSIDE MOVIE BY CRITEIRA REDUCER', result)
    let endPoint = 'discover/movie?api_key=55881c34587ea582a685d26399d1be47';
    const endPointAppendix = Object.entries(formValues).map(([query, value]) => {
        // console.log('END POINT APPENDIX', query, value);
        return query === 'vote_average' ? `${query}.gte=${value}` : `${query}=${value}`
      }).join('&');     //there got to be a better way
        

    endPoint = endPointAppendix ? `${endPoint}&${endPointAppendix}` : endPoint;
    console.log('END POINT', endPoint)
    let data;
    await api.get(endPoint).
    then(response => { data = response.data}).
    catch(error => console.log('ERROR FROM FETCH BY CRITERIA REDUCER', error));
    console.log('REDUCER CRITERA MOVIES DATA', data)
    
    dispatch({
        type: MovieActionTypes.FETCH_BY_CRITERIA,
        payload: {
            movies: data.results,
            totalPages: data.total_pages, 
            isNewQuery: isNewQuery, 
            page: data.page
        }
    });
};

export const fetchMoviesByGenre = (genreId, page) => async dispatch => {
  let data;
  await api.get(
    `discover/movie?api_key=55881c34587ea582a685d26399d1be47&page=${page}&with_genres=${genreId}`
  ).then(response => data = response.data )
  // movies = data.results.map(movie => ({ movie: { backdrop_path, genre_ids, original_language, original_title, overview, poster_path, release_date, title, vote_average }}));
  

  // const { results: movies, total_pages: totalPages, page } = data;

  dispatch({
    type: MovieActionTypes.FETCH_MOVIES_BY_GENRE,
    payload: { 
        id: genreId,
        movies: data.results,    //probably dont need to destructure 'page' 
        totalPages: data.total_pages,
        page: data.page
    }
  });
};

export const fetchRandomMovie = () => async dispatch => {
  const latestResponse = await api.get(
    'movie/latest?api_key=55881c34587ea582a685d26399d1be47&language=en'
  );
  const latestMovieId = latestResponse.data.id;
  const randomMovieId = Math.ceil(Math.random() * latestMovieId); //maybe sholdt be ceil!!!
  const randomResponse = await api.get(
    `movie/${randomMovieId}?api_key=55881c34587ea582a685d26399d1be47`
  );
  const randomMovie = randomResponse.data;
  
  console.log('randomMovie', randomMovie)
  dispatch({
    type: MovieActionTypes.FETCH_RANDOM_MOVIE,
    payload: randomMovie
  });
};

export const fetchBestMovies = (page = 1) => async dispatch => {
  let data;
  await api.get(
    `movie/top_rated?api_key=55881c34587ea582a685d26399d1be47&page=${page}&language=en-US`
  ).then(response => data = response.data)
  // .catch(error => alert(error));

  console.log('BEST MOVIESSSS',data)
  
  dispatch({
    type: MovieActionTypes.FETCH_BEST_MOVIES,
    payload: {
      page: data.page,
      movies: data.results,
      totalPages: data.total_pages
    }
  });
};
