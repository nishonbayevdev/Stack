import Loading from './Loading';
import Navbar from './Navbar';
import Search from './Search';
import JuiceList from './JuiceList';
import {useGolobalContext} from './context';
const Home = () => {
	const {drinks , loading , searchJuice} = useGolobalContext();
	return <div className='wrapper'>
				<Navbar/>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h3 className='text-muted text-align-center mt-5 mb-3'>
								Search Juice
							</h3> 
							<div className='row'>
								<Search/>
							</div>
							<div className='row'>
								{
									loading ? 
									<Loading/>:
									drinks.map((drink) => {
										return <JuiceList key={drink.id} {...drink} />
									})
								}
							</div>
						</div>
					</div>
				</div>
		   </div>
}
export default Home;