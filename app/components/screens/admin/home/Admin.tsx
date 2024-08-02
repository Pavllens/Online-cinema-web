import { FC } from 'react'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta'

import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title="Панель Админа">
			<AdminNavigation />
			<Heading title="Вся статистика" />

			<Statistics />
		</Meta>
	)
}

export default Admin
