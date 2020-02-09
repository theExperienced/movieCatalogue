import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import {
  RANDOM_MOVIE,
  FETCH_GENRES,
  BEST_MOVIES,
  FETCH_MOVIES_BY_GENRE,
  FETCH_LANGUAGES,
  FETCH_BY_CRITERIA
} from "../actions/types";

const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case RANDOM_MOVIE:
      return { ...state, randomMovie: action.payload };

    case BEST_MOVIES:
      return { ...state, bestMovies: action.payload };

    case FETCH_BY_CRITERIA:
        
    
            console.log("MOVIES BY CRITREROA ", state);
            if (state.moviesByCriteria && !action.payload[1]) {
              return {
                ...state,
                moviesByCriteria: {
                  totalPages: action.payload[0].total_pages,
                  movies: [
                    ...state.moviesByGenre.movies,
                    ...action.payload[0].results
                  ]
                }
              };
            }
            
            return {
              ...state,
              moviesByCriteria: {
                totalPages: action.payload[0].total_pages,
                movies: action.payload[0].results
              }
            };







    case FETCH_MOVIES_BY_GENRE:
            // debugger;

      console.log("MOVIES BY GENRE", action);
      if (state.moviesByGenre && !action.payload[1]) {
        console.log("INDEED MOVIES BY GENRE EXIST IN STATE", action.payload);
        return {
          ...state,
          moviesByGenre: {
            totalPages: action.payload[0].total_pages,
            movies: [
              ...state.moviesByGenre.movies,
              ...action.payload[0].results
            ]
          }
        }; //needs fixing!!!@%^&$*^&
      }
      
      return {
        ...state,
        moviesByGenre: {
          totalPages: action.payload[0].total_pages,
          movies: action.payload[0].results
        }
      };

    default:
      return state;
  }
};

const genreReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      console.log("GENRES FROM REDUCER ", action.payload);
      return { ...state, genres: action.payload };

    default:
      return state;
  }
};

const languageReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      console.log("GENRES FROM REDUCER ", action.payload);
      return { ...state, languages: action.payload };

    default:
      return state;
  }
};

export default combineReducers({
  movies: movieReducer,
  genres: genreReducer,
  languages: languageReducer,
  form: reduxFormReducer
});
