// styles
import classes from "./RecommendPage.module.css";

const RecommendPage = () => {
  return (
    <div className={classes["recommend-page-container"]}>
      <div className={classes["recommend-title-container"]}>
        <div className={classes["recommend-title__text"]}>Recosk</div>
      </div>
      <h1>원하시는 종류를 선택해주세요</h1>
      <button>선택완료</button>
    </div>
  );
};

export default RecommendPage;
