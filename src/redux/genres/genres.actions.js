import api from "../../api/api";

import GenreActionTypes from "./genres.types";

export const fetchGenres = () => async dispatch => {
    let data;
    let genres = {};

    const response = await api.get(
      "genre/movie/list?api_key=55881c34587ea582a685d26399d1be47&language=en-US"
    ).then(data => {console.log('GENRE DATAAAAAAAAA', data); 
        genres = data.data.genres.map(genre => ({
        value: genre.id,
        title: genre.name
    }));
})
    .catch(error => alert(error));
    
    console.log('INSIDE GENRE ACTION', genres);

    dispatch({
      type: GenreActionTypes.FETCH_GENRES,
      payload: genres
    });
  };
  