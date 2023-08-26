import { useState } from "react";

// styles
import classes from "./RecommendPage.module.css";

// images
import Coffee from "../assets/coffee.png";
import Tea from "../assets/tea.png";
import Juice from "../assets/juice.png";
import Icecream from "../assets/icecream.png";
import Cake from "../assets/cake.png";
import Bingsu from "../assets/bingsu.png";

const RecommendPage = () => {
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
      return classes["selected-menu"];
    }
    return classes["image-container"];
  };

  return (
    <div className={classes["recommend-page-container"]}>
      <div className={classes["recommend-title-container"]}>
        <div className={classes["recommend-title__text"]}>Recosk</div>
      </div>
      <h1>원하시는 종류를 선택해주세요</h1>
      <div className={classes["menus-container"]}>
        <div
          className={getMenuClassName(Coffee)}
          onClick={() => handleMenuClick(Coffee)}
        >
          <img src={Coffee} alt="" />
          <p className={classes["menu-name"]}>커피</p>
        </div>
        <div
          className={getMenuClassName(Tea)}
          onClick={() => handleMenuClick(Tea)}
        >
          <img src={Tea} alt="" />
          <div className={classes["menu-name"]}>차</div>
        </div>
        <div
          className={getMenuClassName(Juice)}
          onClick={() => handleMenuClick(Juice)}
        >
          <img src={Juice} alt="" />
          <div className={classes["menu-name"]}>주스</div>
        </div>
        <div
          className={getMenuClassName(Icecream)}
          onClick={() => handleMenuClick(Icecream)}
        >
          <img src={Icecream} alt="" />
          <div className={classes["menu-name"]}>아이스크림</div>
        </div>
        <div
          className={getMenuClassName(Cake)}
          onClick={() => handleMenuClick(Cake)}
        >
          <img src={Cake} alt="" />
          <div className={classes["menu-name"]}>케이크</div>
        </div>
        <div
          className={getMenuClassName(Bingsu)}
          onClick={() => handleMenuClick(Bingsu)}
        >
          <img src={Bingsu} alt="" />
          <div className={classes["menu-name"]}>빙수</div>
        </div>
      </div>
      <button className={classes["select-btn"]}>선택완료</button>
    </div>
  );
};

export default RecommendPage;
