// import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

//import
import { useContext } from "react";
import { SelectedList } from "../context/SelectedList";

const CategoryPage = () => {
  const selectedList = useContext(SelectedList);
  // const [selectedMenu, setSelectedMenu] = useState("");
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
};

export default CategoryPage;
