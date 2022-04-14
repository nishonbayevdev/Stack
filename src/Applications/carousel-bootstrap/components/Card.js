const Card = (props) => {
	const {image , name ,description , profesion} = props.carousel;
	return (
			<div className={props.position}>
				<div className='card-body mt-3 mb-3'>
					<div className='section-image'>
						<div className='border'>
								<img className='img-fluid'src={image} alt={name}/>		
						</div>
					</div>
					<div className='section-text'>
						<h5 className='text-light text-align-center mt-2 mb-2'>{name}</h5>
						<h4 className='text-muted text-align-center mt-2 mb-2'>{profesion}</h4>
						<p className='text-success text-align-center mt-2 mb-2'>{description.substring(0,80)}</p>
					</div>
				</div>
			</div>
		)
}
export default Card;