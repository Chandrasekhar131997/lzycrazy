import React from 'react';
import Content from '../Dashboard/Content';
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
  return (
    <div className='box row'>
      <div className='col-md-2'>
      <h2 className='fs-3 fw-bold'>Rental Item</h2>
      <button className='border-0'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
      <div className='mt-4 border border-1 p-2 rounded-2'>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faTemperatureArrowDown} className='icon-circle' />
          <p>Ac</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faLaptop} className='icon-circle' />
          <p>Computer/Laptop</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faShirt} className='icon-circle' />
          <p>Costume/Cloth</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faHandshake} className='icon-circle' />
          <p>Fridge</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faBuildingUser} className='icon-circle' />
          <p>Furniture</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faFileSignature} className='icon-circle' />
          <p>Home Appliance</p>
        </a>
        <a href='/' className='icon-text'>
        <FontAwesomeIcon icon={faPalette} className='icon-circle' />
          <p>Inverter</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faCube} className='icon-circle' />
          <p>Coming Soon</p>
        </a>
      </div>
    </div>
    <div className='col-md-10'>
      <Content/>
    </div>
    </div>
  );
}

export default Rentalitem
