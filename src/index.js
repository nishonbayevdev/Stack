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
//import Questions from './Applications/questions';
//import FilterList from './Applications/filter-list';
//import GetJob from './Applications/get-job';
//import Carousel from './Applications/carousel-bootstrap';
//import GenerateText from './Applications/generate-text';
//import ColorGenerate from './Applications/color-generate';
//import ToDoList from './Applications/todo-list';
//import Navbar from './Applications/navbar';
//import ModalAndNavbar from './Applications/modal-and-navbar';
//import HomePage from './Applications/home-page';
//import YoutubeClone from './Applications/youtube-clone';
//import Cart from './Applications/cart';
import SearchJuice from './Applications/search-juice';
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
					{/*<Questions/>*/}
					{/*<FilterList/>*/}
					{/*<GetJob/>*/}
					{/*<Carousel/>*/}
					{/*<GenerateText/>*/}
					{/* <ColorGenerate/> */}
					{/*<ToDoList/>*/}
					{/*<Navbar/>*/}
					{/*<ModalAndNavbar/>*/}
					{/*<HomePage/>*/}
					{/*<YoutubeClone/>*/}
					{/*<Cart/>*/}
					<SearchJuice/>
				</div>
				)
	}
}
ReactDOM.render(<Main/> , document.getElementById('root'));