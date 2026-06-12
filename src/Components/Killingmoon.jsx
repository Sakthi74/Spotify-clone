import React from 'react'
import killingmoonimage from "../assets/killingmoonimage.png"
import greendot from '../assets/greenplaybutton.png'
import fav from '../assets/fav.png'
import dot from '../assets/dot.png'
import { ChevronDown } from 'lucide-react';


import { useState } from 'react'

const Killingmoon = () => {
  const [dropdown, setdropdown] = useState(false);

  function openpopup(){
      setdropdown(prev => !prev);
    console.log(dropdown)
  }
  return (
    <div className='bg-[#111517] ' >
     

            <ChevronDown className="absolute text-white -mt-24 w-8 h-8 z-50 block md:hidden lg:hidden" onClick={openpopup} />
          <img src={killingmoonimage} className='h-96 w-96 rounded-md z-0 p-1 md:p-0 lg:p-0 md:h-32 md:w-screen lg:w-screen lg:h-[700px] mt-32 md:mt-0 lg:mt-0 ml-4 md:ml-0 lg:ml-0' alt="" />
          <div className='bg-[#111517] w-full h-full lg:flex gap-5 ml-12 relative'>
            <img src={greendot} alt="" className='hidden md:block lg:block' />
            <img width={60} height={20} src={fav} alt="" className='hidden md:block lg:block' />
        <img src={dot} alt="" className='hidden md:block lg:block' />
        
      </div>
      
      
      { dropdown && <ul className='bg-[#1ed760] text-[#052611] -mt-[450px] absolute rounded-2xl  font-bold'>
        <li className='border-b-2  border-0.5 p-2 align-middle'>HOME</li>
        <li className='border-b-2  border-0.5 p-2 align-middle'>SEARCH</li>
        <li className='border-b-2  border-0.5 p-2 align-middle'>YOUR LIBRARY</li>
        <li className='border-b-2  border-0.5 p-2 align-middle'>CREATE PLAYLIST</li>
      </ul>}
      
      
      
          
    </div>
  )
}

export default Killingmoon
