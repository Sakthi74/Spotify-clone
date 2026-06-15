import React from 'react'
import brownpagemid from "../assets/Brownpagemid.png"
import brownpagemidbuttons from "../assets/browmidbuttons.png"

const Brownpage = () => {
  return (
    <div className='bg-gradient-to-b from-[#564638] via-[#564638] to-[#1f1c19] w-full min-h-screen'>

    
      <div className='bg-[#F8C8A0] w-full h-64 md:h-96 flex items-end p-4 md:p-8'>
    
      </div>

      
      <img
        src={brownpagemid}
        alt=""
        className=' h-36 w-full md:w-96 lg:w-full z-12 lg:h-52 md:h-44  '
      />


      <div className='text-white px-4 md:px-12 py-8 z-0'>
        <h1 className='font-extrabold text-xl md:text-2xl mb-6'>
          Episode Description
        </h1>
        <p className='text-sm md:text-base  text-[#b3b3b3]'>
          Brought to you by Writer—Generative AI for the enterprise
          <br />| Dovetail—Bring your customer into every decision |
          <br />Linear—The new standard for modern software development
        </p>
      </div>

    </div>
  )
}

export default Brownpage