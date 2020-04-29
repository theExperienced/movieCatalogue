import ThemeActionTypes from "./theme.types";

const INITIAL_STATE = {
    currentTheme: 'dark'
};

export const themeReducer = (state = INITIAL_STATE, action) => {
    if (action.type === ThemeActionTypes.TOGGLE_THEME) {
        console.log('STATE INSIDE TOGLGE THEME', state)
        return { ...state, currentTheme: state.currentTheme === 'dark' ? 'light' : 'dark'}}

    return state;  
};