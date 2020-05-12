import FormActionTypes from "./form.types";

export const updateFormValues = formValues => ({
    type: FormActionTypes.UPDATE_FORM_VALUES,
    payload: formValues
});

export const resubmit = (bool) => ({
    type: FormActionTypes.RESUBMIT,
    payload: bool
});