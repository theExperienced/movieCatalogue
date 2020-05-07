import api from "../../api/api";

import GenreActionTypes from "./genres.types";

export const fetchGenres = () => async dispatch => {
    let genres = {};

    await api.get(
      "genre/movie/list?api_key=55881c34587ea582a685d26399d1be47&language=en-US"
    ).then(data => {console.log('GENRE DATAAAAAAAAA', data); 
        data.data.genres.forEach(genre => {
          genres[genre.id] = genre.name
        })
    })
    .catch(error => alert(error));
    
    console.log('INSIDE GENRE ACTION', genres);

    dispatch({
      type: GenreActionTypes.FETCH_GENRES,
      payload: genres
    });
  };
  