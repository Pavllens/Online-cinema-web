import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/splash.png'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={250}
					height={60}
					alt="Movie app"
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
