import {Component} from 'react';
import Card from './CardImg'
class Data extends Component {
	constructor(props){
		super(props);
	}
	render () {
		console.log(this.props.data)
		return (
				<div>
					<div className='container'>
						<div className='row'>
						{this.props.data  !== undefined && this.props.data !== []? this.props.data.map((data,index) => <Card key={index} data = {data}/>):""}
						</div>
					</div>
				</div>
				);
	}
}
export default Data;