// css
import classes from './MorePage.module.css';

// components
import Header from '../components/Layout/Header';
import SelectButton from '../components/Common/SelectButton';

//images
import MoreDescription from '../assets/descriptions/more_description.png';
import MoreButton1 from '../assets/moreButtons/more_button1.png';
import MoreButton2 from '../assets/moreButtons/more_button2.png';
import MoreButton3 from '../assets/moreButtons/more_button3.png';
import MoreButton4 from '../assets/moreButtons/more_button4.png';
import MoreButton5 from '../assets/moreButtons/more_button5.png';

const MorePage = () => {
  return (
    <div className={classes['page-container']}>
      <Header />
      <img src={MoreDescription} alt="more-description" />
      <div className={classes['buttons']}>
        <button className={classes['more-btn']}>
          <img src={MoreButton1} alt="more-button-1" />
        </button>
        <button className={classes['more-btn']}>
          <img src={MoreButton2} alt="more-button-2" />
        </button>
        <button className={classes['more-btn']}>
          <img src={MoreButton3} alt="more-button-3" />
        </button>
        <button className={classes['more-btn']}>
          <img src={MoreButton4} alt="more-button-4" />
        </button>
        <button className={classes['more-btn']}>
          <img src={MoreButton5} alt="more-button-5" />
        </button>
      </div>
      <SelectButton text={'선택완료'}/>
    </div>
  );
}

export default MorePage;