import SideMenuItem from '@/components/template/SideMenuItem';
import { IconHome, IconSettings, IconBell } from '@/components/icons';

interface SideMenuProps {
}

export default function SideMenu(props: SideMenuProps) {
	return (
		<aside>
			<ul>
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
					url="/novidades" />
			</ul>
		</aside>
	);
}