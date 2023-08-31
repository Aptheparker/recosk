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
	const [temperature, setTemperature] = useState('');
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
		[]
	);

	const fruitsReducer = (state, action) => {
		switch (action.type) {
			case 'DELETE':
				return state.filter((item) => item !== action.payload);
			case 'ADD':
				return [...state, action.payload];
		}
	};

	const [fruitsState, dispatchFruitsState] = useReducer(fruitsReducer, []);

	const tasteReducer = (state, action) => {
		switch (action.type) {
			case 'DELETE':
				return state.filter((item) => item !== action.payload);
			case 'ADD':
				return [...state, action.payload];
		}
	};

	const [tasteState, dispatchTasteState] = useReducer(tasteReducer, []);

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
