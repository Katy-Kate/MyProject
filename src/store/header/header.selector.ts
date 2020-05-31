import { StoreState } from '../entities/coreStore';

export const getActiveMenu = (state: StoreState): number => state.header.activeMenu;
export const getLeftPanelState = (state: StoreState): boolean => state.header.isOpenLeftPanel;
