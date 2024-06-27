import { createContext, useState, useEffect } from 'react';

type Theme = 'dark' | '';

interface AppContextProps {
	theme?: string,
	changeTheme: () => void;
}

const AppContext = createContext<AppContextProps>({
	theme: 'dark',
	changeTheme: null
});

export function AppProvider(props) {
	const [theme, setTheme] = useState('dark');

	function changeTheme() {
		const newTheme = theme === '' ? 'dark' : '';
		localStorage.setItem('theme', newTheme)
		setTheme(newTheme);
	}

	useEffect(() => {
		const theme = localStorage.getItem('theme')
		setTheme(theme);
	}, []);

	return (
		<AppContext.Provider value={
			{
				theme,
				changeTheme
			}
		}>
			{ props.children }
		</AppContext.Provider>
	);
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;