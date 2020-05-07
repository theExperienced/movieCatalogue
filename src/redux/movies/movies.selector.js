import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectRandomMovie = createSelector(
    [selectMovies],
    movies => movies.randomMovie
);

export const selectBestMovies = createSelector(
    [selectMovies],
    movies => {console.log('SELECTING BET MOVIES', movies.bestMovies); return movies.bestMovies}
);

export const selectMoviesByCriteria = createSelector(
    [selectMovies],
    movies => movies.moviesByCriteria
);

export const selectAllMoviesByGenre = createSelector(
    [selectMovies],
    movies => movies.moviesByGenre
);

export const selectMoviesByGenre = genreId => {
    return createSelector(
        [selectAllMoviesByGenre],
        moviesByGenre => moviesByGenre[genreId]
    );
}





