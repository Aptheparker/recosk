import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={classes["startpage-container"]}>
      <h1>안녕하세요 리코스크 skt점입니다.</h1>
      <div className={classes["startbutton-box"]}>
        <h1>주문시작하기</h1>
        <button>
          <h1>주문</h1>
        </button>
      </div>
    </div>
  );
};
export default StartPage;
