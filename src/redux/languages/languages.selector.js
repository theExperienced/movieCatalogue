import { createSelector } from 'reselect';

export const selectLanguages = state => state.languages;

export const selectLanguageList = createSelector(
    [selectLanguages],
    languages => languages.languageList
);
