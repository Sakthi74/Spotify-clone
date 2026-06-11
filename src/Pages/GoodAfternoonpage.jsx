import React from 'react'
import Sidebar from '../Components/Sidebar'
import GoodAfternoon from '../Components/GoodAfternoon'
import Timeline1 from '../assets/timeline1.png'
import Timeline from '../Components/Timeline'
import song1 from "../assets/song1.png"

const GoodAfternoonpage = () => {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />
      <div>
      <GoodAfternoon />
      <Timeline Timeline1image={Timeline1} songimage={song1} /></div>
      
    </div>
  )
}

export default GoodAfternoonpage;
