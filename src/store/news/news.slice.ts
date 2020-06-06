import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsState } from '../entities/news';

export const newsSlice = createSlice({
	name: 'news',
	initialState: [],
	reducers: {
		addNews(state: NewsState[], { payload }: PayloadAction<NewsState[]>): void {
			payload.forEach((item) => {
				state.push(item);
			});
		}
	}
});

export const { addNews } = newsSlice.actions;
export default newsSlice.reducer;
