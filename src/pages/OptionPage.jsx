import { SelectedList } from "../context/SelectedList";

//hook
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// classes
import classes from "./OptionPage.module.css";

// components
import Header from "../components/Layout/Header";
import SelectButton from "../components/Common/SelectButton";

// images
import OptionDescription from "../assets/descriptions/option_description.png";

import Chocolate from "../assets/ingredients/chocolate.png";
import Caffein from "../assets/ingredients/caffeine.png";
import Milk from "../assets/ingredients/milk.png";

import Peach from "../assets/fruits/peach.png";
import Orange from "../assets/fruits/orange.png";
import Apple from "../assets/fruits/apple.png";
import Strawberry from "../assets/fruits/strawberry.png";
import Kiwi from "../assets/fruits/kiwi.png";
import Banana from "../assets/fruits/banana.png";
import Watermelon from "../assets/fruits/watermelon.png";

import Sweet from "../assets/taste/sweet.png";
import Bitter from "../assets/taste/bitter.png";
import Sour from "../assets/taste/sour.png";
import Nuts from "../assets/taste/nuts.png";

import SelectedChocolate from "../assets/ingredients/selected_chocolate.png";
import SelectedCaffeine from "../assets/ingredients/selected_caffeine.png";
import SelectedMilk from "../assets/ingredients/selected_milk.png";

import SelectedPeach from "../assets/fruits/selected_peach.png";
import SelectedOrange from "../assets/fruits/selected_orange.png";
import SelectedApple from "../assets/fruits/selected_apple.png";
import SelectedStrawberry from "../assets/fruits/selected_strawberry.png";
import SelectedKiwi from "../assets/fruits/selected_kiwi.png";
import SelectedBanana from "../assets/fruits/selected_banana.png";
import SelectedWatermelon from "../assets/fruits/selected_watermelon.png";

import SelectedSweet from "../assets/taste/selected_sweet.png";
import SelectedBitter from "../assets/taste/selected_bitter.png";
import SelectedSour from "../assets/taste/selected_sour.png";
import SelectedNuts from "../assets/taste/selected_nuts.png";

const OptionPage = () => {
  const selectionContext = useContext(SelectedList);
  const navigate = useNavigate();

  const ingredients = selectionContext.ingredients;
  const fruits = selectionContext.fruits;
  const taste = selectionContext.taste;

  const setFruits = (data) => {
    if (fruits.includes(data)) {
      selectionContext.setFruits({ type: "DELETE", payload: data });
    } else {
      selectionContext.setFruits({ type: "ADD", payload: data });
    }
  };

  const setIngredients = (data) => {
    if (ingredients.includes(data)) {
      selectionContext.setIngredients({ type: "DELETE", payload: data });
    } else {
      selectionContext.setIngredients({ type: "ADD", payload: data });
    }
  };

  const setTaste = (data) => {
    if (taste.includes(data)) {
      selectionContext.setTaste({ type: "DELETE", payload: data });
    } else {
      selectionContext.setTaste({ type: "ADD", payload: data });
    }
  };

  const onClickIngreButtonHandler = (e) => {
    setIngredients(e.target.id);
  };

  const onClickFruitsButtonHandler = (e) => {
    setFruits(e.target.id);
  };

  const onClickTasteButtonHandler = (e) => {
    setTaste(e.target.id);
  };

  console.log(ingredients);
  console.log(taste);
  console.log(fruits);

  const onClickButtonHandler = (e) => {
    e.preventDefault();
    navigate("/menu/loading");
  };

  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={OptionDescription} alt="option-description" />
      <div className={classes["ingredients-header"]}>
        <div>재료</div>
        <div>
          <span style={{ color: "#FF6948" }}>제외할 재료</span>를 선택해주세요
        </div>
      </div>

      <div className={classes["ingredients"]}>
        <button
          className={classes["option-btn"]}
          id="chocolate"
          onClick={onClickIngreButtonHandler}
        >
          <img
            src={
              ingredients.includes("chocolate") ? SelectedChocolate : Chocolate
            }
            id="chocolate"
            alt="chocolate-image"
          />
        </button>
        <button
          id="caffeine"
          className={classes["option-btn"]}
          onClick={onClickIngreButtonHandler}
        >
          <img
            src={ingredients.includes("caffeine") ? SelectedCaffeine : Caffein}
            id="caffeine"
            alt="caffeine-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="milk"
          onClick={onClickIngreButtonHandler}
        >
          <img
            src={ingredients.includes("milk") ? SelectedMilk : Milk}
            id="milk"
            alt="milk-image"
          />
        </button>
      </div>

      <div className={classes["fruits-header"]}>
        <div>과일</div>
        <div>
          <span style={{ color: "#FF6948" }}>제외할 과일</span>를 선택해주세요
        </div>
      </div>

      <div className={classes["fruits"]}>
        <button
          className={classes["option-btn"]}
          id="peach"
          onClick={onClickFruitsButtonHandler}
        >
          <img
            src={fruits.includes("peach") ? SelectedPeach : Peach}
            id="peach"
            alt="peach-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="orange"
          onClick={onClickFruitsButtonHandler}
        >
          <img
            src={fruits.includes("orange") ? SelectedOrange : Orange}
            id="orange"
            alt="orange-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="apple"
          onClick={onClickFruitsButtonHandler}
        >
          <img
            src={fruits.includes("apple") ? SelectedApple : Apple}
            id="apple"
            alt="apple-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="strawberry"
          onClick={onClickFruitsButtonHandler}
        >
          <img
            src={
              fruits.includes("strawberry") ? SelectedStrawberry : Strawberry
            }
            id="strawberry"
            alt="strawberry-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="kiwi"
          onClick={onClickFruitsButtonHandler}
        >
          <img
            src={fruits.includes("kiwi") ? SelectedKiwi : Kiwi}
            id="kiwi"
            alt="kiwi-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="banana"
          onClick={onClickFruitsButtonHandler}
        >
          <img
            src={fruits.includes("banana") ? SelectedBanana : Banana}
            id="banana"
            alt="banana-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="watermelon"
          onClick={onClickFruitsButtonHandler}
        >
          <img
            src={
              fruits.includes("watermelon") ? SelectedWatermelon : Watermelon
            }
            id="watermelon"
            alt="watermelon-image"
          />
        </button>
      </div>

      <div className={classes["taste-header"]}>
        <div>맛</div>
        <div>
          <span style={{ color: "#006DF0" }}>선호하는 맛</span>을 선택해주세요
        </div>
      </div>

      <div className={classes["taste"]}>
        <button
          className={classes["option-btn"]}
          id="sweet"
          onClick={onClickTasteButtonHandler}
        >
          <img
            src={taste.includes("sweet") ? SelectedSweet : Sweet}
            id="sweet"
            alt="sweet-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="bitter"
          onClick={onClickTasteButtonHandler}
        >
          <img
            src={taste.includes("bitter") ? SelectedBitter : Bitter}
            id="bitter"
            alt="bitter-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="sour"
          onClick={onClickTasteButtonHandler}
        >
          <img
            src={taste.includes("sour") ? SelectedSour : Sour}
            id="sour"
            alt="sour-image"
          />
        </button>
        <button
          className={classes["option-btn"]}
          id="nuts"
          onClick={onClickTasteButtonHandler}
        >
          <img
            src={taste.includes("nuts") ? SelectedNuts : Nuts}
            id="nuts"
            alt="nuts-image"
          />
        </button>
      </div>

      <SelectButton text={"선택완료"} onClick={onClickButtonHandler} />
    </div>
  );
};

export default OptionPage;
