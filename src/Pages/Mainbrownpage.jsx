import React from 'react'
import Timeline from '../Components/Timeline'
import Sidebar from '../Components/Sidebar'
import brownpagetl from "../assets/brownpagetl.png"
import timeline2 from '../assets/timeline2.png'
import Brownpage from '../Components/Brownpage'

const Mainbrownpage = () => {
  return (
    <div className='flex min-h-screen bg-[#1f1c19]'>
    
      <div className='flex-shrink-0'>
        <Sidebar />
      </div>

      
      <div className='flex-1 min-w-0 overflow-y-auto'>
        <Brownpage />
        <Timeline songimage={brownpagetl} Timeline1image={timeline2} />
      </div>
    </div>
  )
}

export default Mainbrownpage