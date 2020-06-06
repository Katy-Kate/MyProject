import { NewsState } from '../entities/news';
import { StoreState } from '../entities/coreStore';

export const getNews = (state: StoreState): NewsState[] => state.news;
