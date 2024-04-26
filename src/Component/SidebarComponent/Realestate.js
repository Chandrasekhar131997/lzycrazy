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
    faCompassDrafting,
    faPenRuler,
    faWrench,
    faChair,
    faPlugCircleCheck,
    faPalette
} from '@fortawesome/free-solid-svg-icons';
const Realestate = () => {

    const navigate = useNavigate(); 

  
    const handleClick = () => {
      navigate('/'); 
    };

    return (
        <div className='row'>
            <div className='col-md-2 col-4 box'>
            <div className='d-flex'>
            <h2 className='text-head fw-bold'>Real Estate</h2>
            <button className='border-0' onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-symbol fs-1' />
      </button>
            </div>
            <div className='mt-4 p-2 sidebar-style'>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faKey} className='icon-circle' />
                    <p className='icon-name'>Rent</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faMoneyBill1} className='icon-circle'/>
                    <p className='icon-name'>Buy</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuilding} className='icon-circle' />
                    <p className='icon-name'>Commercials</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faHandshake} className='icon-circle' />
                    <p className='icon-name'>Property Dealer</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faBuildingUser} className='icon-circle' />
                    <p className='icon-name'>Builder</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faFileSignature} className='icon-circle' />
                    <p className='icon-name'>Contractor</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faCompassDrafting} className='icon-circle' />
                    <p className='icon-name'>Interior Designer</p>
                </a>

                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPenRuler} className='icon-circle' />
                    <p className='icon-name'>Architecture</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faWrench} className='icon-circle' />
                    <p className='icon-name'>Plumber</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faChair}className='icon-circle' />
                    <p className='icon-name'>Carpenter</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPlugCircleCheck} className='icon-circle' />
                    <p className='icon-name'>Electician</p>
                </a>
                <a href='/' className='icon-text'>
                    <FontAwesomeIcon icon={faPalette} className='icon-circle' />
                    <p className='icon-name'>Painter</p>
                </a>
            </div>
        </div>
        <div className='col-md-10 col-8'>
            <Content/>
        </div>
        </div>
    )
}

export default Realestate
