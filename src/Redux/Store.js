// src/store.js
import { createStore } from 'redux';
import rootReducer from './Reducer';
// import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
