import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalOpen: false,
    modalProps: {
        type: 'default',
        title: '',
        description: '',
        videoId: '',
        date: ''
    }
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpen: (state, { payload }) => {
            state.modalOpen = true;
            state.modalProps = { ...initialState.modalProps, ...payload };
        },
        setClose: (state) => {
            state.modalProps = initialState.modalProps;
            state.modalOpen = false;
        }
    }
});

export const { setOpen, setClose } = modalSlice.actions;

export const modalSelector = (state) => state.modal;

export default modalSlice.reducer;
