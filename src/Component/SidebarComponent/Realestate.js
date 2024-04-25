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
    faCompassDrafting,
    faPenRuler,
    faWrench,
    faChair,
    faPlugCircleCheck,
    faPalette
} from '@fortawesome/free-solid-svg-icons';
const Realestate = () => {
    return (
        <div className='box row'>
            <div className='col-md-2'>
            <h2 className='fs-3 fw-bold'>Reale State</h2>
            <button className='border-0'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
            <div className='mt-4 border border-1 p-2 rounded-2'>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faKey} className='icon-circle' />
                    <p>Rent</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faMoneyBill1} className='icon-circle'/>
                    <p>Buy</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuilding} className='icon-circle' />
                    <p>Commercials</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faHandshake} className='icon-circle' />
                    <p>Property Dealer</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuildingUser} className='icon-circle' />
                    <p>Builder</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faFileSignature} className='icon-circle' />
                    <p>Contractor</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faCompassDrafting} className='icon-circle' />
                    <p>Interior Designer</p>
                </a>

                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPenRuler} className='icon-circle' />
                    <p>Architecture</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faWrench} className='icon-circle' />
                    <p>Plumber</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faChair}className='icon-circle' />
                    <p>Carpenter</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPlugCircleCheck} className='icon-circle' />
                    <p>Electician</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p>Painter</p>
                </a>
            </div>
        </div>
        <div className='col-md-10'>
            <Content/>
        </div>
        </div>
    )
}

export default Realestate
