import LanguageActionTypes from './languages.types';

export const languageReducer = (state = {}, action) => {
    switch (action.type) {
      case LanguageActionTypes.FETCH_LANGUAGES:
        console.log("GENRES FROM REDUCER ", action.payload);
        // return { ...state, languages: action.payload };
        return { languageList: action.payload };
  
      default:
        return state;
    }
};