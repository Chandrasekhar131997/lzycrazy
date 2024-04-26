import React from 'react';
import Content from '../Dashboard/Content';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faTemperatureArrowDown,
  faLaptop,
  faShirt,
  faHandshake,
  faBuildingUser,
  faFileSignature,
  faPalette,
  faCube
} from '@fortawesome/free-solid-svg-icons';
const Rentalitem = () => {

  const navigate = useNavigate(); 

  
  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <div className='row'>
      <div className='col-md-2 col-4 box'>
      <div className='d-flex'>
      <h2 className='text-head fw-bold'>Rental Item</h2>
      <button className='border-0' onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
      </div>
      <div className='mt-4 p-2 sidebar-style'>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faTemperatureArrowDown} className='icon-circle' />
          <p className='icon-name'>Ac</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faLaptop} className='icon-circle' />
          <p className='icon-name'>Computer/Laptop</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faShirt} className='icon-circle' />
          <p className='icon-name'>Costume/Cloth</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faHandshake} className='icon-circle' />
          <p className='icon-name'>Fridge</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faBuildingUser} className='icon-circle' />
          <p className='icon-name'>Furniture</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faFileSignature} className='icon-circle' />
          <p className='icon-name'>Home Appliance</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faPalette} className='icon-circle' />
          <p className='icon-name'>Inverter</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faCube} className='icon-circle' />
          <p className='icon-name'>Coming Soon</p>
        </a>
      </div>
    </div>
    <div className='col-md-10 col-8'>
      <Content/>
    </div>
    </div>
  );
}

export default Rentalitem
