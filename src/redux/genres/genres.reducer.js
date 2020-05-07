import GenreActionTypes from "./genres.types";

export const genreReducer = (state = {}, action) => {


  
  console.log('INSIDE GENRE REDUCER', action);


    switch (action.type) {
      case GenreActionTypes.FETCH_GENRES:
        console.log("GENRES FROM REDUCER ", action.payload);
        // return { ...state, genres: action.payload };
        return { genreList: action.payload };
  
      default:
        return state;
    }
};