import React from 'react'
import common from "../assets/common.png"
import song1 from "../assets/song1.png"

const Timeline = ({songimage, Timeline1image}) => {
  return (
      <div className='flex bg-[#181818] h-fit justify-between absolute    '>
       {songimage && <img src={songimage} alt="" />}
      {Timeline1image && <img src={Timeline1image} className='h-16 p-2' alt="" />}
          {common && <img src={common} alt="" className='h-12 p-2' />}
       
      
    </div>
  )
}

export default Timeline
