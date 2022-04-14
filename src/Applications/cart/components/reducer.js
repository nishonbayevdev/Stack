const reducer = (state,action) => {
	if (action.type === 'CLEAR_LIST') {
		return {...state , carts:[]}
	}
	if (action.type === 'REMOVE') {
		return {
			...state,
			carts:state.carts.filter((cart) => {
				return cart.id !== action.payload
			})
		}
	}
	if (action.type === 'DECREASE') {
		const tempCarts = state.carts.map((cart) => {
			if (cart.id === action.payload) {
				return {...cart , amount : cart.amount - 1}
			}
			return cart;
		}).filter((cart) => {
			return cart.amount !==0 ;
		})
		return {
			...state,
			carts:tempCarts
		}
	}
	if (action.type === 'INCREASE') {
		const tempCarts = state.carts.map((cart) => {
			if (cart.id === action.payload) {
				return {...cart , amount : cart.amount + 1}
			}
			return cart
		})
		return {
			...state,
			carts:tempCarts
		}
	}
	return state;
}
export default reducer;