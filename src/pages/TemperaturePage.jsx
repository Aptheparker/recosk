import classes from "./TemperaturePage.module.css";

const TemperaturePage = () => {

  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      <div className={classes["description"]}>음료의 온도를 선택해주세요</div>
      <div className={classes["temperature-container"]}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <button>4</button>
    </div>
  );
}

export default TemperaturePage;