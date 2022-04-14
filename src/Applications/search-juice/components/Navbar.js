import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2'>

            <div className='container'>
                    <Link to='/' className="navbar-brand mr-lg-5">
                        Juice
                    </Link>
                <>
                <ul className='menu'>
                    <li className='menu-item'> 
                        <Link to='/' className="navbar-brand mr-lg-5">
                            Home
                        </Link>
                    </li>
                    <li className='menu-item'> 
                        <Link to='/about' className="navbar-brand mr-lg-5">
                            About
                        </Link>
                    </li>
                </ul>
                </>
            </div>
        </div>
    )
}
export default Navbar;