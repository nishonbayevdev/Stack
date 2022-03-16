import { PureComponent , Fragment} from 'react';

// import css file
import './css/style.css'
// import card
import Card from './components/Card'
import Loading from './components/Loading'
class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {tours : [],storeTours:[] , loading : true}
	}
	async componentDidMount() {
			try {
				const res = await fetch('http://127.0.0.1:8000/api/tours/');
				const tours = await res.json();	
				this.setState({tours:tours , storeTours:tours,loading : false});

			}
			catch(err) {
				this.setState({tours:[]});
			}
	}
	deleteCard = (id) => {
		const newTours = this.state.tours.filter((tour) => tour.id !== id)
		this.setState({tours : newTours})
	}	
	
	render () {
		if (this.state.loading) {
			return (<div> <Loading/> </div>)
		}
		else {
			return (
				<Fragment>
					<div className='container mt-1 mb-1'>
						<div className='row'>
							<div className='col-12 mb-5 mt-5'>
								<h2 className='text-muted mt-3 mb-3 text-align-center'>About Tours</h2>
								<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. </p>
								{this.state.tours.length === 0 ?<button className='btn btn-light' onClick={()=>this.setState({tours:this.state.storeTours})}>Refresh</button> : '' } 
							</div>
						</div>
						<div className='row mt-3 mb-3'>
							{this.state.tours.map((tour) => {
								return <Card deleteCard={this.deleteCard} tour = {tour} key={tour.id}/>

							})}
						</div>
					</div>
				</Fragment>
			)
		}
	}
}
export default App;