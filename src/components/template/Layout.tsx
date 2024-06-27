import { useState } from 'react';
import SideMenu from '@/components/template/SideMenu';
import Header from '@/components/template/Header';
import Content from '@/components/template/Content';
import ForceAuth from '@/components/auth/ForceAuth';
import forceAuth from '@/functions/forceAuth';

import useAppContext from '@/data/hooks/useAppContext';

interface LayoutProps {
	title: string;
	subtitle: string;
	children?: any;
}

export default function Layout(props: LayoutProps) {
	const { theme, changeTheme } = useAppContext();

	// using forceAuth as component
	return (
		<ForceAuth>	
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
					</Content>
				</div>
			</div>
		</ForceAuth>
	);

	// using forceAuth as function
	// return forceAuth(
	// 	<div className={`
	// 		${theme} 
	// 		flex h-screen w-screen
	// 	`}>
	// 		<SideMenu />
	// 		<div className={`
	// 			flex flex-col bg-gray-300 dark:bg-gray-800
	// 			w-full p-7
	// 		`}>
	// 			<Header 
	// 				title={ props.title } 
	// 				subtitle={ props.subtitle } />
	// 			<Content>
	// 				{ props.children }
	// 			</Content>
	// 		</div>
	// 	</div>
	// );
}