import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SelectedMenu } from "../context/SelectedMenu";

// components
import Header from "../components/Layout/Header";
import SelectButton from "../components/Common/SelectButton";

// css
import classes from "./ResultPage.module.css";

// images
import ResultDescription from "../assets/descriptions/result_description.png";

const ResultPage = () => {
  const navigate = useNavigate();
  const selectedMenu = useContext(SelectedMenu);
  const resultMenu = selectedMenu.resultMenu;
  const menus = selectedMenu.menus;

  // find name of resultMenu in menus
  for(let i = 0; i < menus.length; i++) {
    if(resultMenu.includes(menus[i])) {
      console.log(menus[i]);
    }
  }

  const onClickFinishHandler = (e) => {
		navigate('/finish');
	};

  const onClickFirstHandler = (e) => {
    navigate('../../');
  };

  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={ResultDescription} alt="result-description" />
      <div className={classes["result-container"]}>{resultMenu}</div>
      <div className={classes['choices']}>
				<div className={classes['choice']}>
					<div className={classes['question']}>
						추천 메뉴가
						<br />
						마음에 드시나요?
					</div>
					<SelectButton text={'장바구니 담기'} onClick={onClickFinishHandler} />
				</div>
				<div className={classes['choice']}>
					<div className={classes['question']}>
						자세한
						<br />
						추천을 원하시나요?
					</div>
					<SelectButton text={'처음으로 가기'} onClick={onClickFirstHandler} />
				</div>
			</div>
    </div>
  );
};

export default ResultPage;
