// src/reducers/index.js
import { combineReducers } from 'redux';
import propertyReducer from './propertyReducer';

const rootReducer = combineReducers({
  property: propertyReducer,
  // Add other reducers here
});

export default rootReducer;
