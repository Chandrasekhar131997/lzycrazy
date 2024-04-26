import React from 'react';
import Content from "../Dashboard/Content";
import { useNavigate } from 'react-router-dom';
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


  const navigate = useNavigate(); 

  
  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <div className='row'>
    <div className='col-md-2 col-4 box'>
     <div className='d-flex'>
     <h2 className='text-head fw-bold'>Direct By Farm</h2>
      <button className='border-0' onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
     </div>
      <div className='mt-4 p-2 sidebar-style'>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faCarrot} className='icon-circle' />
          <p className='icon-name'>Vegetables</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faAppleWhole} className='icon-circle' />
          <p className='icon-name'>Fruits</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faWheatAwn} className='icon-circle' />
          <p className='icon-name'>Grains</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faVanShuttle} className='icon-circle' />
          <p className='icon-name'>Milk</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faEgg} className='icon-circle' />
          <p className='icon-name'>Eggs</p>
        </a>
        <a href='/' className='icon-text'>
          <FontAwesomeIcon icon={faFish} className='icon-circle' />
          <p className='icon-name'>Fish</p>
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

export default Directbyfarm;
