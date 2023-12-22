import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = ()=>{
    return(
        <Navbar expand="lg" className="bg-gray-900 rounded">
        <Navbar.Brand href="#home"><strong className='text-white'>D</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end text-white">
            <Nav.Link className='text-light' href="#home">About</Nav.Link>
            <Nav.Link className='text-light' href="#projects">Projects</Nav.Link>
            <Nav.Link className='text-light' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    )
}