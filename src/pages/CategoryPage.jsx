// import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import CategoryBox from '../components/RecommendMenu/CategoryBox';

// styles
import classes from './CategoryPage.module.css';

// images
import Coffee from '../assets/category/coffee.png';
import Tea from '../assets/category/tea.png';
import Juice from '../assets/category/juice.png';
import Icecream from '../assets/category/icecream.png';
import Cake from '../assets/category/cake.png';
import Bingsu from '../assets/category/bingsu.png';

//import
import { useContext } from 'react';
import { SelectedList } from '../context/SelectedList';

const CategoryPage = () => {

	const selectedList = useContext(SelectedList);
	const selectedCategory = selectedList.category;
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    if (selectedCategory === menu) {
      selectedList.setCategory(null);
    } else {
      selectedList.setCategory(menu);
    }
  };

  console.log(selectedCategory);
  // console.log(selectedList);

  const getMenuClassName = (menu) => {
    if (selectedCategory === menu) {
      return classes["selected-menu"]; // selected
    }
    return classes["menu-container"]; // not selected
  };

  const onClickButtonHandler = (e) => { // select button clicked
    if (selectedCategory === "") {
      e.preventDefault();
      alert("종류를 선택해주세요!");
    }
    else if(selectedCategory === "Coffee" || selectedCategory === "Tea" || selectedCategory === "Juice") {
      navigate("/temperature");
    }
    else {
      navigate("/option");
    }
  };

  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      <div className={classes["description"]}>원하시는 종류를 선택해주세요</div>
      <div className={classes["menus-container"]}>
        <CategoryBox
          className={getMenuClassName(Coffee)}
          onClick={() => handleMenuClick("Coffee")}
          imageSrc={Coffee}
          categoryName={"커피"}
        />
        <CategoryBox
          className={getMenuClassName(Tea)}
          onClick={() => handleMenuClick("Tea")}
          imageSrc={Tea}
          categoryName={"차"}
        />
        <CategoryBox
          className={getMenuClassName(Juice)}
          onClick={() => handleMenuClick("Juice")}
          imageSrc={Juice}
          categoryName={"주스"}
        />
        <CategoryBox
          className={getMenuClassName(Icecream)}
          onClick={() => handleMenuClick("Icecream")}
          imageSrc={Icecream}
          categoryName={"아이스크림"}
        />
        <CategoryBox
          className={getMenuClassName(Cake)}
          onClick={() => handleMenuClick("Cake")}
          imageSrc={Cake}
          categoryName={"케이크"}
        />
        <CategoryBox
          className={getMenuClassName(Bingsu)}
          onClick={() => handleMenuClick("Bingsu")}
          imageSrc={Bingsu}
          categoryName={"빙수"}
        />
      </div>

      <div>
        <button
          className={classes["select-btn"]}
          onClick={onClickButtonHandler}
        >
          선택완료
        </button>
      </div>
    </div>
  );

	const onClickLinkButtonHandler = (e) => {
		if (selectedContext.category === '') {
			e.preventDefault();
			alert('선택지를 고르세요!');
		}
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
				<button
					className={classes['select-btn']}
					onClick={onClickLinkButtonHandler}
				>
					선택완료
				</button>
			</Link>
		</div>
	);
};

export default CategoryPage;
