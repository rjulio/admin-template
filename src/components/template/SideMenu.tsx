import Logo from '@/components/template/Logo';
import SideMenuItem from '@/components/template/SideMenuItem';
import { IconHome, IconSettings, IconBell, IconLogout } from '@/components/icons';

interface SideMenuProps {
}

export default function SideMenu(props: SideMenuProps) {
	return (
		<aside className={`
			flex flex-col
			bg-gray-200 text-gray-900
			dark:bg-gray-900
		`}>
			<div className={`
				h-20 w-20 
				bg-gradient-to-r from-indigo-500 to-purple-800
				flex flex-col items-center justify-center
			`}>
				<Logo />
			</div>
			<ul className="flex-grow">
				<SideMenuItem
					icon={ IconHome }
					text="Home"
					url="/" />
				<SideMenuItem
					icon={ IconSettings }
					text="Settings"
					url="/settings" />
				<SideMenuItem
					icon={ IconBell }
					text="Notificações"
					url="/notifications" />
			</ul>
			<ul>
				<SideMenuItem 
					icon={ IconLogout }
					text="Sair"
					onClick={ () =>  console.info('clicou') }
					className={`
						text-red-600 hover:bg-red-400 hover:text-white
						dark:text-red-400 dark:hover:text-white
					`} />
			</ul>
		</aside>
	);
}