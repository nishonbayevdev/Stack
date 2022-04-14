import {Fragment , Component} from 'react';
import Loading from './components/Loading';
import Filter from './components/Filter';
import List from './components/List'

import './css/style.css'
class App extends Component {
	constructor (props) {
		super(props);
		this.state = {foods : [] , filter:[] , stars :[], saveFoods:[]}
	}
	async componentDidMount() {
		try {
			const res = await fetch('api/foods/');
			const foods = await res.json();
			this.setState({foods:foods});
			this.setState({saveFoods:foods})
			const newFilter = new Set();
			for (const food of this.state.foods) {
				newFilter.add(food.catagory.catagory);
			}
			this.setState({filter:['all' , ...newFilter]})
		}
		catch (err) {
			this.setState({foods:[]})
		}
	}

    onChangeFilter = (filterFoods) => {
		if (filterFoods === 'all') {
			this.setState({foods : this.state.saveFoods})
		}
		else {
			const newFoods = this.state.saveFoods.filter(food => food.catagory.catagory === filterFoods);
			this.setState({foods:newFoods});
		}
	}
	
	render () {
		if (this.state.foods.length === 0){
			return <Loading/>
		}
		else {
			return (
				<Fragment>
					<div className='container'>
						<div className ='row'>
							<div className='col-12 mt-3 mb-3 text-align-center mt-5'>
								<h3 className='text-light'>Our Menu </h3>
								<span className ='tag-line'></span>
							</div>
							<div className='col-10 offset-1 mt-3 mb-3'>
								<div className='block-center'>
									{
										this.state.filter.map((food , index) => {
											return <Filter key = {index} catagory = {food} onChangeFoods = {this.onChangeFilter}/>
										})
									}
								</div>
							</div>
							<div className='col-12 mt-3 mb-3'>
								<div className='row'>
									{
										this.state.foods.map((food) => {
											return (<List key = {food.id} food = {food}/>)
										})
									}
								</div>
							</div>
						</div>
					</div>
				</Fragment>
				)
		}
	}
}
export default App;