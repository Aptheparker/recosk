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
import OptionDescription from '../assets/descriptions/option_description.png';
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
          onClick={onClickIngreButtonHandler}
        >
          <img src={Chocolate} id="chocolate" alt="" />
        </button>
        <button
          id="caffeine"
          className={classes["option-btn"]}
          onClick={onClickIngreButtonHandler}
        >
          <img src={Caffein} id="caffeine" alt="" />
        </button>
        <button
          id="milk"
          className={classes["option-btn"]}
          onClick={onClickIngreButtonHandler}
        >
          <img src={Milk} id="milk" alt="" />
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
          id="peach"
          className={classes["option-btn"]}
          onClick={onClickFruitsButtonHandler}
        >
          <img src={Peach} alt="" id="peach" />
        </button>
        <button
          id="orange"
          className={classes["option-btn"]}
          onClick={onClickFruitsButtonHandler}
        >
          <img src={Orange} alt="" id="orange" />
        </button>
        <button
          id="apple"
          className={classes["option-btn"]}
          onClick={onClickFruitsButtonHandler}
        >
          <img src={Apple} alt="" id="apple" />
        </button>
        <button
          id="strawberry"
          className={classes["option-btn"]}
          onClick={onClickFruitsButtonHandler}
        >
          <img src={Strawberry} alt="" id="strawberry" />
        </button>
        <button
          id="kiwi"
          className={classes["option-btn"]}
          onClick={onClickFruitsButtonHandler}
        >
          <img src={Kiwi} alt="" id="kiwi" />
        </button>
        <button
          id="banana"
          className={classes["option-btn"]}
          onClick={onClickFruitsButtonHandler}
        >
          <img src={Banana} alt="" id="banana" />
        </button>
        <button
          id="watermelon"
          className={classes["option-btn"]}
          onClick={onClickFruitsButtonHandler}
        >
          <img src={Watermelon} alt="" id="watermelon" />
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
          onClick={onClickTasteButtonHandler}
        >
          <img src={Sweet} id="sweat" alt="" />
        </button>
        <button
          className={classes["option-btn"]}
          onClick={onClickTasteButtonHandler}
        >
          <img src={Bitter} id="bitter" alt="" />
        </button>
        <button
          className={classes["option-btn"]}
          onClick={onClickTasteButtonHandler}
        >
          <img src={Sour} id="sour" alt="" />
        </button>
        <button
          className={classes["option-btn"]}
          onClick={onClickTasteButtonHandler}
        >
          <img src={Nuts} id="nuts" alt="" />
        </button>
      </div>

      <SelectButton onClick={onClickButtonHandler} />
    </div>
  );
};

export default OptionPage;
