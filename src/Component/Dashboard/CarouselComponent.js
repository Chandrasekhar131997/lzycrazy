import React from 'react'
import Carousel from "react-bootstrap/Carousel"
const CarouselComponent = () => {
  return (
    <div>
  <div className='row'>
<div className='col-md-6'>
      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-1.png' alt="banner-1" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-2.jpg' alt="banner-2" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-3.jpg' alt="banner-3" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-4.jpg' alt="banner-4" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-5.jpg' alt="banner-5" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-3.jpg' alt="banner-3" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      </div>
      <div className='col-md-6'>
       
      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-6.jpg' alt="banner-6" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-7.jpg' alt="banner-7" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-8.jpg' alt="banner-8" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Carousel className='carousel-content'>
        <Carousel.Item>
          <img src='../Images/banner-6.jpg' alt="banner-6" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-7.jpg' alt="banner-7" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='../Images/banner-9.jpg' alt="banner-9" style={{ width: "100%", height: "250px" }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
 
      </div>
      </div> 
    </div>
  )
}

export default CarouselComponent
