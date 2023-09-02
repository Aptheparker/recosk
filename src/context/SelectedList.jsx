// hooks
import { createContext, useReducer, useState } from 'react';

// context
export const SelectedList = createContext({
	// init
	category: '',
	temperature: '',
	ingredients: [],
	fruits: [],
	taste: [],

	// set functions
	setCategory: () => {},
	setTemperature: () => {},
	setIngredients: () => {},
	setFruits: () => {},
	setTaste: () => {},
});

// context provider
export const SelectedListProvider = (props) => {
	const [category, setCategory] = useState('');
	const [temperature, setTemperature] = useState([]);
	// const [ingredients, setIngredients] = useState([]);
	// const [fruits, setFruits] = useState([]);
	// const [taste, setTaste] = useState([]);

	const ingredientsReducer = (state, action) => {
		switch (action.type) {
			case 'DELETE':
				return state.filter((item) => item !== action.payload);
			case 'ADD':
				return [...state, action.payload];
		}
	};

	const [ingredientsState, dispatchIngredientsState] = useReducer(
		ingredientsReducer,
		// ['chocolate', 'caffeine', 'milk']
		['none']
	);

	const fruitsReducer = (state, action) => {
		switch (action.type) {
			case 'DELETE':
				return state.filter((item) => item !== action.payload);
			case 'ADD':
				return [...state, action.payload];
		}
	};

	const [fruitsState, dispatchFruitsState] = useReducer(fruitsReducer, [
		// 'peach',
		// 'orange',
		// 'apple',
		// 'strawberry',
		// 'kiwi',
		// 'banana',
		// 'watermelon',
		'none',
	]);

	const tasteReducer = (state, action) => {
		switch (action.type) {
			case 'DELETE':
				return state.filter((item) => item !== action.payload);
			case 'ADD':
				return [...state, action.payload];
			case 'FULL':
				return ['bitter', 'sweet', 'sour', 'nutty'];
		}
	};

	const [tasteState, dispatchTasteState] = useReducer(tasteReducer, [
		// 'bitter',
		// 'sweat',
		// 'sour',
	]);

	return (
		<SelectedList.Provider
			value={{
				category: category,
				temperature: temperature,
				ingredients: ingredientsState,
				fruits: fruitsState,
				taste: tasteState,
				setCategory: setCategory,
				setTemperature: setTemperature,
				setIngredients: dispatchIngredientsState,
				setFruits: dispatchFruitsState,
				setTaste: dispatchTasteState,
			}}
		>
			{props.children}
		</SelectedList.Provider>
	);
};
