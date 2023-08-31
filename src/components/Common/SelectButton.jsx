// css
import classes from "./SelectButton.module.css";

const SelectButton = ({onClick}) => {
  return (
    <button className={classes["select-btn"]} onClick={onClick}>
      선택완료
    </button>
  );
};

export default SelectButton;
