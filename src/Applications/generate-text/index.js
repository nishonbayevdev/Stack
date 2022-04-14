import {PureComponent , Fragment} from 'react';
import Data from './components/data';

import './css/style.css';
class App extends PureComponent {
	constructor (props) {
		super(props);
		this.state = {count : 0 , text : [] , data : Data }
	}
	onGenerateText = (event) => {
		event.preventDefault();
		if (typeof this.state.count !== undefined && this.state.count !== '') {

			const count = parseInt(this.state.count);
			if (count <= 0) {
				this.setState({text:this.state.data.slice(0,1)});
			}
			else if (count > 0 && count < this.state.data.length) {
				this.setState({text:this.state.data.slice(0,count)})	
			}
			else {
				this.setState({text:this.state.data.slice(0 , this.state.data.length )})
			}
		}
		else {
			this.setState({err:true})
		}
	}  
	onGetValue = (event) => {
		this.setState({count:event.target.value})
	}
	render () {
		return (
				<Fragment>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<h3 className='text-light mt-5 text-align-center'>Hello There We can generate text</h3>
							</div>
							<div className='col-12 mt-3 mb-3'>
								<div className='wrapper'>
									<h4 className='text-success mb-2 mt-2 text-align-center'>Generate text</h4>	
									<form className='d-flex mt-3 mb-3 generate' onSubmit={this.onGenerateText}> 
										<input type='number' name='count' className='form-control' value = {this.state.count} onChange ={this.onGetValue} placeholder='For example 3 ...'/>
										<button className='btn btn-primary'>generate</button>
									</form>
								</div>
							</div>
							<div className="col-10 offset-1">
								<div className='text-muted'>
									{
										 this.state.text.map((item , index) => {
											return <p className='text-muted' key = {index}>{item}</p>
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
export default App;