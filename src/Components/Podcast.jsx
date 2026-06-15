import React from 'react'
import pp1 from "../assets/pp1.png"
import { useState } from "react";
import { Menu } from 'lucide-react';

import pp4 from "../assets/pp4.png"
import pp2 from "../assets/pp2.png"
import pp3 from "../assets/pp3.png"
import pp5 from "../assets/pp5.png"
import podcastdown1 from "../assets/podcastd1.png"
import podcastdown2 from "../assets/brownbag.png"
import Playlistfilter from './Playlistfilter';


const Podcast = () => {
    
      const [open, setOpen] = useState(false);
    
      const opening = () => {
        setOpen((prev) => !prev);
      };
    
    return (<>
        <div>
            <div className='flex p-6 gap-2'>
            <Menu className="text-white md:hidden " onClick={opening} />
                <h1 className='text-4xl text-white font-extrabold '>Podcasts</h1> 

      {open && (
        <div className="block lg:hidden md:hidden mt-12   ">
          <Playlistfilter />
        </div>
      )}
                
            </div>
                    <h1 className='font-extrabold text-white text-2xl ml-6'>Best Episodes - Editor's Picks</h1>
            <div className=' p-16 gap-4 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5'>
                <div className=''>
       
        <img src={pp1} alt=""     className="w-full h-full md:w-full md:h-28 lg:w-64 lg:h-64 object-cover rounded-lg" />
        {/* <h3>Every parent's Nightmare</h3>
        <p>Sep 2022 · 36 min</p> */}
      </div>
      <div>
        
        <img src={pp2} alt="" className="w-full h-full md:w-full md:h-28 lg:w-64 lg:h-64 object-cover rounded-lg"/>
        {/* <h3>How the pell Grant helped</h3>
        <p>Sep 2022 · 29 min</p> */}
      </div>
      <div>
       
        <img src={pp3} alt="" className="w-full h-full md:w-full md:h-28 lg:w-64 lg:h-64 object-cover rounded-lg"/>
        {/* <h3> After 10 years</h3>
        <p>Jul 2022 · 62 min</p> */}
      </div>
      <div>
       
        <img src={pp4} alt="" className="w-full h-full md:w-full md:h-28 lg:w-64 lg:h-64 object-cover rounded-lg"/>
        {/* <h3>Book Exploder : Min jin L</h3>
        <p>E
Aug 2022 · 20 min</p> */}
            </div>
             <div>
       
        <img src={pp5} alt="" className="w-full h-fit md:w-full md:h-28 lg:w-52 lg:h-52 object-cover rounded-lg" />
        <h3 className='font-bold text-white p-2'>Healing Theraphy</h3>
        <p className='text-gray-300 text-sm font-thin'>E
 Aug 2022 · 26 min</p>
            </div>
            
            </div>

            {/* div2 */}
            
                <h1 className='font-extrabold text-white text-2xl hidden lg:block md:block '>Best Of Brown Bag</h1>
            <div className='lg:flex p-12 ml-12 gap-36 hidden lg:block md:block '>
                <img src={podcastdown1} alt="" />
                <img src={podcastdown2} alt="" />
                <img src={podcastdown2} alt="" />
                <img src={podcastdown2} alt="" />
                <img src={podcastdown2} alt="" />
            </div>
    </div>
    </>
        
  )
}

export default Podcast
