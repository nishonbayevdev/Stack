const CardItem = (props) => {
	console.log(props.data)
	return (
		<>
				<div className='col-xl-3 col-lg-3 col-md-4 col-sm-6'>
					<div className='card shadow'>
						<div className='card-head'>
							<img src={props.data.img} className='img-fluid' alt={props.data.title} />
						</div>	
						<div className='card-body'/>
							<h3 className='text-dark'>
								{props.data.title}
							</h3>
							<p className='text-align-center'>
								{props.data.description}
							</p>
						</div>
						<div className='card-footer'>
							<p className='text-info'>
								{props.data.dateTime}
							</p>
						</div>
					</div>
				</>
			);
}
export default CardItem;