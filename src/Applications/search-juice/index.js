import React from 'react';
import App from './components/App';
import './css/style.css';
import {AppProvider} from './components/context';
class Main extends React.PureComponent {
	constructor (props) {
		super(props);
	}
	render () {
		return <AppProvider> 
					<App/>
				</AppProvider>
	}
}
export default Main;
