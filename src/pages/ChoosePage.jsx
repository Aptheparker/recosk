import { Link } from "react-router-dom";

import classes from "./ChoosePage.module.css";

// images
import NormalButton from "../assets/images/normal_button.png";
import HoveredNormalButton from "../assets/images/hovered_normal_button.png";
import Recommend from "../assets/images/recommend_button.png";

const ChoosePage = () => {
  const ClickHandler = () => {
    alert("Coming Soon!!!!!!!!");
  };

  return (
    <div className={classes["page-container"]}>
      <div className={classes["page-background"]}>
        <div className={classes["choose-button-container"]}>
          <div to="/normal" className={classes["choose-button"]} onClick={ClickHandler}>
            <img
              src={NormalButton}
              alt="normal-button"
              onMouseOver={(e) => (e.currentTarget.src = HoveredNormalButton)}
            />
          </div>
          <Link to="/category" className={classes["choose-button"]}>
            <img src={Recommend} alt="recommend-button" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ChoosePage;
