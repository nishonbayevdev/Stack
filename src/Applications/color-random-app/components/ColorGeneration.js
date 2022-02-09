import {Component} from 'react';
class ColorGeneration extends Component {
	state = {color : 'ffffff'}
	toGenerateColor = () => {
		let hexStack = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
		let colorCollection = ''
		for (let i = 0 ; i < 6 ; i++) {
			colorCollection += (hexStack[Math.floor(Math.random() * 16)])
		}
		this.setState({color:colorCollection})
	}
	render () {
		return (
				<div>
					<div className = 'wrapper display-center' style = {{backgroundColor: '#' + this.state.color}}>
						<div className='container'>
							<div className = 'row'>
								<div className = 'col-xl-6 col-lg-6 offset-lg-3 offset-xl-3 col-md-10 offset-md-1 col-sm-12'>
									<div className='card shadow'>
										<div className = 'card-body text-align-center'>
											<div className='card-color'>
												#{this.state.color}
											</div>
										</div>
										<div className = 'card-footer text-align-center'>
											<button onClick = {this.toGenerateColor} className = 'btn btn-dark'>Generate</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
				)
	}
}
export default ColorGeneration;