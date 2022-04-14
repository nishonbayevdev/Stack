
import {Navbar , Container , Nav} from 'react-bootstrap'
import logo from './image/logo.svg';
import './css/style.css'
const App = (props) => {
	const linkButton = {
		padding : '5px 30px',
		border  : '1px solid rgb(160,161,255)',
		borderRadius: '7px',
		textAlign:'center'
	}
	const onClose = (con) => {
		const btn = document.getElementById('basic-navbar-nav')
		if (con) {
			btn.classList.add('collapsing')
			
			btn.classList.remove('collapse')
		}
		else{
			btn.classList.remove('show')	
		}
	}


	return (
			<div>
					<Navbar bg="light" expand="lg" className='navbar'>
					  <Container>
					    <Navbar.Brand href="/" className = 'brand'>
					    	<img src={logo} alt="Image"/>
					    </Navbar.Brand>
					    <Navbar.Toggle onClick={() => onClose(true)} aria-controls="basic-navbar-nav" className='navbar-toogle'/>
					    <Navbar.Collapse className='navbar-collapse collapsing' id="basic-navbar-nav">
					      <Nav className="m-auto">
					      	<div onClick={() => onClose(false)} className='break text-danger'>
					      		X
					      	</div>
					        <Nav.Link href="#" className = 'nav-link__1'>Home</Nav.Link>
					        <Nav.Link href="#" className = 'nav-link__1'>About Us</Nav.Link>
					        <Nav.Link href="#" className = 'nav-link__1'>Our Service </Nav.Link>
					        <Nav.Link href="#" className = 'nav-link__1'>Responsibility</Nav.Link>
					        <Nav.Link href="#" className = 'nav-link__1'>Country</Nav.Link>
					        <Nav.Link href="#" className='button-hover' style = {linkButton}>Apply</Nav.Link>
					      </Nav>
					    </Navbar.Collapse>
					  </Container>
					</Navbar>
				</div>
		)
}
export default App;