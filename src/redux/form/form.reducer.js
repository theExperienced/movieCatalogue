import FormActionTypes from "./form.types";

export const genreReducer = (state = {}, action) => {


  
  console.log('INSIDE GENRE REDUCER', action);


    switch (action.type) {
      case FormActionTypes.UPDATE_FORM_VALUES:
        console.log("GENRES FROM REDUCER ", action.payload);
        // return { ...state, genres: action.payload };
        return { values: action.payload };
  
      case FormActionTypes.RESUBMIT:
        console.log("GENRES FROM REDUCER ", action.payload);
        // return { ...state, genres: action.payload };
        return { resubmitted: action.payload };
    
      default:
        return state;
    }
};