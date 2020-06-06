import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HeaderState } from '../entities/header';
import { menuList } from '../../data/menu';

export const headerSlice = createSlice({
	name: 'header',
	initialState: {
		activeMenu: menuList[0].id,
		isOpenLeftPanel: false
	},
	reducers: {
		toogleTopNavigation(state: HeaderState, action: PayloadAction<number>): void {
			state.activeMenu = action.payload;
		},
		toggleLeftPanel(state: HeaderState, action: PayloadAction<boolean>): void {
			state.isOpenLeftPanel = action.payload;
		}
	}
});

export const { toogleTopNavigation, toggleLeftPanel } = headerSlice.actions;
export default headerSlice.reducer;
