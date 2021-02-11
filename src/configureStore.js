import { createStore } from 'redux';
import machineReducer from './store/machineReducer';

const store = createStore(machineReducer);

export default store;
