import {useEffect , useState} from 'react';
import Loading from './components/Loading';
import Card from './components/Card';
import './css/style.css'
const App = (props) => {
	const [loading , setLoading] = useState(true);
	const [carousels , setCarousel] = useState([]);
	const [index , setIndex] = useState(0);
	useEffect(()=>{
		let slider = setInterval(()=>{
			setIndex(index + 1)
			},3000
			)
		return () => clearInterval(slider)
	},[index])
	useEffect(()=> {
		const lastIndex = carousels.length - 1;
		if (index < 0){
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	},[index,carousels]);
	useEffect(()=> {
		toGetData();
	},[])
	const toGetData = async () => {
		try {
			const response = await fetch('api/carousel/');
			const carousel = await response.json();
			setCarousel(carousel);
			setLoading(false);
		}
		catch (err) {
			setCarousel([]);
		}
	}
	if (loading) {
		return <Loading/>
	}
	return (
		<div className = 'container'>
			<div className='row mt-5 mb-3'>
				<div className='col-1'>
					<i className='ti ti-arrow-circle-left center' onClick = {() => setIndex(index-1)}></i>
				</div>
				<div className='col-10'>
					<div className='wrapper'>
					{
						carousels.map((carousel, personIndex) => {
							let position = 'card shadow employe activenextSlide';
							if (personIndex === index) {
								position = 'card shadow employe activeSlide';
							}
							if (personIndex === index - 1 || (index === 0 && personIndex === carousel.lenght - 1)){
								position = 'card shadow employe activelastSlide';
							}
							return <Card position={position} key = {carousel.id} carousel = {carousel}/>
						})
					}
					</div> 
				</div>
				<div className='col-1'>
					<i className='ti ti-arrow-circle-right center' onClick = {() => setIndex(index+1)}></i>
				</div>
			</div>
		</div>
		)
}
export default App;