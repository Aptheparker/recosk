import { SelectedList } from "../context/SelectedList";

//hook
import { useContext } from "react";
import { Link } from "react-router-dom";

// classes
import classes from "./OptionPage.module.css";

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
      <div>
        <button id="milk" onClick={onClickIngreButtonHandler}>
          milk
        </button>
        <button id="chocolate" onClick={onClickIngreButtonHandler}>
          chocolate
        </button>
        <button id="caffeine" onClick={onClickIngreButtonHandler}>
          caffeine
        </button>
        <button id="apple" onClick={onClickFruitsButtonHandler}>
          apple
        </button>
        <button id="mango" onClick={onClickFruitsButtonHandler}>
          mango
        </button>
        <button id="grapes" onClick={onClickFruitsButtonHandler}>
          grapes
        </button>
        <button id="sweat" onClick={onClickTasteButtonHandler}>
          달달
        </button>
        <button id="bitter" onClick={onClickTasteButtonHandler}>
          씀
        </button>
        <button id="goso" onClick={onClickTasteButtonHandler}>
          고소~
        </button>

        <Link to={"/taste"}>
          <button>선택완료</button>
        </Link>
      </div>
    </div>
  );
};

export default OptionPage;
