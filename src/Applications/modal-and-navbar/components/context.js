import React , {useState , useContext } from 'react';
const AppContext = React.createContext();
const AppProvider = ({children}) =>{
	const [isOpenSidebar , setIsOpenSidebar] = useState(false);
	const [isOpenModal , setIsOpenModal] = useState(false);
	const openModal = () => {
		setIsOpenModal(true)
	}
	const closeModal = () => {
		setIsOpenModal(false)
	}
	const openSidebar = () => {
		setIsOpenSidebar(true)
	}
	const closeSidebar = () => {
		setIsOpenSidebar(false)
	}
	return <AppContext.Provider value={{
		isOpenSidebar,
		isOpenModal,
		openModal,
		closeModal,
		openSidebar,
		closeSidebar
	}}>
		{children}
	</AppContext.Provider>
}
export const useGlobalData = () => {
	return useContext(AppContext);
}
export {AppContext , AppProvider}