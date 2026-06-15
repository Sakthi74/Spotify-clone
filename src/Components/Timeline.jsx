import React from 'react'
import common from "../assets/common.png"

const Timeline = ({ songimage, Timeline1image }) => {
  return (
    <div className="flex bg-[#181818] items-center fixed bottom-0 left-0 right-0 z-50 justify-between px-4">
  <div className="flex items-center">
    {songimage && (
      <img src={songimage} alt="Song" className="hidden md:block lg:block h-24 ml-3" />
    )}
    
    </div>
  <div className="flex items-center">
    {Timeline1image && (
      <img src={Timeline1image} alt="Timeline" className="h-16 p-2" />
    )}
  </div>

  <div className="flex items-center">
    {common && (
      <img src={common} alt="Common" className="hidden md:block lg:block h-12 p-2" />
    )}
  </div>
</div>
 
  )
}

export default Timeline;
