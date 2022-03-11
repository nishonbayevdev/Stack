import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
//import CommentApp from './Applications/comment-app/index';
//import CounterApp from './Applications/counter-app/index';
//import ColorRandom from './Applications/color-random-app/index';
import SearchApp from './Applications/search-app/index';
class Main extends React.Component {
	render () {
		return (
				<div className = 'root'>
					{/*<CommentApp/>*/}
					{/*<CounterApp/>*/}
					{/*<ColorRandom/>*/}
					<SearchApp/>
				</div>
				)
	}
}
ReactDOM.render(<Main/> , document.getElementById('root'));