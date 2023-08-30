import { SelectedList } from '../context/SelectedList';

//hook
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const OptionPage = () => {
	const selectionContext = useContext(SelectedList);
	const ingredients = selectionContext.ingredients;
	const fruits = selectionContext.fruits;

	const setFruits = (data) => {
		if (fruits.includes(data)) {
			selectionContext.setFruits({ type: 'DELETE', payload: data });
		} else {
			selectionContext.setFruits({ type: 'ADD', payload: data });
		}
	};

	const setIngredients = (data) => {
		if (ingredients.includes(data)) {
			selectionContext.setIngredients({ type: 'BAN', payload: data });
		} else {
			selectionContext.setIngredients({ type: 'ADD', payload: data });
		}
	};

	const onClickIngreButtonHandler = (e) => {
		setIngredients(e.target.id);
	};

	const onClickFruitsButtonHandler = (e) => {
		setFruits(e.target.id);
	};

	console.log(ingredients);
	return (
		<div>
			<button id='milk' onClick={onClickIngreButtonHandler}>
				milk
			</button>
			<button id='chocolate' onClick={onClickIngreButtonHandler}>
				chocolate
			</button>
			<button id='caffeine' onClick={onClickIngreButtonHandler}>
				caffeine
			</button>
			<button id='apple' onClick={onClickFruitsButtonHandler}>
				apple
			</button>
			<button id='mango' onClick={onClickFruitsButtonHandler}>
				mango
			</button>
			<button id='grapes' onClick={onClickFruitsButtonHandler}>
				grapes
			</button>

			<Link to={'/taste'}>
				<button>선택완료</button>
			</Link>
		</div>
	);
};

export default OptionPage;
