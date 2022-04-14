import {Link} from 'react-router-dom';	
const JuiceList = ({id , description ,endAt,image,isPublish,madePlace,packageAt,price,title,volume}) => {
	return <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3 mb-3'>
				<div className='card shadow'>
					<div className='card-head'>
						<img src={image} className='img-fluid rounded img-full'/>
					</div>
					<div className='card-body'>
						<h4 className='text-light'>
							<Link to={`/detail/${id}`} >
								{title}
							</Link>
						</h4>
						<div className='row'>
							<p className='col-6 text-danger t-left'>
								{price}$
							</p>
							<p className='col-6 text-danger t-right'>
								{packageAt}
							</p>
						</div>
					</div>
				</div> 
		   </div>
}
export default JuiceList;
