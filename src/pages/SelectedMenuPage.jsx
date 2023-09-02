// hooks
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
=======
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
>>>>>>> 87fc1625253fc5b1f8fa2abf271f5bebb08523be

// components
import Header from "../components/Layout/Header";
import SelectedDescription from "../assets/descriptions/selected_description.png";
import MenuBox from "../components/Common/MenuBox";
import SelectButton from "../components/Common/SelectButton";

// css
import classes from "./SelectedMenuPage.module.css";
import { SelectedMenu } from "../context/SelectedMenu";

//firebase
import { storage } from '../services/firebase.config';
import { getDownloadURL, ref } from 'firebase/storage';

const SelectedMenuPage = () => {
<<<<<<< HEAD
	const navigate = useNavigate();
	const selectedMenuContext = useContext(SelectedMenu);
	const [menusUrl, setMenusUrl] = useState([1, 2]);

	useEffect(() => {
		const menusName = selectedMenuContext.menus.map((item) => item.name);

		const fetchMenus = async () => {
			const menus = await Promise.all(
				menusName.map(async (item) => {
					const imageRef = ref(storage, 'image/menu-' + item + '.png');
					const url = getDownloadURL(imageRef);
					return url;
				})
			);
			return menus;
		};

		fetchMenus().then((menus) => {
			setMenusUrl(menus);
		});
	}, [selectedMenuContext]);
	console.log(selectedMenuContext);

	const onClickFinishHandler = (e) => {
		navigate('/finish');
	};

	const onClickMoreHandler = (e) => {
		navigate('../more');
	};

	return (
		<div className={classes['page-container']}>
			<Header />
			<img src={SelectedDescription} alt='selected-description' />
			<div className={classes['menu-container']}>
				{menusUrl.map((item, index) => {
					return <img alt='images' key={index} src={item}></img>;
				})}
			</div>
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
					<SelectButton text={'추천 더 받기'} onClick={onClickMoreHandler} />
				</div>
			</div>
		</div>
	);
=======
  const navigate = useNavigate();
  const selectedMenuContext = useContext(SelectedMenu);
  const selectedMenu = selectedMenuContext.menus;

  const onClickFinishHandler = (e) => {
    navigate("/finish");
  };

  const onClickMoreHandler = (e) => {
    navigate("../more");
  };

  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={SelectedDescription} alt="selected-description" />
      <div className={classes["menu-container"]}>
        {selectedMenu.map((item, index) => {
          return (
            <MenuBox
              key={index}
              menu={item}
            />
          );
        })}
      </div>
      <div className={classes["choices"]}>
        <div className={classes["choice"]}>
          <div className={classes["question"]}>
            추천 메뉴가
            <br />
            마음에 드시나요?
          </div>
          <SelectButton text={"장바구니 담기"} onClick={onClickFinishHandler} />
        </div>
        <div className={classes["choice"]}>
          <div className={classes["question"]}>
            자세한
            <br />
            추천을 원하시나요?
          </div>
          <SelectButton text={"추천 더 받기"} onClick={onClickMoreHandler} />
        </div>
      </div>
    </div>
  );
>>>>>>> 87fc1625253fc5b1f8fa2abf271f5bebb08523be
};

export default SelectedMenuPage;
