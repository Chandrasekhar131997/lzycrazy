import React from 'react'
import Asidebar from "./Dashboard/Asidebar";
import Content from "./Dashboard/Content";
const Home = () => {
  return (
    <div className='main-box'>

      <div className='row'>
        <div className='col-md-2 col-4'>
          <Asidebar />
        </div>
        <div className='col-md-10 col-8'>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Home
