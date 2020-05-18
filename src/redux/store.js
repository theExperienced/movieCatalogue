import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [reduxThunk];

const initialState = {
    movies: {
        moviesByGenre: {}
    },
    themes: { 
        currentTheme: 'dark' 
    },
    modal: {
        isActive: false,
        movie: null
    },
    form: {
        CustomForm:{
            values: {}
        }
    }
}

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);


export default { store, persistor }