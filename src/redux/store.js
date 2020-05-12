import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk";

import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [reduxThunk];

export const store = createStore(
    rootReducer,
    {
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
    },
    composeEnhancers(applyMiddleware(...middlewares))
);