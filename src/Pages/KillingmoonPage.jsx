import React from 'react'
import Killingmoon from '../Components/Killingmoon'
import Timeline from '../Components/Timeline'
import song4 from "../assets/song4.png"
import Sidebar from '../Components/Sidebar'
import timeline2 from "../assets/timeline2.png"
import Killingmoonwallpaper from '../assets/k2.jpg'

const KillingmoonPage = () => {
  return (
      <div className='flex ' >
          <Sidebar />
          <div className=' '>
        <Killingmoon />
        <div className='absolute mr-56'>
          <Timeline songimage={song4} Timeline1image={timeline2} />
        </div>
        <img src={Killingmoonwallpaper} className='absolute left-1 -mt:-36 md:-mt-56 lg:-mt-36 rounded-2xl h-36 w-36 lg:h-72 lg:w-72 ml-12 md:rounded-md lg:rounded-md  ' alt="" />
        <h1 className='text-white'>UP NEXT!</h1>
      </div>
      
    </div>
  )
}

export default KillingmoonPage
