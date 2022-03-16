import React from 'react';
import '../../asserts/css/main.css';
import './css/style.css';


import data from './components/data';
import List from './components/List'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data : data} 
	}
	render () {
		return (
			<React.Fragment>
				<div className='container'>
					<div className='row'>
						<div className='col-12 wrapper'>
							<div className='card shadow card-birth'>
								<div className='card-head'>
									<h3 className = 'text-info'>Birth person count <span className = 'text-muted count'> {this.state.data.length}</span>  </h3>
								</div>
								<div className='card-body'>
									{this.state.data.map((person) => {
										return <List people = {person} key={person.id}/>
									})}
								</div>
								<div className='card-footer wrapper'>
									<button className='btn btn-success' onClick = {() => this.setState({data:[]})}>Clear All</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
			)
	}
}
export default App;