import ModalActionTypes from "./modal.types";

export const openModal = movie => ({
    type: ModalActionTypes.OPEN_MODAL,
    payload: movie
});

export const closeModal = () => ({
    type: ModalActionTypes.CLOSE_MODAL
});