import { combineReducers } from 'redux';
import counter from './counter.slice';
import header from '../header/header.slice';

const rootReducer = combineReducers({
	counter: counter,
	header: header
});

export default rootReducer;
