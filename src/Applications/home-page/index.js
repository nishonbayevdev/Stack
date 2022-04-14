import React from 'react';
import App from './components/App';
import {AppProvider} from './components/context';
import './css/style.css'
class Main extends React.Component {
	constructor () {
		super();
	}
	render () {
		return (
				<React.Fragment>
					<AppProvider>
						<App/>
					</AppProvider>
				</React.Fragment>
				)
	}
}
export default Main;