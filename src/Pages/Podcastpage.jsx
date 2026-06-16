import React from 'react'
import Freesignup from '../Components/Freesignup'
import Sidebar from '../Components/Sidebar'
import Signupnav from '../Components/Signupnav'
import Podcast from '../Components/Podcast'



const Podcastpage = () => {
  return (
   <div className='flex ' >
          <Sidebar />
      <div className=' '>
        
        <Podcast/>
              <div className='absolute left-0 mb-36 mr-56'>
                  <Freesignup/>
          
        </div>
        
     
      </div>
      
    </div> 
  )
}

export default Podcastpage
