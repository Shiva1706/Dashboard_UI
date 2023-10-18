import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
} from 'react-icons/hi'
import {PiWallet} from 'react-icons/pi'
import {TbDiscount2} from 'react-icons/tb'
import {MdOutlineLiveHelp} from 'react-icons/md'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Product',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'income',
		label: 'Income',
		path: '/income',
		icon: <PiWallet />
	},
	{
		key: 'promote',
		label: 'Promote',
		path: '/promote',
		icon: <TbDiscount2 />
	},
	{
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <MdOutlineLiveHelp />
	}
]
