import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faObjectGroup,
  faPeopleRoof,
  faHandshake,
  faHouseLaptop,
  faCar,
  faMobileScreen,
  faCouch,
  faVest,
  faPlugCircleCheck
}
  from '@fortawesome/free-solid-svg-icons';
const Asidebar = () => {

  const methodReload = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className='box-1'>
      <h2 className='text-head fw-bold'>Categories</h2>
      <div className='mt-2 p-2 sidebar-style'>
        <Link to='/directbyfarm' className='icon-text'> <FontAwesomeIcon icon={faPeopleRoof} className='icon-circle' /><p className='icon-name'>Direct By Farm</p></Link>
        <Link to='/selfmade' className='icon-text'> <FontAwesomeIcon icon={faObjectGroup} className='icon-circle' /><p className='icon-name'>Self Made</p></Link>
        <Link to='/rentalitem' className='icon-text'> <FontAwesomeIcon icon={faHandshake} className='icon-circle' /><p className='icon-name'>Rental Items</p></Link>
        <Link to='/realestate' className='icon-text'><FontAwesomeIcon icon={faHouseLaptop} className='icon-circle' /><p className='icon-name'>Real Estate</p></Link>
        <Link to='/' className='icon-text' onClick={methodReload}> <FontAwesomeIcon icon={faCar} className='icon-circle' /><p className='icon-name'>Vehicle</p></Link>
        <Link to='/' className='icon-text' onClick={methodReload}><FontAwesomeIcon icon={faMobileScreen} className='icon-circle' /><p className='icon-name'>Mobiles</p></Link>
        <Link to='/' className='icon-text' onClick={methodReload}><FontAwesomeIcon icon={faCouch} className='icon-circle' /><p className='icon-name'>Furniture</p></Link>
        <Link to='/' className='icon-text' onClick={methodReload}><FontAwesomeIcon icon={faVest} className='icon-circle' /><p className='icon-name'>Fashion</p></Link>
        <Link to='/electronics' className='icon-text'><FontAwesomeIcon icon={faPlugCircleCheck} className='icon-circle' /><p className='icon-name'>Electronics</p></Link>
        <Link to='/' className='icon-text' onClick={methodReload}><FontAwesomeIcon icon={faPeopleRoof} className='icon-circle' /><p className='icon-name'>Coming Soon</p></Link>
        <Link to='/' className='icon-text' onClick={methodReload}><FontAwesomeIcon icon={faPeopleRoof} className='icon-circle' /><p className='icon-name'>Coming Soon</p></Link>
      </div>
    </div>
  )
}

export default Asidebar
