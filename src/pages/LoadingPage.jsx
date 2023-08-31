// classes
import classes from "./LoadingPage.module.css";

// images
import Button from "../assets/temperature_button.png";

const LoadingPage = () => {
  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      {/* temp image */}
      <img src={Button} alt="" />
      <div className={classes["description"]}>
        추천드릴 메뉴를 찾고 있습니다.
        <br />
        잠시만 기다려주세요.
      </div>
    </div>
  );
};

export default LoadingPage;
