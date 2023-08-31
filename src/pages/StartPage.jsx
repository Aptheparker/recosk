import { Link } from "react-router-dom";

import classes from "./StartPage.module.css";

// images
import StartButton from "../assets/images/start_button.png";
import Finger from "../assets/images/finger.png";

const StartPage = () => {
  return (
    <div className={classes["page-container"]}>
      <div className={classes["page-background"]}>
        <Link to="/choose" className={classes["start-btn"]}>
          <img src={StartButton} alt="start-button" />
        </Link>
        <img src={Finger} className={classes["finger-img"]} alt="" />
      </div>
    </div>
  );
};
export default StartPage;
