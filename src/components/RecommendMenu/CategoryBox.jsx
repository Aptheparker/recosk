// classes
import classes from "./CategoryBox.module.css";

const CategoryBox = ({ imageSrc, onClick, className }) => {

  return (
    <div className={className} onClick={onClick}>
      <img className={classes["category-image"]} src={imageSrc} alt="image" />
    </div>
  );
};

export default CategoryBox;
