import React from 'react'
import Content from '../Dashboard/Content';
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
    return (
        <div className='box row'>
            <div className='col-md-2'>
            <h2 className='fs-3 fw-bold'>Self Made</h2>
            <button className='border-0'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
            <div className='mt-4 border border-1 p-2 rounded-2'>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faGem} className='icon-circle' />
                    <p>Artificial Jewellery</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faShirt} className='icon-circle' />
                    <p>Cloth/Stitching</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faGift} className='icon-circle' />
                    <p>Gift Basket</p>
                </a>
                <a href='/' className='icon-text'>
                <FontAwesomeIcon icon={faBagShopping} className='icon-circle' />
                    <p>Handbags</p>
                </a>
                <a href='/' className='icon-text'>
                <FontAwesomeIcon icon={faHouseMedicalCircleCheck} className='icon-circle' />
                    <p>Home Decor</p>
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



export default Selfmade
