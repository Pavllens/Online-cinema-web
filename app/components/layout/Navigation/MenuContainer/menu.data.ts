import { IMenu } from './menu.types'

const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Начальное',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Жанры',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Новые фильмы',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Популярные сейчас',
		},
	],
}

const userMenu: IMenu = {
	title: 'Общее',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
