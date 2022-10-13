import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';

const reducer = (state, action) => {
    return rootReducer(state, action);
};

const makeStore = (context) =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }),
        devTools: process.env.NODE_ENV !== 'production'
    });

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production'
});
