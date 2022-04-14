import {useEffect,useState,useReducer,useContext,createContext} from 'react';
import reducer from './reducer';
const AppContext = createContext();
const intialValue = {
	carts:[],
	total:0,
		}
const AppProvider = ({children}) =>{
	const [data,setData] = useState([])
	useEffect(async ()=>{
		const response = await fetch('api/phones/');
		setData(await response.json());
	},[])
	intialValue['carts'] = data
	const [state,dispatch] = useReducer(reducer ,intialValue);
	const clearCart = () => {
		dispatch({type:'CLEAR_LIST'})
	}
	const removeCart = (id) => {
		dispatch({type:'REMOVE' , payload:id})
	}
	const increase = (id) => {
		dispatch({type:'INCREASE' , payload:id})
	}
	const decrease = (id) => {
		dispatch({type:'DECREASE' , payload:id})
	}
	return <AppContext.Provider
				value = {{
					...state,
					clearCart,
					removeCart,
					increase,
					decrease,
				}}
			>
				{children}
			</AppContext.Provider>
}
export const useGlobalData = () => {
	return useContext(AppContext);
}
export {AppContext,AppProvider};