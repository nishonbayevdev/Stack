import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './asserts/css/main.css'
import './asserts/ti-icons/css/themify-icons.css'
//import CommentApp from './Applications/comment-app/index';
//import CounterApp from './Applications/counter-app/index';
//import ColorRandom from './Applications/color-random-app/index';
//import SearchApp from './Applications/search-app/index';
//import BirthDayPeople from './Applications/birth-day-people/index';
//import CountryVisit from './Applications/country-visit'
//import CarouselOfEmployes from './Applications/carousel-of-employes'
import Questions from './Applications/questions'
class Main extends React.Component {
	render () {
		return (
				<div className = 'root'>
					{/*<CommentApp/>*/}
					{/*<CounterApp/>*/}
					{/*<ColorRandom/>*/}
					{/* <SearchApp/>*/ }
					{/*<BirthDayPeople/>*/}
					{/*<CountryVisit/>*/}
					{/*<CarouselOfEmployes/>*/}
					<Questions/>
				</div>
				)
	}
}
ReactDOM.render(<Main/> , document.getElementById('root'));