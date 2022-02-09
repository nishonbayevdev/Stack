import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
//import CommentApp from './Applications/comment-app/index';
//import CounterApp from './Applications/counter-app/index';
import ColorRandom from './Applications/color-random-app/index'
class Main extends React.Component {
	render () {
		return (
				<div className = 'root'>
					{/*<CommentApp/>*/}
					{/*<CounterApp/>*/}
					<ColorRandom/>
				</div>
				)
	}
}
ReactDOM.render(<Main/> , document.getElementById('root'));