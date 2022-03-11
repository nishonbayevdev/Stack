import {Component} from 'react';


import '../../asserts/css/main.css';
import './css/style.css';

import SearchApp from './components/Search';
import Data from './components/Data'

class Search extends Component {
	onTakeDataAndShareNextTag = (data) => {
			console.log(data)
	}
	render () {
		return (
				<div>
					<SearchApp onSendQuery = {this.onTakeDataAndShareNextTag}/>
				</div>
				)
	}
}
export default Search;