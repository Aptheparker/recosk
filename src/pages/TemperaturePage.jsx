// hooks
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// css
import classes from './TemperaturePage.module.css';

// context
import { SelectedList } from '../context/SelectedList';

// components
import Header from '../components/Layout/Header';
import SelectButton from '../components/Common/SelectButton';

// images
import Button from '../assets/images/temperature_button.png';
import SelectedButton from '../assets/images/selected_temperature_button.png';
import TemperatureDescription from '../assets/descriptions/temperature_description.png';

const TemperaturePage = () => {
	const selectedTemperature = useContext(SelectedList);
	const temp = selectedTemperature.temperature;
	const navigate = useNavigate();

	const setTemp = (e) => {
		if (e.target.id === temp) {
			selectedTemperature.setTemperature([]);
		} else if (e.target.id === 'hot') {
			selectedTemperature.setTemperature(['none', 'hot']);
		} else if (e.target.id === 'cold') {
			selectedTemperature.setTemperature(['none', 'cold']);
		} else {
			selectedTemperature.setTemperature(['none', 'hot', 'cold']);
		}
	};

	const onClickButtonHandler = (e) => {
		if (temp.length === 0) {
			e.preventDefault();
			alert('온도를 선택해주세요!');
		} else {
			navigate('/option');
		}
	};

	console.log(temp);

	return (
		<div className={classes['page-container']}>
			<Header />
			<img src={TemperatureDescription} alt='temperature-description' />
			<div className={classes['temperature-container']}>
				<div className={classes['buttons']}>
					<button
						className={classes['temperature-btn']}
						id='hot'
						onClick={setTemp}
					>
						<img
							src={temp === 'hot' ? SelectedButton : Button}
							id='hot'
							alt='Button'
						/>
					</button>
					<button
						className={classes['temperature-btn']}
						id='none'
						onClick={setTemp}
					>
						<img
							src={temp === 'none' ? SelectedButton : Button}
							id='none'
							alt='Button'
						/>
					</button>
					<button
						className={classes['temperature-btn']}
						id='cold'
						onClick={setTemp}
					>
						<img
							src={temp === 'cold' ? SelectedButton : Button}
							id='cold'
							alt='Button'
						/>
					</button>
				</div>
			</div>
			<SelectButton text={'선택완료'} onClick={onClickButtonHandler} />
		</div>
	);
};

export default TemperaturePage;
