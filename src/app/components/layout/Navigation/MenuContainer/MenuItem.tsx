import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenuItem } from './menuItem.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={classNames({
				[styles.active]: asPath === item.link
			})}
		>
			<div>
				<MaterialIcon name={item.icon} />
				<span>
					<Link href={item.link}>{item.title}</Link>
				</span>
			</div>
		</li>
	)
}

export default MenuItem
