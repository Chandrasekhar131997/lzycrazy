import React from 'react'
import Content from '../Dashboard/Content';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faGem,
    faShirt,
    faGift,
    faBagShopping,
    faHouseMedicalCircleCheck,
    faCube
} from '@fortawesome/free-solid-svg-icons';
const Selfmade = () => {

    const navigate = useNavigate(); 

  
    const handleClick = () => {
      navigate('/'); 
    };

    return (
        <div className='row '>
            <div className='col-md-2 col-4 box'>
           <div className='d-flex'>
           <h2 className='text-head fw-bold'>Self Made</h2>
            <button className='border-0' onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
           </div>
            <div className='mt-4 p-2 sidebar-style'>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faGem} className='icon-circle' />
                    <p className='icon-name'>Artificial Jewellery</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faShirt} className='icon-circle' />
                    <p className='icon-name'>Cloth/Stitching</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faGift} className='icon-circle' />
                    <p className='icon-name'>Gift Basket</p>
                </a>
                <a href='/' className='icon-text'>
                <FontAwesomeIcon icon={faBagShopping} className='icon-circle' />
                    <p className='icon-name'>Handbags</p>
                </a>
                <a href='/' className='icon-text'>
                <FontAwesomeIcon icon={faHouseMedicalCircleCheck} className='icon-circle' />
                    <p className='icon-name'>Home Decor</p>
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



export default Selfmade
