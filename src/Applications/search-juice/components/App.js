import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Detail from './Detail';
import Http404 from './Http404';
class App extends React.PureComponent {
	constructor () {
		super ();
	}
	render () {
		return <div>
					<Router>
						<Routes>
							<Route exact path='/' element ={<Home/>} />
							<Route exact path='/about' element ={<About/>} />
							<Route exact path='/detail/:id' element ={<Detail/>} />
							<Route exact path='*' element ={<Http404/>} />
						</Routes>
					</Router>
				</div>
	}
}

export default App;