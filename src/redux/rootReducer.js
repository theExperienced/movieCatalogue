import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { movieReducer } from './movies/movies.reducer';
import { genreReducer } from './genres/genres.reducer';
import { languageReducer } from './languages/languages.reducer';
import { themeReducer } from './theme/theme.reducer';
import { modalReducer } from './modal/modal.reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
  languages: languageReducer,
  themes: themeReducer,
  modal: modalReducer,
  form: reduxFormReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['movies', 'genres', 'languages']     //maybe more?
};

export default persistReducer(persistConfig, rootReducer);
