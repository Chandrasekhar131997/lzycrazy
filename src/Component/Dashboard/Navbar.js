import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faShop,faGear,faMessage,faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { faBuysellads} from '@fortawesome/free-brands-svg-icons';
import {Container,Nav,Navbar} from 'react-bootstrap';

const Topbar = () => {
  return (
    <div className='section'>
    <Navbar expand="lg" className="bg-transparent n-wrapper">
      <Container  className='row' style={{maxWidth:"none"}}>
        <Navbar.Brand href="#home" className="col-md-2 col-lg-4 col-2">
          <img src="../Images/logo.webp" alt="logo" className='logo-style'/>
        </Navbar.Brand>
        {/* <Navbar.Collapse id="basic-navbar-nav" className='col-md-4'> */}
          <div className='col-md-2 col-lg-4 col-12 middle-content'>
          <Nav className="midle-parent">
            <Nav.Link href="/" className='midle-text text-white me-4 fw-bold'><FontAwesomeIcon icon={faHouse} className='icon-style' /><p className='midle-text2'>Home</p></Nav.Link>
            <Nav.Link href="/marketplace" className='midle-text text-white me-4 fw-bold'><FontAwesomeIcon icon={faShop} className='icon-style' /><p className='midle-text2'>Market Place</p></Nav.Link>
            <Nav.Link href="/postads" className='midle-text text-white me-4 fw-bold'><FontAwesomeIcon icon={faBuysellads} className='icon-style'/><p className='midle-text2'>Post Ads</p></Nav.Link>
          </Nav>
          </div>
        {/* </Navbar.Collapse> */}
        <div className='col-md-3 col-lg-4 col-9 nav-content'>
        <Nav className="midle-parent">
            <Nav.Link href="/" className='midle-text text-white me-2 fw-bold'><FontAwesomeIcon icon={faMessage} className='icon-style' /><p className='midle-text2'>Response</p></Nav.Link>
            <Nav.Link href="/marketplace" className='midle-text text-white me-2 fw-bold'><FontAwesomeIcon icon= {faGear} className='icon-style'/><p className='midle-text2'>Setting</p></Nav.Link>
            <Nav.Link href="/postads" className='midle-text text-white me-2 fw-bold'><FontAwesomeIcon icon={faCircleUser} className='icon-style' /><p className='midle-text2'>User Name</p></Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  </div>
  )
}

export default Topbar
