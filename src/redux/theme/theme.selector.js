import { createSelector } from 'reselect';

const selectThemes = state => state.themes;

export const selectCurrentTheme = createSelector(
    [selectThemes],
    themes => themes.currentTheme
);