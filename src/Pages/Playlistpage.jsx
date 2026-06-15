import React from 'react'
import Playlist from '../Components/Playlist'
import playlsitsong from "../assets/playlsitpagesong.png"
import timeline2 from "../assets/timeline3.png"
import Sidebar from "../Components/Sidebar.jsx"
import Timeline from '../Components/Timeline.jsx'

const Playlistpage = () => {
  return (
   
     <div className='flex ' >
          <Sidebar />
          <div className=' '>
        <Playlist/>
        <div className='absolute mr-56'>
          <Timeline songimage={playlsitsong} Timeline1image={timeline2} />
        </div>
        
     
      </div>
      
    </div> 
    
  )
}

export default Playlistpage
