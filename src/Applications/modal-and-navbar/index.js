import {AppProvider} from './components/context';
import App from './components/App';
import './css/style.css'
const Main = () => {
	return <main className='wrapper'>
				<AppProvider>
					<App/>
				</AppProvider>
			</main>
}
export default Main;