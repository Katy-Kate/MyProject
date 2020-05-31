export interface HeaderState {
	activeMenu: number;
	isOpenLeftPanel: boolean;
}

export interface WithHeaderState {
	header: HeaderState;
}
