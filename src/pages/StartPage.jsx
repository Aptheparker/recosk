import {Link} from "react-router-dom";

import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={classes["start-page-container"]}>
      <h1>안녕하세요 리코스크 skt점입니다.</h1>
      <div className={classes["start-button-container"]}>
        <h1>주문시작하기</h1>
        <Link to="/choose" className={classes['start-button']}>
          시작하기
        </Link>
      </div>
    </div>
  );
};
export default StartPage;
