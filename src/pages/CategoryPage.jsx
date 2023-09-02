// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Header from "../components/Layout/Header";
import CategoryBox from "../components/RecommendMenu/CategoryBox";
import SelectButton from "../components/Common/SelectButton";

// styles
import classes from "./CategoryPage.module.css";

// images
import CategoryDescription from "../assets/descriptions/category_description.png";

import Coffee from "../assets/category/coffee.png";
import Tea from "../assets/category/tea.png";
import Juice from "../assets/category/juice.png";
import Icecream from "../assets/category/icecream.png";
import Cake from "../assets/category/cake.png";
import Bingsu from "../assets/category/bingsu.png";

import SeletedCoffee from "../assets/category/selected_coffee.png";
import SelectedTea from "../assets/category/selected_tea.png";
import SelectedJuice from "../assets/category/selected_juice.png";
import SelectedIcecream from "../assets/category/selected_icecream.png";
import SelectedCake from "../assets/category/selected_cake.png";
import SelectedBingsu from "../assets/category/selected_bingsu.png";

//import
import { useContext } from "react";
import { SelectedList } from "../context/SelectedList";

const CategoryPage = () => {
  const selectedList = useContext(SelectedList);
  const selectedCategory = selectedList.category;
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    if (selectedCategory === menu) {
      selectedList.setCategory("");
    } else {
      selectedList.setCategory(menu);
    }
  };

  console.log(selectedCategory);

  const onClickButtonHandler = (e) => {
    // select button clicked
    if (selectedCategory === "") {
      e.preventDefault();
      alert("종류를 선택해주세요!");
    } else if (
      selectedCategory === "coffee" ||
      selectedCategory === "tea" ||
      selectedCategory === "juice"
    ) {
      navigate("/temperature");
    } else {
      // navigate("/option");
      alert("Coming Soon!!!!!!!!!!!!!!!!!!!!!!!")
    }
  };

  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={CategoryDescription} alt="category-description" />
      <div className={classes["menus-container"]}>
        <CategoryBox
          className={classes["menu-container"]}
          onClick={() => handleMenuClick("coffee")}
          imageSrc={selectedCategory === "coffee" ? SeletedCoffee : Coffee}
        />
        <CategoryBox
          className={classes["menu-container"]}
          onClick={() => handleMenuClick("tea")}
          imageSrc={selectedCategory === "tea" ? SelectedTea : Tea}
        />
        <CategoryBox
          className={classes["menu-container"]}
          onClick={() => handleMenuClick("juice")}
          imageSrc={selectedCategory === "juice" ? SelectedJuice : Juice}
        />
        <CategoryBox
          className={classes["menu-container"]}
          onClick={() => handleMenuClick("icecream")}
          imageSrc={
            selectedCategory === "icecream" ? SelectedIcecream : Icecream
          }
        />
        <CategoryBox
          className={classes["menu-container"]}
          onClick={() => handleMenuClick("cake")}
          imageSrc={selectedCategory === "cake" ? SelectedCake : Cake}
        />
        <CategoryBox
          className={classes["menu-container"]}
          onClick={() => handleMenuClick("bingsu")}
          imageSrc={selectedCategory === "bingsu" ? SelectedBingsu : Bingsu}
        />
      </div>

      <SelectButton text={"선택완료"} onClick={onClickButtonHandler} />
    </div>
  );
};

export default CategoryPage;
