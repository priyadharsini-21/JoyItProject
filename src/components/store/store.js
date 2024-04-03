// store.js
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// Create Redux store

const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools Extension in development mode
});

export default store;
