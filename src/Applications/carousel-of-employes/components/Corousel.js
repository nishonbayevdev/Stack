import {useState , useEffect} from 'react';

const Corousel = (props) => {
	const [employesdata , setEmploye] = useState([])
	const [index , setIndex] = useState(0)
	
	useEffect( () => {
		employes()
	},[])

	const employes = async () => {
		try {
			const res = await fetch('/api/employes');
			const employe = await res.json();
			setEmploye(employe);
		}
		catch(err) {
			setEmploye([]);
		}
	}
	if (employesdata.length === 0) {
		return <h1 className='text-dark'>Loading...</h1>
	}
	else {
		const prevCard = () => {
			if (index >= 1){
				setIndex(index - 1);
			}
			else {
				setIndex(employesdata.length - 1)
			}
		}
		const nextCard = () => {
			if (index < employesdata.length - 1){
				setIndex(index + 1);
			}
			else {
				setIndex(0)
			}
		}
		const randomSelect = () => {
			const randIndex =  Math.floor(Math.random() * (employesdata.length - 1)); 
			setIndex(randIndex);
		}
		const {img , name , profession , hobby , facebook , instagram , linkedin , github} = employesdata[index];
		return (
			<div className='card shadow carousel'>
				<div className='card-body'>
					<div className='card-img'>
						<img src={img} alt={name} className='img-fluid rounded' />
					</div>
					<div className='text-wrapper'>
						<h4 className='text-info'>{name}</h4>
						<p className='text-light'>{profession}</p>
						<p className='text-muted'>{hobby}</p>
					</div>
					<ul className='menu'>
						<li className='menu-item'>
							<a href={facebook}  target="_blank">
								<i className='ti ti-facebook'></i>
							</a>
						</li>
						<li className='menu-item'>
							<a href={instagram} target="_blank">
								<i className='ti ti-instagram'></i>
							</a>
						</li>
						<li className='menu-item' target="_blank">
							<a href={github}>
								<i className='ti ti-github'></i>
							</a>
						</li>
						<li className='menu-item'  target="_blank">
							<a href={linkedin}>
								<i className='ti ti-linkedin'></i>
							</a>
						</li>
					</ul>
				</div>

				<div className='card-footer'>
					<div className='row'>
						<div className='col-3'>
							<i className='ti ti-arrow-left slide' onClick={prevCard}></i>
						</div>
						<div className='col-6'>
							<button className='btn btn-success' onClick={randomSelect}>Select<i className='ti-check'></i></button>
						</div>
						<div className='col-3'>
							<i className='ti ti-arrow-right slide' onClick={nextCard}></i>
						</div>
					</div>
				</div>
			</div>
			)
	}
}


export default Corousel;