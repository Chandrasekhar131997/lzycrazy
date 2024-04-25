import React from 'react';
import Content from "../Dashboard/Content";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCarrot,
  faAppleWhole,
  faWheatAwn,
  faVanShuttle,
  faEgg,
  faFish,
  faCube
} from '@fortawesome/free-solid-svg-icons';

const Directbyfarm = () => {
  return (
    <div className='box row'>
    <div className='col-md-2'>
      <h2 className='fs-3 fw-bold'>Direct By Farm</h2>
      <button className='border-0'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
      <div className='mt-4 border border-1 p-2 rounded-2'>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faCarrot} className='icon-circle' />
          <p>Vegetables</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faAppleWhole} className='icon-circle' />
          <p>Fruits</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faWheatAwn} className='icon-circle' />
          <p>Grains</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faVanShuttle} className='icon-circle' />
          <p>Milk</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faEgg} className='icon-circle' />
          <p>Eggs</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faFish} className='icon-circle' />
          <p>Fish</p>
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

export default Directbyfarm;
