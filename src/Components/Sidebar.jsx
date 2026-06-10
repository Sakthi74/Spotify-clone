import React from 'react'
import logo from "../assets/logo.png"
import home from "../assets/home.svg"
import search from "../assets/search.svg"
import library from "../assets/library.svg"
import playlist from "../assets/createplaylist.svg"
import liked from "../assets/likedsong.svg"
import english from "../assets/english.svg"
import tick from "../assets/tick.svg"


const Sidebar = () => {
    return (
      <>
            <nav className='flex flex-col    p-12 bg-[#000000] h-screen w-72     justify-between'>
                <div>
                <img src={logo} alt="" className='h-16 w-36' />
                <ul className=' hover:text-white  font-bold hover:font-extrabold'>
                    <li cwidthlassName='cursor-pointer flex gap-7 p-5'> <img src={home} alt="Home" /><h1 className='text-[#B3B3B3]'>Home</h1></li>
                    <li className='cursor-pointer flex gap-7 p-5'> <img src={search} alt="search" /><h1 className='text-[#B3B3B3]'>Search</h1></li>
                  <li className='cursor-pointer flex gap-7 p-5'> <img src={library} alt="search" /><h1 className='text-[#B3B3B3]'>Library</h1></li>
                </ul>
                <div className='font-bold'>
                    <div className='cursor-pointer flex gap-2 p-5'> <img src={playlist} alt="" /><h1 className='text-[#B3B3B3]'>Create Playlist</h1></div>
                    <div className='cursor-pointer flex gap-2 p-5'> <img src={liked} alt="" /><h1 className='text-[#B3B3B3]'>Liked Songs</h1></div>

                    </div>
                </div>
                

<div className='flex flex-col  gap-3 text-xs text-[#A7A7A7] mt-auto'>
    <div className='flex gap-4'>
        <p>Legal</p>
        <p>Privacy Center</p>
    </div>

    <div className='flex gap-4'>
        <p>Privacy Policy</p>
        <p>Cookies</p>
    </div>

    <div className='flex gap-4 items-center'>
        <p>About Ads</p>
        <img src={tick} alt="" />
    </div>

    <p>Cookies</p>

    <img src={english} className='h-10 mt-4 w-fit' alt="" />
</div>


          
      
            </nav>
            </>
  )
}

export default Sidebar
