import React from 'react'
import Greenpage from '../Components/Greenpage'
import Timeline from '../Components/Timeline'
import Sidebar from '../Components/Sidebar'
import kasoor from "../assets/kasoor.png"
import timeline2 from '../assets/timeline2.png'
import greeenpageimage from "../assets/greenpageimg.png"

const MainGreenpage = () => {
  return (
     <div className='flex ' >
          <Sidebar />
          <div className=' '>
        <Greenpage />
        <div className='absolute mr-56'>
          <Timeline songimage={kasoor} Timeline1image={timeline2} />
        </div>
        <img src={greeenpageimage} className='absolute left-0 -mt-2   lg:-mt-48  rounded-2xl h-54 w-36 lg:h-72 lg:w-64 ml-12 md:rounded-md lg:rounded-md  ' alt="" />
        <h1 className='text-white'>UP NEXT!</h1>
      </div>
      
    </div>
  )
}

export default MainGreenpage
