import React from 'react';
import App from './components/App';
import './css/style.css'
import {AppProvider} from './components/context';
class Main extends React.Component {
	constructor () {
		super();
	}
	render () {
		return <AppProvider>
				<App/>
			   </AppProvider>
	}
}
export default Main;