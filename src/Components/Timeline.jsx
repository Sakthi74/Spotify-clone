import React from 'react'
import common from "../assets/common.png"

const Timeline = ({ songimage, Timeline1image }) => {
  return (
    <div className='flex bg-[#181818] h-fit fixed md:bottom-0 lg:bottom-0 left-0 w-full z-50'>
      <div className='flex items-center justify-center w-full'>
         {songimage && (
          <img src={songimage} alt="Song" className='hidden md:block lg:block h-24 w-fit absolute ml-12 left-0 ' />
        )}
        {Timeline1image && (
          <img src={Timeline1image} alt="Timeline" className='h-16 p-2 block' />
        )}
       
        {common && (
          <img src={common} alt="Common" className='hidden md:block lg:block h-12 p-2 mr-[-20px]' />
        )}
      </div>
    </div>
  )
}

export default Timeline
