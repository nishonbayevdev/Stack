import React from 'react';
import Data from './Data'
class SearchApp extends React.Component {
	state = {dataKey : '',data:[]}
	onTypeSearch = (e) => {
		this.setState({dataKey:e.target.value})
	}

	onClickSubmit = (e) => {
		e.preventDefault()
		try {
			this.props.onSendQuery(this.state.dataKey)
			try {
				fetch(`http://127.0.0.1:8000/api/images/?query=${this.state.dataKey}&token=adasdlasmdlksa5a1d5s1d51d21cs21csd0c2`)
			.then(res => res.json())
				.then((json) => {
					
					this.setState({data:json})
				})
			}
			catch (e) {
				this.setState({data:[]})	
			}
		}
		catch (e) {
			this.setState({data:[]})
		}
	}
	render () {
		return (
				<div>
					<div className = 'wrapper'>
						<div className = 'container h-5'>
							<div className = 'row'>
								<div className = 'col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12'>
									<form onSubmit = {this.onClickSubmit} className = 'flex'>
										<input onChange = {this.onTypeSearch} type = 'text' className = 'form-control' placeholder="Search" />
										<button className = 'btn btn-white'>Send</button>
									</form>
								</div>
								<div className='col-12'>
									<Data data = {this.state.data}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				)
	}
}
export default SearchApp;