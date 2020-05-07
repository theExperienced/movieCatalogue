import ModalActionTypes from "./modal.types";

export const modalReducer = (state = {}, action) => {
  console.log('INSIDE MODAL ACTION', action)
    switch (action.type) {
      case ModalActionTypes.OPEN_MODAL:
        return { isActive: true, movie: action.payload };
      case ModalActionTypes.CLOSE_MODAL:
        return { isActive: false, movie: null };
      default:
        return state;
    }
};