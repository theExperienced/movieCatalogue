import { createSelector } from 'reselect';

export const selectForm = state => state.form.CustomForm;

export const selectFormValues = createSelector(
    [selectForm],
    form => form.values
);

export const selectSubmitSucceeded = createSelector(
    [selectForm],
    form => form.submitSucceeded
);

export const selectResubmited = createSelector(
    [selectForm],
    form => form.resubmitted
);




