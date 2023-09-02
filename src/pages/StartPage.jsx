import { Link } from "react-router-dom";

import classes from "./StartPage.module.css";

// images
import StartButton from "../assets/images/start_button.png";
import Finger from "../assets/images/finger.png";

import Btn1 from '../assets/btn/btn1.png';
import Btn2 from '../assets/btn/btn2.png';
import Btn3 from '../assets/btn/btn3.png';
import Btn4 from '../assets/btn/btn4.png';

const StartPage = () => {
  return (
    <div className={classes["page-container"]}>
      <div className={classes["page-background"]}>
        <Link to="/choose" className={classes["start-btn"]}>
          {/* <img src={Bt} alt="start-button" /> */}
          <div className={classes["circle"]}></div>
        </Link>
        <img src={Finger} className={classes["finger-img"]} alt="" />
      </div>
    </div>
  );
};
export default StartPage;
