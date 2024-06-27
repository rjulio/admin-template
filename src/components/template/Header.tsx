import Title from '@/components/template/Title';
import ChangeThemeButton from '@/components/template/ChangeThemeButton';

import useAppContext from '@/data/hooks/useAppContext';

import UserAvatar from '@/components/UserAvatar';

interface HeaderProps {
	title: string;
	subtitle: string;
}

export default function Header(props: HeaderProps) {
	const { theme, changeTheme } = useAppContext();

	return (
		<div className={`flex`}>
			<Title title={ props.title } subtitle={ props.subtitle } />
			<div className={`flex flex-grow justify-end items-center`}>
				<ChangeThemeButton 
					theme={ theme } 
					changeTheme={ changeTheme } />
				<UserAvatar className="ml-3" />
			</div>
		</div>
	);
}