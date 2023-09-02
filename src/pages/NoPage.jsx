// hooks
import { useNavigate } from 'react-router-dom';

// components
import Header from '../components/Layout/Header';
import SelectButton from '../components/Common/SelectButton';

// images
import NopageDescription from '../assets/descriptions/nopage_description.png';
import NotFound from '../assets/images/notfound.svg';

// css
import classes from './NoPage.module.css';

const NoPage = () => {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate('../../category');
  }

  return (
    <div className={classes['page-container']}>
      <Header />
      <img src={NopageDescription} alt="nopage-description" />
      <img src={NotFound} alt="not-found" />
      <SelectButton text={'처음으로 가기'} onClick={ClickHandler}/>
    </div>
  );
}

export default NoPage;