import Stars from './Stars';
const List = (props) => {
	const {image , name ,description,rate} = props.food;
	return( 
		<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3 mb-3'>
			<div className='row'>
				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 text-align-center'>
					<img src={image} alt ={name} className='img-fluid rounded img-full'/>
				</div>
				<div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
					<h5 className='text-light text-align-center'>{name}</h5>
					<p className='text-muted'>{description.substring(0,70)}</p>
					<div className='rate'>
					 	<Stars stars = {rate}/>
					</div>
				</div>
			</div>
		</div>
		)
}
export default List; 