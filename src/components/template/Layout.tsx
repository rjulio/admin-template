import { useState } from 'react';
import SideMenu from '@/components/template/SideMenu';
import Header from '@/components/template/Header';
import Content from '@/components/template/Content';

import useAppContext from '@/data/hooks/useAppContext';

interface LayoutProps {
	title: string;
	subtitle: string;
	children?: any;
}

export default function Layout(props: LayoutProps) {
	const { theme, changeTheme } = useAppContext();

	return (
		<div className={`
			${theme} 
			flex h-screen w-screen
		`}>
			<SideMenu />
			<div className={`
				flex flex-col bg-gray-300 dark:bg-gray-800
				w-full p-7
			`}>
				<Header 
					title={ props.title } 
					subtitle={ props.subtitle } />
				<Content>
					{ props.children }
					<button onClick={ changeTheme }>teste change theme</button>
				</Content>
			</div>
		</div>
	);
}