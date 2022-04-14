import {useState , useEffect} from 'react';
import Loading from './Loading';
import CartItem from './CartItem';
import {useGlobalData} from './context';
const CartWrapper = () => {
	const {carts,clearCart} = useGlobalData()
	if (carts.length === 0) {
		return <Loading/>
	}
	return <div className='container'>
				<div className='row'>
					<h3>Your order number {carts.length}</h3>
				</div>
				<div className='row'>
					{
						carts.map((product) => {
							return <CartItem key={product.id} {...product}/>
						})
					}
				</div>
				<div className='row mt-3 mb-5'>
					<div className='col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-10 offset-sm-1'>
						{carts.length !== 0? <button onClick={clearCart} className='btn btn-danger'>Clear all carts</button>:""}
					</div>
				</div>
			</div>
}
export default CartWrapper;