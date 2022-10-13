import { combineReducers } from '@reduxjs/toolkit';

import modalReducer from 'store/slices/modalSlice';

const rootReducer = combineReducers({
    modal: modalReducer
});

export default rootReducer;
