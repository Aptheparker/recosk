// hooks
import { Link } from "react-router-dom";
import { useContext } from "react";

// css
import classes from "./TemperaturePage.module.css";

//import
import { SelectedList } from "../context/SelectedList";

// images
import Button from "../assets/images/temperature_button.png";


const TemperaturePage = () => {
  const selectedTemperature = useContext(SelectedList);
  const temp = selectedTemperature.temperature;

  const setTemp = (e) => {
    if (e.target.id === temp) {
      selectedTemperature.setTemperature("");
    } else if (e.target.id === "hot") {
      selectedTemperature.setTemperature("hot");
    } else if (e.target.id === "cold") {
      selectedTemperature.setTemperature("cold");
    } else {
      selectedTemperature.setTemperature("none")
    }
  }

  const onClickButtonHandler = (e) => {
    if (temp === "") {
      e.preventDefault();
      alert("온도를 선택해주세요!");
    }
  }

  console.log(temp);

  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      <div className={classes["description"]}>음료의 온도를 선택해주세요</div>
      <div className={classes["temperature-container"]}>
        <div className={classes["buttons"]}>
          <button className={classes['temperature-btn']} onClick={setTemp}>
            <img src={Button} id="hot" alt="Button" />
          </button>
          <button className={classes['temperature-btn']} onClick={setTemp}>
            <img src={Button} id="none" alt="Button" />
          </button>
          <button className={classes['temperature-btn']} onClick={setTemp}>
            <img src={Button} id="cold" alt="Button" />
          </button>
          {/* <button className={classes['temperature-btn']} id="cold" onClick={setTemp}/>
          <button className={classes['temperature-btn']} id="none" onClick={setTemp}/> */}
        </div>
      </div>
      <Link to={"/option"}>
        <button className={classes["select-btn"]} onClick={onClickButtonHandler}>선택완료</button>
      </Link>
    </div>
  );
}

export default TemperaturePage;