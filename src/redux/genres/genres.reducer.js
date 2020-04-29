import GenreActionTypes from "./genres.types";

export const genreReducer = (state = {}, action) => {
    switch (action.type) {
      case GenreActionTypes.FETCH_GENRES:
        console.log("GENRES FROM REDUCER ", action.payload);
        // return { ...state, genres: action.payload };
        return { genresList: [ ...action.payload ] };
  
      default:
        return state;
    }
};