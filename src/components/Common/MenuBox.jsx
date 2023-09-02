import classes from './MenuBox.module.css';

import { useState } from 'react';

import Icecream from '../../assets/category/icecream.png';

const MenuBox = ({ menu }) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleMenuClick = () => {
    setIsSelected(!isSelected);
  };

  return ( 
    <div className={`${classes['menu-box']} ${isSelected ? classes.selected : ''}`} onClick={handleMenuClick}>
      <div className={classes["menu-img"]}>
        <img src={Icecream} alt="menu-img" />
      </div>
      <div className={classes["menu-name"]}>{menu.name}</div>
      <div className={classes["menu-price"]}>₩ 4,500</div>
    </div>
  );
}

export default MenuBox;
