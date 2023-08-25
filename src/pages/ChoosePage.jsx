import {Link} from "react-router-dom";

import classes from "./ChoosePage.module.css";

const ChoosePage = () => {
  return (
    <div className={classes["choose-page-container"]}>
      <h1>주문 방식을 선택해주세요</h1>
      <div className={classes["choose-button-container"]}>
        <Link to="/order" className={classes['choose-button']}>
          포장
        </Link>
        <Link to="/order" className={classes['choose-button']}>
          매장
        </Link>
      </div>
    </div>
  );
};
export default ChoosePage;
