import {useState} from 'react'

const Card = (props) => {
	const [readMore , setReadMore] = useState(true);
	const {id , name ,dateTime , description , location , picture , price} = props.tour;
	return (
			<div className='col-12 mt-5 mb-5 card shadow text-align-center'>
				<div className='row'>
					<div className='col-12'>
						<img src={picture} alt={name} className='img-fluid rounded img-size mt-3 mb-3'/>
					</div>
					<div className='col-12 mt-3 mb-3'>
						<div className='row mt-2 mb-2'>
							<div className='col-8'>
								<h4 className='text-primary'>{name}</h4>
							</div>
							<div className='col-4'>
								<h4 className='text-success'>{price}</h4>
							</div>
						</div>
					</div>
					<div className='col-10 offset-1 mb-3 mt-3'>
						<div className='wrapper'>
							<p className='text-info mt-2 mb-2 d-inline'>{readMore ?description.substring(0,300) : description}</p>
							<p className='d-inline text-info text-link' onClick={() => {readMore?setReadMore(false):setReadMore(true)}}>{readMore ? 'Read more' :'Less More'}</p>
						</div>
					</div>
					<div className='col-12'>
						<div className='row mt-3 mb-3'>
							<div className='col-xl-3 mt-2'>
								<p className='text-muted'>{location}</p>
							</div>
							<div className='col-xl-6 mt-2 text-align-center'>
								<button className='btn btn-danger' onClick={() => props.deleteCard(id)}>Not interested</button>
							</div>
							<div className='col-xl-3 mt-2'>
								<p className='text-muted'>{dateTime.substring(0,10)} {dateTime.substring(11,16)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}
export default Card;