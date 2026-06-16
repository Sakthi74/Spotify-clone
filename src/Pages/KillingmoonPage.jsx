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
        <img src={Killingmoonwallpaper} className='absolute left-1 ml-36 -mt:96 p-3 md:p-0 lg:p-0 md:-mt-56 lg:-mt-36 rounded-2xl h-36 w-36 lg:h-72 lg:w-72 md:ml-12 lg:ml-10 md:rounded-md lg:rounded-md  ' alt="" />
        <h1 className='text-white block md:hidden lg:hidden ml-12 p-1 font-extrabold '>UP NEXT!</h1>
      </div>
      
    </div>
  )
}

export default KillingmoonPage
