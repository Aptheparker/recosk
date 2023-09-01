// classes
import classes from './LoadingPage.module.css';

// images
import Button from '../assets/images/temperature_button.png';

//firebase
import { db } from '../services/firebase.config';
import { collection, query, where, getDocs, or, and } from 'firebase/firestore';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//context
import { SelectedList } from '../context/SelectedList';
import { SelectedMenu } from '../context/SelectedMenu';

// components
import Header from '../components/Layout/Header';

const LoadingPage = () => {
	const [menus, setMenus] = useState([]);
	const [allMenus, setAllMenus] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	//context api
	const selectionContext = useContext(SelectedList);
	const category = selectionContext.category;
	const temp = selectionContext.temperature;
	const ingredients = selectionContext.ingredients;
	const taste = selectionContext.taste;
	const fruits = selectionContext.fruits;

	//context
	const selectedMenuContext = useContext(SelectedMenu);
	const selectedMenu = selectedMenuContext.menus;

	const setSelectedMenu = useCallback(
		(data) => {
			selectedMenuContext.setMenus(data);
		},
		[selectedMenuContext]
	);

	//firebase
	const dataRef = collection(db, 'menus');

	//router
	const navigate = useNavigate();

	useEffect(() => {
		console.log(category);
		console.log(ingredients);
		console.log(fruits);
		console.log(taste);
		console.log(temp);
		const queryData = query(
			dataRef,
			and(
				where('category', '==', category),
				where('temperature', '==', temp),
				or(
					where('ingredients', 'array-contains-any', ingredients),
					where('fruits', 'array-contains-any', fruits),
					where('taste', 'array-contains-any', taste)
				)
			)
		);

		const selectAllQuery = query(
			dataRef,
			and(where('category', '==', category), where('temperature', '==', temp))
		);

		// const getAllMenus = async () => {
		// 	const snapshot = await getDocs(selectAllQuery);
		// 	const data = snapshot.docs.map((doc) => doc.data());
		// 	return data;
		// };

		const getMenus = async () => {
			const snapshot = await getDocs(queryData);
			const selectedData = snapshot.docs.map((doc) => doc.data());
			const allSnapshot = await getDocs(selectAllQuery);
			const allData = allSnapshot.docs.map((doc) => doc.data());
			return { selectedData, allData };
		};

		if (menus.length === 0 && allMenus.length === 0) {
			getMenus().then((data) => {
				setAllMenus(data.allData);
				setMenus(data.selectedData);
			});
		} else if (menus.length !== 0 || allMenus.length !== 0) {
			console.log(1);
			const menusName = menus.map((item) => {
				return item.name;
			});
			console.log(menusName);
			const filtering = allMenus.filter((item) => {
				return !menusName.includes(item.name);
			});

			setSelectedMenu(filtering);
		}
	}, [
		menus,
		allMenus,
		category,
		dataRef,
		setSelectedMenu,
		temp,
		taste,
		fruits,
		ingredients,
	]);

	if (selectedMenu.length !== 0) {
		navigate('../selected-menu');
	}

	return (
		<div className={classes['page-container']}>
			<Header />
			{/* temp image */}
			<img src={Button} alt='' />
			<div className={classes['description']}>
				추천드릴 메뉴를 찾고 있습니다.
				<br />
				잠시만 기다려주세요.
			</div>
		</div>
	);
};

export default LoadingPage;
