import { apiService } from '../../services/API.service';
import { NEWS_URL } from '../../data/user';
import { Dispatch } from 'redux';
import { addNews } from './news.slice';

export const initNews = async (dispatch: Dispatch) => {
	const data = await apiService.fetchNews(NEWS_URL);
	dispatch(addNews(Object.values(data)));
};
