import { createSelector } from 'reselect';

export const selectGenres = state => state.genres;

export const selectGenreList = createSelector(
    [selectGenres],
    genres => genres.genreList
);




