import Link from 'next/link';

interface SideMenuItemProps {
	url?: string;
	text: string;
	icon: any;
	onClick: (e: any) => void;
	className?: string;
}

export default function SideMenuItem(props: SideMenuItemProps) {
	return (
		<li className={`
			hover:bg-gray-100 text-gray-600 
			dark:text-gray-200 dark:hover:bg-gray-800
			${props.className}
		`}>
			<Link 
				href={ props.url ?? '' } 
				className={`
					flex flex-col justify-center items-center
					w-20 h-20
				`}
				onClick={ props.onClick }>
				{ props.icon }
				<span className={`text-xs font-light`}>
					{ props.text }
				</span>
			</Link>
		</li>
	);
}