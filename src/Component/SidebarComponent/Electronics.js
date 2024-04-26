import React from 'react';
import Content from "../Dashboard/Content";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faKey,
    faMoneyBill1,
    faBuilding,
    faHandshake,
    faBuildingUser,
    faFileSignature,
    faPalette
} from '@fortawesome/free-solid-svg-icons';

const Electronics = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); 
      };
    
    return (
        <div className='row'>
            <div className='col-md-2 col-4 box'>
           <div className='d-flex'>
           <h2 className='text-head fw-bold' >Electronics</h2>
           <button className='border-0' onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
           </div>
            <div className='mt-4 p-2 sidebar-style'>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faKey} className='icon-circle' />
                    <p className='icon-name'>Ac</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faMoneyBill1} className='icon-circle' />
                    <p className='icon-name'>Cameras & Lenses</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuilding} className='icon-circle' />
                    <p className='icon-name'>Computer/Laptop</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faHandshake} className='icon-circle' />
                    <p className='icon-name'>Fridge</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuildingUser} className='icon-circle' />
                    <p className='icon-name'>Kitchen Appliances</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faFileSignature} className='icon-circle' />
                    <p className='icon-name'>Printers</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p className='icon-name'>TV</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p className='icon-name'>Washing Machines</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p className='icon-name'>Coming Soon</p>
                </a>
            </div>
            </div>
            <div className='col-md-10 col-8'>
                <Content/>
            </div>
        </div>
    )
}

export default Electronics
