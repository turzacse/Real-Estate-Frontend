// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../Redux/Features/propertiesSlice';

const store = configureStore({
    reducer: {
        properties: propertiesReducer
    }
});

export default store;
