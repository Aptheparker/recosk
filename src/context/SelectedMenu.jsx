import { createContext, useState } from 'react';

export const SelectedMenu = createContext({
	menus: [],
	resultMenu: '',
	setMenus: () => {},
	setResultMenu: () => {},
});

export const SelectedMenuProvider = (props) => {
	const [menus, setMenus] = useState([]);
	const [resultMenu, setResultMenu] = useState('');

	return (
		<SelectedMenu.Provider value={{ menus: menus, setMenus: setMenus, resultMenu: resultMenu, setResultMenu: setResultMenu }}>
			{props.children}
		</SelectedMenu.Provider>
	);
};
