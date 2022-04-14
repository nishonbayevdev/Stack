import {Fragment , Component} from 'react';
import View from './components/View';
import Select from './components/Select';
import Loading from './components/Loading';
import './css/style.css'
class App extends Component {
	constructor (props) {
		super(props);
		this.state = {loading : true , devolopers : [] , select : 0};
	}
	async componentDidMount() {
		try {
			const response = await fetch('api/devolopers/');
			const devolopers = await response.json();
			this.setState({devolopers:devolopers});
			this.setState({loading : false});
			console.log(devolopers);
		}
		catch (err) {
			this.setState({devolopers:[]});
		}
	}
	onSelectDevoloper = (id) => {
		this.setState({select : id})
	}
	render () {
		if (this.state.loading) {
			return <Loading/> 
		}
		return (
				<Fragment>
					<div className='container'>
						<div className='row mt-3 mb-3'>
							<div className='col-12 text-align-center mt-5'>
								<h3 className='text-muted'>Our Devolopers</h3>
								<div className='underline'></div>
							</div>
							<div className='col-12 mt-5 mb-3'>
								<div className='row'>
									<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 text-align-center mt-3 mb-3'>
										{
											this.state.devolopers.map(({id , company} , index) => {
													return <Select onSelect = {this.onSelectDevoloper} key = {id} id={index} company = {company}/>
												} 

											)
										}
									</div>
									<div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 mt-3 mb-3'>
										<View devoloper = {this.state.devolopers[this.state.select]} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			)
	}
}
export default App;