// import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import RootLayout from './pages/RootLayout.jsx';
import StartPage from './pages/StartPage.jsx';
import ChoosePage from './pages/ChoosePage.jsx';
import NormalPage from './pages/NormalPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import TemperaturePage from './pages/TemperaturePage.jsx';
import OptionPage from './pages/OptionPage.jsx';
import LoadingPage from './pages/LoadingPage.jsx';
import RootMenu from './pages/RootMenu.jsx';
import SelectedMenuPage from './pages/SelectedMenuPage.jsx';
import FinishPage from './pages/FinishPage.jsx';
import MorePage from './pages/MorePage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import NoPage from './pages/NoPage.jsx';

// styles
import './index.css';

//context

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <StartPage />,
			},
			{
				path: '/choose',
				element: <ChoosePage />,
			},
			{
				path: '/normal',
				element: <NormalPage />,
			},
			{
				path: '/category',
				element: <CategoryPage />,
			},
			{
				path: '/temperature',
				element: <TemperaturePage />,
			},
			{
				path: '/option',
				element: <OptionPage />,
			},
			{
				path: '/menu',
				element: <RootMenu />,
				children: [
					{
						path: 'loading',
						element: <LoadingPage />,
					},
					{
						path: 'notfound',
						element: <NoPage />,
					},
					{
						path: 'selected-menu',
						element: <SelectedMenuPage />,
					},
					{
						path: 'more',
						element: <MorePage />,
					},
					{
						path: 'result',
						element: <ResultPage />,
					}
				],
			},
			{
				path: '/finish',
				element: <FinishPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
