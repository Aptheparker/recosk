// css
import classes from './MorePage.module.css';

// components
import Header from '../components/Layout/Header';

//images
import MoreDescription from '../assets/descriptions/more_description.png';


const MorePage = () => {
  return (
    <div className={classes['page-container']}>
      <Header />
      <img src={MoreDescription} alt="more-description" />
      <div></div>
    </div>
  );
}

export default MorePage;