import { createSelector } from 'reselect';

export const selectModal = state => state.modal;

export const selectIsActive = createSelector(
    [selectModal],
    modal => modal.isActive
);

export const selectMovie = createSelector(
    [selectModal],
    modal => modal.movie
);




