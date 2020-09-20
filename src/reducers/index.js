import { combineReducers } from 'redux';
import roomsReducer from './reducer-rooms';

const allReducers = combineReducers({
    rooms: roomsReducer
});

export default allReducers;