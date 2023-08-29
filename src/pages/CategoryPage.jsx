import { useState } from "react";
import { Link } from "react-router-dom";

// components
import CategoryBox from "../components/RecommendMenu/CategoryBox";

// styles
import classes from "./CategoryPage.module.css";

// images
import Coffee from "../assets/coffee.png";
import Tea from "../assets/tea.png";
import Juice from "../assets/juice.png";
import Icecream from "../assets/icecream.png";
import Cake from "../assets/cake.png";
import Bingsu from "../assets/bingsu.png";

const CategoryPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleMenuClick = (menu) => {
    if (selectedMenu === menu) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menu);
    }
  };

  const getMenuClassName = (menu) => {
    if (selectedMenu === menu) {
      return classes["selected-menu"]; // selected
    }
    return classes["menu-container"]; // not selected
  };

  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      <div className={classes["description"]}>원하시는 종류를 선택해주세요</div>
      <div className={classes["menus-container"]}>
        <CategoryBox
          className={getMenuClassName(Coffee)}
          onClick={() => handleMenuClick(Coffee)}
          imageSrc={Coffee}
          categoryName={"커피"}
        />
        <CategoryBox
          className={getMenuClassName(Tea)}
          onClick={() => handleMenuClick(Tea)}
          imageSrc={Tea}
          categoryName={"차"}
        />
        <CategoryBox
          className={getMenuClassName(Juice)}
          onClick={() => handleMenuClick(Juice)}
          imageSrc={Juice}
          categoryName={"주스"}
        />
        <CategoryBox
          className={getMenuClassName(Icecream)}
          onClick={() => handleMenuClick(Icecream)}
          imageSrc={Icecream}
          categoryName={"아이스크림"}
        />
        <CategoryBox
          className={getMenuClassName(Cake)}
          onClick={() => handleMenuClick(Cake)}
          imageSrc={Cake}
          categoryName={"케이크"}
        />
        <CategoryBox
          className={getMenuClassName(Bingsu)}
          onClick={() => handleMenuClick(Bingsu)}
          imageSrc={Bingsu}
          categoryName={"빙수"}
        />
      </div>
      <Link to={"/temperature"}>
        <button className={classes["select-btn"]}>선택완료</button>
      </Link>
    </div>
  );
};

export default CategoryPage;
