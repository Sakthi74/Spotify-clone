import React from 'react'
import sidebuttons from '../assets/side buttons.png'

const Signupnav = () => {
  return (
    <nav className="flex items-center justify-end md:justify-between px-4 py-3 bg-black w-full">
      <img
        src={sidebuttons}
        className="hidden md:block h-8"
        alt="Navigation"
      />

      <div className="flex items-center gap-3">
        <h1 className="font-bold text-[#A7A7A7] text-sm md:text-lg cursor-pointer">
          Sign up
        </h1>

        <button className="bg-white text-black font-bold px-4 py-2 rounded-full text-sm md:text-base">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Signupnav