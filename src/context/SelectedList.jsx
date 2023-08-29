import { createContext, useState } from "react";


const SelectedList = createContext({
    category: "",
    temperature: "",
    ingredients: [],
    fruits: [],
    taste: [],
    setCategory: () => {},
    setTemperature: () => {},
    setIngredients: () => {},
    setFruits: () => {},
    setTaste: () => {}
});

export const SelectedListProvider = ({children}) => {
    const [category, setCategory] = useState("");
    const [temperature, setTemperature] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [fruits, setFruits] = useState([]);
    const [taste, setTaste] = useState([]);

    return (
        <SelectedList.Provider value={{category: category, temperature: temperature, ingredients: ingredients, fruits: fruits, taste: taste, setCategory: setCategory, setTemperature: setTemperature, setIngredients: setIngredients, setFruits: setFruits, setTaste: setTaste}}>
            {children}
        </SelectedList.Provider>
    )
}