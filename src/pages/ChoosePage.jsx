import {Link} from "react-router-dom";

import classes from "./ChoosePage.module.css";

// images
import NormalButton from "../assets/images/normal_button.png";
import Recommend from "../assets/images/recommend_button.png";

const ChoosePage = () => {
  return (
    <div className={classes["page-container"]}>
      <div className={classes["page-background"]}>
      <div className={classes["choose-button-container"]}>
        <Link to="/normal" className={classes['choose-button']}>
          <img src={NormalButton} alt="normal-button" />
        </Link>
        <Link to="/category" className={classes['choose-button']}>
          <img src={Recommend} alt="recommend-button" />
        </Link>
      </div>
    </div>
    </div>
  );
};
export default ChoosePage;
