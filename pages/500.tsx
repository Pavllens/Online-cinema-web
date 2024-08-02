import Heading from '@/components/ui/heading/Heading'
import { Meta } from '@/utils/meta'

export default function Error500() {
	return (
		<Meta title='Страница не найдена'>
			<Heading title='500 - Произошла ошибка на стороне сервера' />
		</Meta>
	)
}
