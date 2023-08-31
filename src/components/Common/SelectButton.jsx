// css
import classes from "./SelectButton.module.css";

const SelectButton = ({ text, onClick}) => {
  return (
    <button className={classes["select-btn"]} onClick={onClick}>
      {text}
    </button>
  );
};

export default SelectButton;
