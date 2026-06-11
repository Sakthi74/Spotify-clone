import React from 'react'
import killingmoonimage from "../assets/killingmoonimage.png"
import greendot from '../assets/greenplaybutton.png'
import fav from '../assets/fav.png'
import dot from '../assets/dot.png'

const Killingmoon = () => {
  return (
      <div >
          <img src={killingmoonimage} className='h-fit w-full' alt="" />
          <div className='bg-[#111517]  w-full flex gap-5 ml-12'>
              <img src={greendot} alt="" /><img width={60} height={20} src={fav} alt="" /><img src={dot} alt="" />
          </div>
      
          
    </div>
  )
}

export default Killingmoon
