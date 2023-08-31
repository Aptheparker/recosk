// css
import classes from "./FinishPage.module.css";

// components
import Header from "../components/Layout/Header";

// images
import FinishDescription from "../assets/descriptions/finish_description.png";
import Finish from "../assets/images/finish.svg";

const FinishPage = () => {
  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={FinishDescription} alt="finish-description" />
      <img src={Finish} className={classes["finish-img"]} alt="finish" />
    </div>
  );
};

export default FinishPage;
