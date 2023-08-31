// components
import Header from "../components/Layout/Header";
import SelectedDescription from "../assets/descriptions/selected_description.png";
import SelectButton from "../components/Common/SelectButton";

// css
import classes from "./SelectedMenuPage.module.css";

const SelectedMenuPage = () => {
  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={SelectedDescription} alt="selected-description" />
      <div className={classes["menu-container"]}></div>
			<div className={classes['buttons']}>
				<SelectButton />
				<SelectButton />
			</div>
    </div>
  );
};

export default SelectedMenuPage;
