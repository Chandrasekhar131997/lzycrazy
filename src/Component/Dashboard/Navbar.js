import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faShop,faGear} from '@fortawesome/free-solid-svg-icons';
import { faBuysellads} from '@fortawesome/free-brands-svg-icons';
import {Container,Nav,Navbar} from 'react-bootstrap';

const Topbar = () => {
  return (
    <div className='section'>
    <Navbar expand="lg" className="bg-transparent n-wrapper">
      <Container  className='row' style={{maxWidth:"none"}}>
        <Navbar.Brand href="#home" className="col-md-4">
          <img src="../Images/logo.webp" alt="logo" style={{height:"40px"}}/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className='col-md-4'>
          <Nav className="midle-parent">
            <Nav.Link href="/" className='midle-text text-white me-2 fw-bold'><FontAwesomeIcon icon={faHouse} style={{height:"20px",color:"black"}} /><p className='midle-text2'>Home</p></Nav.Link>
            <Nav.Link href="/marketplace" className='midle-text text-white me-2 fw-bold'><FontAwesomeIcon icon={faShop} style={{height:"20px",color:"black"}} /><p className='midle-text2'>Market Place</p></Nav.Link>
            <Nav.Link href="/postads" className='midle-text text-white me-2 fw-bold'><FontAwesomeIcon icon={faBuysellads} style={{height:"20px",color:"black"}}/><p className='midle-text2'>Post Ads</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="midle-parent col-md-4">
            <Nav.Link href="/" className='midle-text text-white me-2 fw-bold'><img src="../Images/message.png" alt='msg' style={{height:"20px"}} /><p className='midle-text2'>Response</p></Nav.Link>
            <Nav.Link href="/marketplace" className='midle-text text-white me-2 fw-bold'><FontAwesomeIcon icon= {faGear} style={{height:"20px",color:"black"}}/><p className='midle-text2'>Setting</p></Nav.Link>
            <Nav.Link href="/postads" className='midle-text text-white me-2 fw-bold'><img src='../Images/userimg.jpg' alt='profile'className='rounded-circle' style={{height:"20px"}} /><p className='midle-text2'>User Name</p></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  </div>
  )
}

export default Topbar
