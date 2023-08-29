// hooks
import { Link } from "react-router-dom";

// css
import classes from "./TemperaturePage.module.css";

const TemperaturePage = () => {

  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      <div className={classes["description"]}>음료의 온도를 선택해주세요</div>
      <div className={classes["temperature-container"]}>
        <div className={classes["buttons"]}>
          <div className={classes['temperature-btn']}/>
          <div className={classes['temperature-btn']}/>
          <div className={classes['temperature-btn']}/>
        </div>
      </div>
      <Link to={"/option"}>
        <button className={classes["select-btn"]}>선택완료</button>
      </Link>
    </div>
  );
}

export default TemperaturePage;