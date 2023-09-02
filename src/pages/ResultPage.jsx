import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SelectedMenu } from '../context/SelectedMenu';

// components
import Header from '../components/Layout/Header';
import SelectButton from '../components/Common/SelectButton';
import MenuBox from '../components/Common/MenuBox';
// css
import classes from './ResultPage.module.css';

//firebase
import { storage } from '../services/firebase.config';
import { ref, getDownloadURL } from 'firebase/storage';
// images
import ResultDescription from '../assets/descriptions/result_description.png';

const ResultPage = () => {
	const navigate = useNavigate();
	const selectedMenu = useContext(SelectedMenu);
	const resultMenu = selectedMenu.resultMenu;
	const menus = selectedMenu.menus;
	const [resultBox, setResultBox] = useState({});

	const [imageUrl, setImageUrl] = useState([]);

	useEffect(() => {
		async function getImage() {
			const imgRef = ref(storage, 'image/menu-' + resultBox.name + '.png');
			const imageData = await getDownloadURL(imgRef);
			return imageData;
		}
		if (resultBox) {
			getImage().then((url) => {
				setImageUrl(url);
			});
		}
	}, [resultBox]);

	useEffect(() => {
		for (let i = 0; i < menus.length; i++) {
			if (resultMenu.includes(menus[i].koreanName)) {
				console.log(menus[i].name);
				setResultBox(menus[i]);
			}
		}
	}, [menus, resultMenu]);

	const onClickFinishHandler = (e) => {
		navigate('/finish');
	};

	const onClickFirstHandler = (e) => {
		navigate('../../');
	};

	return (
		<div className={classes['page-container']}>
			<Header />
			<img src={ResultDescription} alt='result-description' />
			<MenuBox menu={resultBox} img={imageUrl}></MenuBox>
			<div className={classes['result-container']}>{resultMenu}</div>
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
