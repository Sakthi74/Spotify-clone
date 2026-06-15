import React from 'react'
import dropdown from "../assets/dropdown.png"
import profilepic from "../assets/profile.png"
import { useState } from 'react'
import sidebutton from '../assets/side buttons.png'

const Playlistfilter = () => {
    const[selected,setselected]=useState("playlist")
    return (
     
      <div className="flex flex-col md:flex-row justify-between p-9 bg-[#1e1e1e]">
            <ul className="font-bold flex flex-col md:flex-row lg:flex-row  gap-4 text-white">
            <li className='hidden lg:block md:block'><img src={sidebutton} alt="" /></li>
            <li className={`cursor-pointer  ${selected==='playlist'? 'bg-[#333333] h-9 flex items-center justify-center w-20 ': 'h-9 w-20'}`} onClick={()=>setselected('playlist')}>Playlist</li>
            <li className={` ${selected=='podcast'?'bg-[#333333] h-9 flex items-center justify-center w-20 cursor-pointer': 'cursor-pointer h-9 w-20'}`} onClick={()=>{setselected('podcast')}}>Podcasts</li>
                    <li className={` ${selected=='artist'?' bg-[#333333] h-9 flex items-center justify-center w-20 cursor-pointer':"cursor-pointer h-9 w-20"}`} onClick={()=>{setselected('artist')}}>Artists</li>
            <li className={` ${selected=='albums'?' bg-[#333333] h-9 flex items-center justify-center w-20 cursor-pointer':"cursor-pointer h-9 w-20"}`} onClick={()=>{setselected('albums')}}>Albumns</li>
          </ul>

          <div className='flex gap-3 bg-black p-1 rounded-4xl w-fit  -ml-7 cursor-pointer' >
              <img src={dropdown} alt="" />
              <p className='font-extrabold text-white'>Sakthi_74</p>
              <img src={profilepic} alt="" />
          </div>
      </div>
    
  )
}

export default Playlistfilter
