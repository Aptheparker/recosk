import MenuContainer from '../components/MenuContainer';
import SelectionBar from '../components/SelectionBar';
import classes from './NormalPage.module.css';

// const loader = () => {

// }

const NormalPage = () => {
  return (
    <div className={classes.background}>
      <div className={classes.header}>
        <p className={classes["header-text"]}>Recosk</p>
      </div>
      <SelectionBar></SelectionBar>
      <MenuContainer></MenuContainer>
      
    </div>
  );
}

export default NormalPage;