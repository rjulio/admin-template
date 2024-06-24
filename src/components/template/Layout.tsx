import SideMenu from '@/components/template/SideMenu';
import Header from '@/components/template/Header';
import Content from '@/components/template/Content';

interface LayoutProps {
	title: string;
	subtitle: string;
	children?: any;
}

export default function Layout(props: LayoutProps) {
	return (
		<div className={`flex h-screen w-screen`}>
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
	);
}