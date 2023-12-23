import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { faHtml5,faReact,faBootstrap,faCss3, faGit, faGithub, faGithubAlt, faGithubSquare, faLinkedin, faInstagram, faTiktok, } from '@fortawesome/free-brands-svg-icons'


export const Header = ()=>{
    return(
        <Navbar expand="lg" className="bg-gray-900 rounded " sticky={true}>
        <Navbar.Brand href="#home"><strong className='text-white'>D</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end text-white">
            <Nav.Link className='text-light' href="#about">About</Nav.Link>
            <Nav.Link className='text-light' href="#projects">Projects</Nav.Link>
            <Nav.Link className='text-light' href="#contact">Contact</Nav.Link>
          </Nav>
          <Navbar.Text>
          <div className='social-links d-flex gap-3 '>
                    <a className="" target='_blank' href='https://www.github.com/monkeyd87' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faGithubAlt} size='xl'/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/dennis-jackson-a5233824a/' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faLinkedin} size='xl'/></a>
                    <a target='_blank' href='https://www.instagram.com/mr.djack_art/' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faInstagram} size='xl'/></a>
                    <a target='_blank' href='https://www.tiktok.com/@mr_djartstudio' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faTiktok} size='xl'/></a>
                </div>
          </Navbar.Text>
        </Navbar.Collapse>
     
    </Navbar>
    )
}