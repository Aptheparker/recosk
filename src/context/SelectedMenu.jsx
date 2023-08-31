import { createContext, useState } from 'react';

export const SelectedMenu = createContext({
	menus: [],
	setMenus: () => {},
});

export const SelectedMenuProvider = (props) => {
	const [menus, setMenus] = useState([]);

	return (
		<SelectedMenu.Provider value={{ menus: menus, setMenus: setMenus }}>
			{props.children}
		</SelectedMenu.Provider>
	);
};
