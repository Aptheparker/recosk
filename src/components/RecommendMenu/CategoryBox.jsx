// classes
import classes from "./CategoryBox.module.css";

const CategoryBox = ({ imageSrc, categoryName, onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <img className={classes["category-image"]} src={imageSrc} alt="image" />
      <div className={classes["category-name"]}>{categoryName}</div>
    </div>
  );
};

export default CategoryBox;
