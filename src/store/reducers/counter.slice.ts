import { createSlice, createReducer, createAction, PayloadAction } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: 0 as number,
	reducers: {
		increment(state, action: PayloadAction<number>) {
			return state + action.payload;
		}
	}
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
