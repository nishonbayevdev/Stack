import {useGlobalData} from './context';
const CartItem = ({amount , id , image , price,published_at,title}) => {
	const {removeCart , increase, decrease} = useGlobalData();
	return <div className='col-12 mt-3 mb-3 shadow'>
				<div className='row'>
					<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
						<img src = {image} className='img-fluid rounded' alt={title}/>
					</div>
					<div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
						<div className='row'>
							<div className='col-10 text-align-center'>
								<h1 className='text-muted mt-2 mb-2'>{title}</h1>
								<div className='row mt-2 mb-2'>
									<div className='col-6'><h4 className='text-danger'>{price}$</h4></div>
									<div className='col-6'><h4 className='text-muted'>Number : {amount}</h4></div>
								</div>
								<div className='row '>
									<div className='col-6'><h5 className='text-success'>{published_at}</h5></div>
									<div className='col-6'>
										<span className='ti ti-star' style={{color:'yellow',fontSize:'20px',margin:'0 5px'}}></span>
										<span className='ti ti-star' style={{color:'yellow',fontSize:'20px',margin:'0 5px'}}></span>
										<span className='ti ti-star' style={{color:'yellow',fontSize:'20px',margin:'0 5px'}}></span>
										<span className='ti ti-star' style={{color:'yellow',fontSize:'20px',margin:'0 5px'}}></span>
										<span className='ti ti-star' style={{color:'yellow',fontSize:'20px',margin:'0 5px'}}></span>
									</div>
								</div>
							</div>
							<div className='col-2 wrapper'>
								<div>
									<span onClick = {() => increase(id)} className='ti ti-arrow-up text-dark' style={{fontSize:"25px",display:'block',margin:'5px 0px',cursor:'pointer'}}>
									</span>
									<span className='text-align-center'>{amount}</span>
									<span onClick = {() => decrease(id)} className='ti ti-arrow-down text-dark' style={{fontSize:"25px",display:'block',margin:'5px 0px',cursor:'pointer'}}>
									</span>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-12 text-align-center mt-2 mb-2'>
								<button onClick = {() => removeCart(id)}  className='btn btn-success'>remove</button>
							</div>
						</div>
					</div>
				</div>
			</div>
}
export default CartItem ;