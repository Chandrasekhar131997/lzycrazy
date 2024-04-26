import React from 'react'
import Carousel from "react-bootstrap/Carousel"
const CarouselComponent = () => {
  return (
    <div>
  <div className='row'>
<div className='col-md-6'>
      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-1.png' alt="banner-1" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-2.jpg' alt="banner-2" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-3.jpg' alt="banner-3" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
      </Carousel>


      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-4.jpg' alt="banner-4" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-5.jpg' alt="banner-5" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-3.jpg' alt="banner-3" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
      </Carousel>

      </div>
      <div className='col-md-6'>
       
      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-6.jpg' alt="banner-6" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-7.jpg' alt="banner-7" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-8.jpg' alt="banner-8" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
      </Carousel>


      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-6.jpg' alt="banner-6" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-7.jpg' alt="banner-7" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-9.jpg' alt="banner-9" className='carousel-img' style={{ width: "100%"}} />
        </Carousel.Item>
      </Carousel>
 
      </div>
      </div> 
    </div>
  )
}

export default CarouselComponent
