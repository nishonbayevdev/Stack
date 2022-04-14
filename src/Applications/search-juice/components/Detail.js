import {useState , useEffect} from 'react';
import {Link , useParams} from 'react-router-dom';
import {useGolobalContext} from './context';
import Loading from './Loading';
import Navbar from './Navbar';
const Detail = () => {
	const {id} = useParams();
	const [drink , setDrink] = useState([]);
	const {loading , setLoading} = useGolobalContext();
	useEffect(()=> {
		getDrink()
	},[])
	const getDrink = async () => {
		setLoading(true);
		try {
			const response = await fetch(`http://localhost:8000/api/drink/${id}`);
			const drink = await response.json();
			setDrink(drink);
			setLoading(false);
		}
		catch {
			setDrink([]);
		}
	}
	if (loading) {
		return <Loading/>
	}
	const { description ,endAt,image,madePlace,packageAt,price,title,volume} = drink;
	return <div className='wrapper'>
				<Navbar/>
				<div className='container'>
					<div className='row mt-5 mb-5'>
						<div className='col-lg-8 offset-lg-2 col-xl-8 offset-xl-2  col-md-10 offset-md-1 col-sm-12 offset-sm-0 '>
							<div className='card shadow' >
								<div className='card-head'>
									<img src = {image} alt={title} className='img-fluid img-full rounded'/>
								</div>
								<div className='card-body'>
									<div className='row'>
										<p className='col-12 text-dark'>
											{description}
										</p>
										<p className='col-6 text-danger t-left'>
											{title}
										</p>
										<p className='col-6 text-danger t-right'>
											Tugash yili : {endAt}
										</p>
										<p className='col-6 text-danger t-left'>
											Narx : {price}$
										</p>
										<p className='col-6 text-danger t-right'>
											Qadoqlangan yili : {packageAt}
										</p>
										<p className='col-6 text-danger t-left'>
											Davlat : {madePlace}
										</p>
										<p className='col-6 text-danger t-right'>
											Hajmi : {volume}
										</p>
									</div>
								</div> 
								<div className='card-footer'>
									<Link to = '/' className='btn btn-success'> Qaytish </Link>
								</div> 
							</div>
						</div>
					</div>
				</div>
		   </div>
}
export default Detail;