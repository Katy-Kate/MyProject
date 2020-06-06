export enum MenuListItem {
	news = 'news',
	messages = 'messages',
	calendar = 'calendar',
	contacts = 'contacts'
}

export enum MenuListIcons {
	news = 'home',
	messages = 'envelope',
	calendar = 'calendar alternate',
	contacts = 'phone'
}

export interface MenuList {
	id: number;
	name: string;
	icon: string;
}

export const menuList = [
	{ id: 1, name: MenuListItem.news, icon: MenuListIcons.news },
	{ id: 2, name: MenuListItem.messages, icon: MenuListIcons.messages },
	{ id: 3, name: MenuListItem.calendar, icon: MenuListIcons.calendar },
	{ id: 4, name: MenuListItem.contacts, icon: MenuListIcons.contacts }
];
