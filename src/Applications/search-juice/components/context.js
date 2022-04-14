import {useContext , useReducer , useState ,createContext,useEffect} from 'react';
const AppContext = createContext();
const AppProvider = ({children}) => {
	const [drinks , setDrinks] = useState([])
	const [loading , setLoading] = useState(true);
	const [key , setKey] = useState('a');
	useEffect(() => {
		getDrinks();
	},[key])
	const getDrinks = async () => {
		setLoading(true)
		try {
			const response = await fetch(`http://localhost:8000/api/drinks/?q=${key}`);
			const drinks = await response.json();
	 		setDrinks(drinks);
	 		setLoading(false);
		}
		catch {
			setDrinks([]);
		}
	}
	return <AppContext.Provider value={{
		drinks,
		loading,
		setKey,
		setLoading
	}}>
		   		{children}
		   </AppContext.Provider>
}
export const useGolobalContext = () => {
	return useContext(AppContext);
}
export {AppContext , AppProvider};