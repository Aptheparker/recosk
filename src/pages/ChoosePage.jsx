import {Link} from "react-router-dom";

import classes from "./ChoosePage.module.css";

const ChoosePage = () => {
  return (
    <div className={classes["choose-page-container"]}>
      <h1>주문 방식을 선택해주세요</h1>
      <div className={classes["choose-button-container"]}>
        <Link to="/normal" className={classes['choose-button']}>
          일반 주문
        </Link>
        <Link to="/category" className={classes['choose-button']}>
          추천 주문
        </Link>
      </div>
    </div>
  );
};
export default ChoosePage;
