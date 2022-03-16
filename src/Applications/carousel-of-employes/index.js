import {PureComponent , Fragment} from 'react'
import Corousel from './components/Corousel.js';
import './css/style.css';
class App extends PureComponent {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<Fragment>
				<div className='wrapper'>
					<Corousel/>
				</div>
			</Fragment>
			)
	}
}
export default App;