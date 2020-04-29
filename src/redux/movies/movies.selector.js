import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectRandomMovie = createSelector(
    [selectMovies],
    movies => movies.randomMovie
);

export const selectBestMovies = createSelector(
    [selectMovies],
    movies => movies.bestMovies
);

export const selectMoviesByCriteria = createSelector(
    [selectMovies],
    movies => movies.moviesByCriteria
);

export const selectMoviesByGenre = createSelector(
    [selectMovies],
    movies => movies.moviesByGenre
);





