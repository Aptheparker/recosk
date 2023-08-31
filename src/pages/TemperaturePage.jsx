// hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// css
import classes from "./TemperaturePage.module.css";

// context
import { SelectedList } from "../context/SelectedList";

// components
import Header from "../components/Layout/Header";
import SelectButton from "../components/Common/SelectButton";

// images
import Button from "../assets/images/temperature_button.png";
import TemperatureDescription from "../assets/descriptions/temperature_description.png";

const TemperaturePage = () => {
  const selectedTemperature = useContext(SelectedList);
  const temp = selectedTemperature.temperature;
  const navigate = useNavigate();

  const setTemp = (e) => {
    if (e.target.id === temp) {
      selectedTemperature.setTemperature("");
    } else if (e.target.id === "hot") {
      selectedTemperature.setTemperature("hot");
    } else if (e.target.id === "cold") {
      selectedTemperature.setTemperature("cold");
    } else {
      selectedTemperature.setTemperature("none");
    }
  };

  const onClickButtonHandler = (e) => {
    if (temp === "") {
      e.preventDefault();
      alert("온도를 선택해주세요!");
    } else {
      navigate("/option");
    }
  };

  console.log(temp);

  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={TemperatureDescription} alt="temperature-description" />
      <div className={classes["temperature-container"]}>
        <div className={classes["buttons"]}>
          <button className={classes["temperature-btn"]} onClick={setTemp}>
            <img src={Button} id="hot" alt="Button" />
          </button>
          <button className={classes["temperature-btn"]} onClick={setTemp}>
            <img src={Button} id="none" alt="Button" />
          </button>
          <button className={classes["temperature-btn"]} onClick={setTemp}>
            <img src={Button} id="cold" alt="Button" />
          </button>
        </div>
      </div>
      <SelectButton onClick={onClickButtonHandler} />
    </div>
  );
};

export default TemperaturePage;
