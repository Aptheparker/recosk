// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// components
import CategoryBox from '../components/RecommendMenu/CategoryBox';

// styles
import classes from './CategoryPage.module.css';

// images
import Coffee from '../assets/coffee.png';
import Tea from '../assets/tea.png';
import Juice from '../assets/juice.png';
import Icecream from '../assets/icecream.png';
import Cake from '../assets/cake.png';
import Bingsu from '../assets/bingsu.png';

//import
import { useContext } from 'react';
import { SelectedList } from '../context/SelectedList';

const CategoryPage = () => {
	const selectedList = useContext(SelectedList);
	// const [selectedMenu, setSelectedMenu] = useState("");
	const selectedCategory = selectedList.category;

	const setCategory = (data) => {
		selectedList.setCategory(data);
	};

	const handleMenuClick = (menu) => {
		if (selectedCategory === menu) {
			setCategory(null);
			// setSelectedMenu(null);
		} else {
			setCategory(menu);
			// setSelectedMenu(menu);
		}
	};

	console.log(selectedCategory);
	const getMenuClassName = (menu) => {
		if (selectedCategory === menu) {
			return classes['selected-menu']; // selected
		}
		return classes['menu-container']; // not selected
	};

	return (
		<div className={classes['page-container']}>
			<div className={classes['title']}>Recosk</div>
			<div className={classes['description']}>원하시는 종류를 선택해주세요</div>
			<div className={classes['menus-container']}>
				<CategoryBox
					className={getMenuClassName(Coffee)}
					onClick={() => handleMenuClick('coffee')}
					imageSrc={Coffee}
					categoryName={'커피'}
				/>
				<CategoryBox
					className={getMenuClassName(Tea)}
					onClick={() => handleMenuClick('tea')}
					imageSrc={Tea}
					categoryName={'차'}
				/>
				<CategoryBox
					className={getMenuClassName(Juice)}
					onClick={() => handleMenuClick('juice')}
					imageSrc={Juice}
					categoryName={'주스'}
				/>
				<CategoryBox
					className={getMenuClassName(Icecream)}
					onClick={() => handleMenuClick('icecream')}
					imageSrc={Icecream}
					categoryName={'아이스크림'}
				/>
				<CategoryBox
					className={getMenuClassName(Cake)}
					onClick={() => handleMenuClick('cake')}
					imageSrc={Cake}
					categoryName={'케이크'}
				/>
				<CategoryBox
					className={getMenuClassName(Bingsu)}
					onClick={() => handleMenuClick('bingsu')}
					imageSrc={Bingsu}
					categoryName={'빙수'}
				/>
			</div>
			<Link to={'/temperature'}>
				<button className={classes['select-btn']}>선택완료</button>
			</Link>
		</div>
	);
};

export default CategoryPage;
