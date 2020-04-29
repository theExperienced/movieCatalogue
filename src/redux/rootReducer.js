import { combineReducers } from 'redux';

import { movieReducer } from './movies/movies.reducer';
import { genreReducer } from './genres/genres.reducer';
import { languageReducer } from './languages/languages.reducer';
import { themeReducer } from './theme/theme.reducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  movies: movieReducer,
  genres: genreReducer,
  languages: languageReducer,
  themes: themeReducer,
  form: reduxFormReducer
});
