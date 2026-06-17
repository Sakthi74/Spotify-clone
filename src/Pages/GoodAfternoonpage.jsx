import React from 'react'
import Sidebar from '../Components/Sidebar'
import GoodAfternoon from '../Components/GoodAfternoon'
import Timeline1 from '../assets/timeline1.png'
import Timeline from '../Components/Timeline'
import song1 from "../assets/song1.png"
import bookmark from "../assets/Bookmark.png"

const GoodAfternoonpage = () => {
  const arr=["Jazz","Hangover cure","Your Top songs 2026","Indie","Rock","Radar"]
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar Bookmark={bookmark} Arr={arr} />
      <div>
      <GoodAfternoon />
      <Timeline Timeline1image={Timeline1} songimage={song1} /></div>
      
    </div>
  )
}

export default GoodAfternoonpage;
