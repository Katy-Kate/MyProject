export enum MenuListItem {
	home = 'home',
	messages = 'messages',
	calendar = 'calendar',
	contacts = 'contacts'
}

export interface MenuList {
	id: number;
	name: string;
	icon: string;
}

export const menuList = [
	{ id: 1, name: MenuListItem.home, icon: 'home' },
	{ id: 2, name: MenuListItem.messages, icon: 'envelope' },
	{ id: 3, name: MenuListItem.calendar, icon: 'calendar alternate' },
	{ id: 4, name: MenuListItem.contacts, icon: 'phone' }
];
