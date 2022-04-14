import logo from '../images/logo.svg'
import {useGlobalData} from './context';
const Sidebar = () => {
	const {isOpenSidebar , closeSidebar} = useGlobalData()
	return <aside className={`${isOpenSidebar?'sidebar-show' : 'sidebar-unshow'} sidebar-left`}>
		<div className='side-head'>
			<div className='row mt-3 mb-2'>
				<div className='col-10'>
					<img src={logo} alt="images" className='img-fluid' />
				</div>
				<div className='col-2'>
					<b onClick={closeSidebar} className='ti-x'>X</b>
				</div>
			</div>
			<div className='side-body'>
				<div className='row mt-3 mb-2'>
					<div className='col-12'>
						<div className='menu'>
							<ul className='menu-list'>
								<li className='menu-item'>
									<a className='text-muted' href="#"> 
										<i className='ti ti-home'>	
										</i>
										Home
									</a>
								</li>
								<li className='menu-item'>
									<a className='text-muted' href="#"> 
										<i className='ti ti-book'>	
										</i>
										About us
									</a>
								</li>
								<li className='menu-item'>
									<a className='text-muted' href="#"> 
										<i className='ti ti-car'>	
										</i>
										Product
									</a>
								</li>
								<li className='menu-item'>
									<a className='text-muted' href="#"> 
										<i className='ti ti-home'>	
										</i>
										Booking
									</a>
								</li>
								<li className='menu-item'>
									<a className='text-muted' href="#"> 
										<i className='ti ti-headphone-alt'>	
										</i>
										Contact
									</a>
								</li>
								<li className='menu-item'>
									<a className='text-muted' href="#"> 
										<i className='ti ti-location-arrow'>	
										</i>
										Location
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-12'>
						<div className='social'>
							<ul className='social-menu-list'>
								<li className='social-smenu-item'>
									<a href="#"> 
										<i className='ti ti-facebook'>	
										</i>
									</a>
								</li>
								<li className='social-smenu-item'>
									<a href="#"> 
										<i className='ti ti-instagram'>	
										</i>
									</a>
								</li>
								<li className='social-smenu-item'>
									<a href="#"> 
										<i className='ti ti-linkedin'>	
										</i>
									</a>
								</li>
								<li className='social-smenu-item'>
									<a href="#"> 
										<i className='ti ti-github'>	
										</i>
									</a>
								</li>
								<li className='social-smenu-item'>
									<a href="#"> 
										<i className='ti ti-google'>	
										</i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</aside>
}
export default Sidebar;