import { Outlet } from 'react-router-dom';
import { SelectedMenuProvider } from '../context/SelectedMenu';

const RootMenu = () => {
	return (
		<SelectedMenuProvider>
			<Outlet />
		</SelectedMenuProvider>
	);
};

export default RootMenu;
