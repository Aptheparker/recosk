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
      <div className={classes["choices"]}>
        <div className={classes["choice"]}>
          <div className={classes["question"]}>
            추천 메뉴가 
						<br />마음에 드시나요?
          </div>
          <SelectButton text={"장바구니 담기"} />
        </div>
        <div className={classes["choice"]}>
          <div className={classes["question"]}>자세한 
					<br />추천을 원하시나요?</div>
          <SelectButton text={"추천 더 받기"} />
        </div>
      </div>
    </div>
  );
};

export default SelectedMenuPage;
