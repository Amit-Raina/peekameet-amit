import userReducer from './userReducer';
import notesReducer from './notesReducer';

import {combineReducers} from 'redux';

const rootReducer = {
    user:userReducer,
    notes:notesReducer
} 

export default combineReducers(rootReducer);