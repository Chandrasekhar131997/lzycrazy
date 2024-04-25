import React from 'react'
import Asidebar from "./Dashboard/Asidebar";
import Content from "./Dashboard/Content";
const Home = () => {
  return (
    <div>
      
          <div className='row'>
            <div className='col-md-2'>
<Asidebar/>
            </div>
            <div className='col-md-10'>
            <Content/>
            </div>
          </div>
    </div>
  )
}

export default Home
