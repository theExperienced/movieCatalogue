import api from "../../api/api";

import LanguageActionTypes from "./languages.types";

export const fetchLanguages = () => async dispatch => {
    let data;
    let languages;
    await api.get(
      "configuration/languages?api_key=55881c34587ea582a685d26399d1be47"
    ).then(response => {
      data = response;
        languages = data.data.map(datum => ({ 
        value: datum.iso_639_1, 
        title: datum.english_name 
      }));
    console.log('languagessss12345',  languages);
      languages.shift();
    }).catch(error => alert(error));

    

    dispatch({
      type: LanguageActionTypes.FETCH_LANGUAGES,
      payload: languages
    });
  };


