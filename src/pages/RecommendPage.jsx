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
  return (
    <div className={classes["recommend-page-container"]}>
      <div className={classes["recommend-title-container"]}>
        <div className={classes["recommend-title__text"]}>Recosk</div>
      </div>
      <h1>원하시는 종류를 선택해주세요</h1>
      <div className={classes["menus-container"]}>
        <div className={classes['image-container']}>
          <img src={Coffee} alt="" />
          <p className={classes['menu-name']}>커피</p>
        </div>
        <div className={classes['image-container']}>
          <img src={Tea} alt="" />
          <div className={classes['menu-name']}>차</div>
        </div>
        <div className={classes['image-container']}>
          <img src={Juice} alt="" />
          <div className={classes['menu-name']}>주스</div>
        </div>
        <div className={classes['image-container']}>
          <img src={Icecream} alt="" />
          <div className={classes['menu-name']}>아이스크림</div>
        </div>
        <div className={classes['image-container']}>
          <img src={Cake} alt="" />
          <div className={classes['menu-name']}>케이크</div>
        </div>
        <div className={classes['image-container']}>
          <img src={Bingsu} alt="" />
          <div className={classes['menu-name']}>빙수</div>
        </div>
      </div>
      <button className={classes['select-btn']}>선택완료</button>
    </div>
  );
};

export default RecommendPage;
