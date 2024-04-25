import React from 'react'

import CarouselComponent from './CarouselComponent'


const Content = () => {
  return (
      
      <div className='box'>
    <div className='row'>
    <div className= 'carousel-content col-md-6 ms-2'>
     <iframe width="585" height="250"  src="https://www.youtube.com/embed/rXDRvguYsTw" title="How Smart Are You? 😏"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
    <div className='carousel-content col-md-6 ms-4'>
    <iframe width="585" height="250" src="https://www.youtube.com/embed/i8YJqvJ51P0" title="50"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
    </div>

    <CarouselComponent/>
    </div>
  )
}

export default Content
