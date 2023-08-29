import { createContext, useReducer, useState } from 'react';

export const SelectedList = createContext({
	category: '',
	temperature: '',
	ingredients: [],
	fruits: [],
	taste: [],
	setCategory: () => {},
	setTemperature: () => {},
	setIngredients: () => {},
	setFruits: () => {},
	setTaste: () => {},
});

export const SelectedListProvider = (props) => {
	const [category, setCategory] = useState('');
	const [temperature, setTemperature] = useState('');
	// const [ingredients, setIngredients] = useState([]);
	const [fruits, setFruits] = useState([]);
	const [taste, setTaste] = useState([]);

	const [ingredientsState, dispatchIngredientsState] = useReducer(
		ingredientsReducer,
		['caffeine', 'chocolate', 'milk']
	);

	const ingredientsReducer = (state, action) => {
		switch (action.type) {
			case 'BAN_CAFFEINE':
				return ['chocolate', 'milk'];
			case 'BAN_MILK':
				return ['chocolate', 'caffeine'];
			case 'BAN_CHOCOLATE':
				return ['milk', 'caffeine'];
			default:
				return ['milk', 'caffeine', 'chocolate'];
		}
	};

	return (
		<SelectedList.Provider
			value={{
				category: category,
				temperature: temperature,
				ingredients: ingredientsState,
				fruits: fruits,
				taste: taste,
				setCategory: setCategory,
				setTemperature: setTemperature,
				setIngredients: dispatchIngredientsState,
				setFruits: setFruits,
				setTaste: setTaste,
			}}
		>
			{props.children}
		</SelectedList.Provider>
	);
};
