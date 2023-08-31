// css
import classes from "./Header.module.css";

// images
import HeaderImage from "../../assets/images/header.svg";

const Header = () => {
  return(
    <img src={HeaderImage} className={classes.header} alt="header" />
  )
}

export default Header;