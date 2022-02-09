import {Component} from 'react';

class CounterComponent extends Component {
	constructor (props) {
		super(props);
		this.state = { count : 0}
		//this.decriese.bind(this)
	}
	increise = () => {
			this.setState( {count : this.state.count + 1} )
		}
	decriese = () => {
			this.setState( {count : this.state.count - 1} )
		}
	clear = () => {
			this.setState( {count : 0} )
		}
	render () {
		//console.log(this.state.count)
		return (
				<div className = 'container'>
					<div className = 'row'>
						<div className = 'col-lg-6 col-xl-6 offset-xl-3 offset-lg-3  col-md-12 col-sm-12'>
							<div className = 'card shadow'>
								<div className = 'card-body'>
									<h1 className = 'text-primary mt-4 mb-1 text-align-center'>{this.state.count}</h1>
								</div>
								<div className = 'card-footer text-align-center'>
									<button className = 'btn btn-danger count-btn' onClick = {this.decriese}>
										Decriese
									</button>
									<button className = 'btn btn-light count-btn' onClick = {this.clear}>
										Clear
									</button>
									<button className = 'btn btn-success count-btn' onClick = {this.increise}>
										Increise
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				)
	}
}
export default CounterComponent;
