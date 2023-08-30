import { SelectedList } from "../context/SelectedList";

//hook
import { useContext } from "react";
import { Link } from "react-router-dom";

// classes
import classes from "./OptionPage.module.css";

// images
import Chocolate from "../assets/ingredients/chocolate.png";
import Caffein from '../assets/ingredients/caffein.png';
import Milk from '../assets/ingredients/milk.png';
import Peach from '../assets/fruits/peach.png';
import Orange from '../assets/fruits/orange.png';
import Apple from '../assets/fruits/apple.png';
import Strawberry from '../assets/fruits/strawberry.png';
import Kiwi from '../assets/fruits/kiwi.png';
import Banana from '../assets/fruits/banana.png';
import Watermelon from '../assets/fruits/watermelon.png';
import Sweet from '../assets/taste/sweet.png';
import Bitter from '../assets/taste/bitter.png';
import Sour from '../assets/taste/sour.png';
import Nuts from '../assets/taste/nuts.png';


const OptionPage = () => {
  const selectionContext = useContext(SelectedList);
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
      selectionContext.setIngredients({ type: "BAN", payload: data });
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
  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      <div className={classes["description"]}>옵션을 선택해주세요</div>

      <div className={classes["ingredients-header"]}>
        <div>재료</div>
        <div>
          <span style={{ color: "#FF6948" }}>제외할 재료</span>를 선택해주세요
        </div>
      </div>

      <div className={classes["ingredients"]}>
        <button className={classes["option-btn"]} onClick={onClickIngreButtonHandler}>
          <img src={Chocolate} id="chocolate" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickIngreButtonHandler}>
          <img src={Caffein} id="caffein" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickIngreButtonHandler}>
          <img src={Milk} id="milk" alt="" />
        </button>
      </div>

      <div className={classes["fruits-header"]}>
        <div>재료</div>
        <div>
          <span style={{ color: "#FF6948" }}>제외할 과일</span>를 선택해주세요
        </div>
      </div>

      <div className={classes["fruits"]}>
        <button className={classes["option-btn"]} onClick={onClickFruitsButtonHandler}>
          <img src={Peach} id="peach" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickFruitsButtonHandler}>
          <img src={Orange} id="orange" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickFruitsButtonHandler}>
          <img src={Apple} id="apple" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickFruitsButtonHandler}>
          <img src={Strawberry} id="strawberry" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickFruitsButtonHandler}>
          <img src={Kiwi} id="kiwi" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickFruitsButtonHandler}>
          <img src={Banana} id="banana" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickFruitsButtonHandler}>
          <img src={Watermelon} id="watermelon" alt="" />
        </button>
      </div>

      <div className={classes["taste-header"]}>
        <div>재료</div>
        <div>
          <span style={{ color: "#006DF0" }}>선호하는 맛</span>을 선택해주세요
        </div>
      </div>

      <div className={classes["taste"]}>
        <button className={classes["option-btn"]} onClick={onClickTasteButtonHandler}>
          <img src={Sweet} id="sweet" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickTasteButtonHandler}>
          <img src={Bitter} id="bitter" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickTasteButtonHandler}>
          <img src={Sour} id="sour" alt="" />
        </button>
        <button className={classes["option-btn"]} onClick={onClickTasteButtonHandler}>
          <img src={Nuts} id="nuts" alt="" />
        </button>
      </div>

      <Link to={"/loading"}>
        <button className={classes["select-btn"]}>선택완료</button>
      </Link>
    </div>
  );
};

export default OptionPage;
