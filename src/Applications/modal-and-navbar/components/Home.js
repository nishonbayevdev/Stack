import {useState , useContext } from 'react'; 
import {AppContext , useGlobalData} from './context';
const Home = () => {
	const {openModal , openSidebar} = useGlobalData();
	
	return <main className='wrapper'>
				<div className='side-btn'>
					<button onClick={ openSidebar } className='btn btn-white'> 
						<i className='line-1'></i>
						<i className='line-2'></i>
						<i className='line-1'></i>
						<i className='line-2'></i>
					</button>
				</div>
				<div className='modal-btn'>
					<button onClick={openModal } className='btn btn-dark text-success'>
						Modal
					</button>
				</div>
		   </main>
}
export default Home;