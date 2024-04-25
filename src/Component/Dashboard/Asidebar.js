import React from 'react'
import {Link} from "react-router-dom";
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
  return (
    <div className='box'>
      <h2 className='fs-3 fw-bold'>Categories</h2>
      <div className='mt-4 border border-1 p-2 rounded-2'>
      <Link to='/directbyfarm' className='icon-text'> <FontAwesomeIcon icon={faPeopleRoof} className='icon-circle' /><p>Direct By Farm</p></Link>
      <Link to='/selfmade' className='icon-text'> <FontAwesomeIcon icon={faObjectGroup} className='icon-circle' /><p>Self Made</p></Link>
      <Link to='/rentalitem' className='icon-text'> <FontAwesomeIcon icon={faHandshake} className='icon-circle' /><p>Rental Items</p></Link>
      <Link to='/realestate' className='icon-text'><FontAwesomeIcon icon={faHouseLaptop} className='icon-circle' /><p>Real Estate</p></Link>
      <Link to='/' className='icon-text'> <FontAwesomeIcon icon={faCar} className='icon-circle'/><p>Vehicle</p></Link>
      <Link to='/' className='icon-text'><FontAwesomeIcon icon={faMobileScreen} className='icon-circle' /><p>Mobiles</p></Link>
      <Link to='/' className='icon-text'><FontAwesomeIcon icon={faCouch} className='icon-circle' /><p>Furniture</p></Link>
      <Link to='/' className='icon-text'><FontAwesomeIcon icon={faVest} className='icon-circle' /><p>Fashion</p></Link>
      <Link to='/electronics' className='icon-text'><FontAwesomeIcon icon={faPlugCircleCheck} className='icon-circle'/><p>Electronics</p></Link>
      <Link to='/' className='icon-text'><FontAwesomeIcon icon={faPeopleRoof} className='icon-circle' /><p>Coming Soon</p></Link>
      <Link to='/' className='icon-text'><FontAwesomeIcon icon={faPeopleRoof} className='icon-circle' /><p>Coming Soon</p></Link>
</div>
    </div>
  )
}

export default Asidebar
