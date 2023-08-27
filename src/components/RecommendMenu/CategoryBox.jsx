// classes
import classes from './CategoryBox.module.css';


const CategoryBox = ({ imageSrc, categoryName, onClick, className }) => {
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={imageSrc} alt="coffee" />
      <p className={classes["menu-name"]}>{categoryName}</p>
    </div>
  );
};

export default CategoryBox;
