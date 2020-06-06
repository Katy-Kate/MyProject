import { combineReducers } from 'redux';
import header from '../header/header.slice';
import news from '../news/news.slice';

const rootReducer = combineReducers({
	header: header,
	news: news
});

export default rootReducer;
