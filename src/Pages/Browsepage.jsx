import React from 'react'
import Sidebar from '../Components/Sidebar'
import BrowseAll from '../Components/BrowseAll'
import Signupnav from '../Components/Signupnav'
import Freesignup from '../Components/Freesignup'

const Browsepage = () => {
  return (
    <div className='flex '>
      
      <Sidebar />
      <div className='flex flex-col w-full '>
        <Signupnav />
        <BrowseAll />
      <div className='absolute left-0 mr-56 bottom-0'><Freesignup /></div></div>
      
      
    </div>
  )
}

export default Browsepage
