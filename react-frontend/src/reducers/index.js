import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer.js';

export default combineReducers({
    Todos: TodoReducer

});