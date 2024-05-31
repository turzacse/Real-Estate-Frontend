// src/store/propertiesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import demoProperties from '../../demoData';

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: demoProperties,
    reducers: {}
});

export const selectAllProperties = (state) => state.properties;
export default propertiesSlice.reducer;
