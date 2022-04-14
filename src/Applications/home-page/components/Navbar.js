import logo from '../image/logo.svg';
import { useGlobalData } from './context';
import Modal from './Modal';
const Navbar = () => {
    const { isOpenSidebar, openSidebar, closeSidebar } = useGlobalData();
    return (
        <div className='navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2'>

            <div className='container'>
                <a className="navbar-brand mr-lg-5" href="/">
                    <img src={logo} alt="logo" className='img-fluid' />
                </a>
                <button onClick={openSidebar} className="navbar-toggler collapsed"  >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <>
                <div className={`navbar-collapse collapse ${isOpenSidebar?"show":""}`}>
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <a href="./index.html">
                                    <img src={logo} className="img-fluid" alt="logo" />
                                </a>
                                <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link">
                                            <i className="ni ni-ui-04 d-lg-none"></i>
                                            <span className="nav-link-inner--text">Home</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <a href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html" class="media d-flex align-items-center">
                                                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-spaceship"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="heading text-primary mb-md-1">Getting started</h6>
                                                        <p className="description d-none d-md-inline-block mb-0">Learn how to use compiling Scss, change brand colors and more.</p>
                                                    </div>
                                                </a>
                                                <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html" className="media d-flex align-items-center">
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-palette"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="heading text-primary mb-md-1">Foundation</h6>
                                                        <p className="description d-none d-md-inline-block mb-0">Learn more about colors, typography, icons and the grid system we used for .</p>
                                                    </div>
                                                </a>
                                                <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html" className="media d-flex align-items-center">
                                                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-ui-04"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h5 className="heading text-warning mb-md-1">Components</h5>
                                                        <p className="description d-none d-md-inline-block mb-0">Browse our 50 beautiful handcrafted components offered in the Free version.</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link">
                                            <i className="ni ni-ui-04 d-lg-none"></i>
                                            <span className="nav-link-inner--text">About</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <a href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html" className="media d-flex align-items-center">
                                                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-spaceship"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="heading text-primary mb-md-1">Getting started</h6>
                                                        <p className="description d-none d-md-inline-block mb-0">Learn how to use compiling Scss, change brand colors and more.</p>
                                                    </div>
                                                </a>
                                                <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html" className="media d-flex align-items-center">
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-palette"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="heading text-primary mb-md-1">Foundation</h6>
                                                        <p className="description d-none d-md-inline-block mb-0">Learn more about colors, typography, icons and the grid system we used for .</p>
                                                    </div>
                                                </a>
                                                <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html" className="media d-flex align-items-center">
                                                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-ui-04"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h5 className="heading text-warning mb-md-1">Components</h5>
                                                        <p className="description d-none d-md-inline-block mb-0">Browse our 50 beautiful handcrafted components offered in the Free version.</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link">
                                            <i className="ni ni-ui-04 d-lg-none"></i>
                                            <span className="nav-link-inner--text">Contact</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="./examples/landing.html" className="dropdown-item">Landing</a>
                                            <a href="./examples/profile.html" className="dropdown-item">Profile</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link">
                                            <i className="ni ni-ui-04 d-lg-none"></i>
                                            <li className="nav-item dropdown">
                                                <a href="#" className="nav-link" data-toggle="dropdown" href="#" role="button">
                                                    <i className="ni ni-collection d-lg-none"></i>
                                                    <span className="nav-link-inner--text">Product</span>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="./examples/landing.html" className="dropdown-item">Landing</a>
                                                    <a href="./examples/profile.html" className="dropdown-item">Profile</a>
                                                </div>
                                            </li>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link">
                                            <i className="ni ni-ui-04 d-lg-none"></i>
                                            <li className="nav-item dropdown">
                                                <a href="#" className="nav-link" data-toggle="dropdown" href="#" role="button">
                                                    <i className="ni ni-collection d-lg-none"></i>
                                                    <span className="nav-link-inner--text">Login</span>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="./examples/landing.html" className="dropdown-item">Landing</a>
                                                    <a href="./examples/profile.html" className="dropdown-item">Profile</a>
                                                </div>
                                            </li>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 collapse-close">
                                <button onClick={closeSidebar} type="button" className="navbar-toggler  " data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                <Modal/>
            </div>
        </div>
    )
}
export default Navbar;