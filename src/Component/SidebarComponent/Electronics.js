import React from 'react';
import Content from "../Dashboard/Content";
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
    return (
        <div className='box row'>
            <div className='col-md-2'>
            <h2 className='fs-3 fw-bold'>Electronics</h2>
            <button className='border-0'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
            <div className='mt-4 border border-1 p-2 rounded-2'>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faKey} className='icon-circle' />
                    <p>Ac</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faMoneyBill1} className='icon-circle' />
                    <p>Cameras & Lenses</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuilding} className='icon-circle' />
                    <p>Computer/Laptop</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faHandshake} className='icon-circle' />
                    <p>Fridge</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuildingUser} className='icon-circle' />
                    <p>Kitchen Appliances</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faFileSignature} className='icon-circle' />
                    <p>Printers</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p>TV</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p>Washing Machines</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p>Coming Soon</p>
                </a>
            </div>
            </div>
            <div className='col-md-10'>
                <Content/>
            </div>
        </div>
    )
}

export default Electronics
