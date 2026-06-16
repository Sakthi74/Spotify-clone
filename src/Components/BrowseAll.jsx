import React from 'react'
import browse1 from "../assets/browse1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import b4 from "../assets/b4.png"
import b5 from "../assets/b5.png"
import b6 from "../assets/b6.png"
import b7 from "../assets/b7.png"
import b8 from "../assets/b8.png"
import b9 from "../assets/b9.png"
import b10 from "../assets/b10.png"
import b11 from "../assets/b11.png"
import b12 from "../assets/b12.png"
import b13 from "../assets/b13.png"
import b14 from "../assets/b14.png"
import b15 from "../assets/b15.png"


const BrowseAll = () => {
    const categories = [
  {
    id: 1,
    title: "Podcasts",
    color: "#27856A",
    image: browse1
  },
  {
    id: 2,
    title: "Audiobooks",
    color: "#5038A0",
    image: b2
  },
  {
    id: 3,
    title: "Made For You",
    color: "#1E3264",
    image: b3
  },
  {
    id: 4,
    title: "Charts",
    color: "#8D67AB",
    image: b4
  },
  {
    id: 5,
    title: "New Releases",
    color: "#E8115B",
    image: b5
  },
  {
    id: 6,
    title: "Discover",
    color: "#8D67AB",
    image: b6
  },
  {
    id: 7,
    title: "Live Events",
    color: "#7358FF",
    image: b7
  },
  {
    id: 8,
    title: "Hip-Hop",
    color: "#B49BC8",
    image: b8
  },
  {
    id: 9,
    title: "Pop",
    color: "#E133A8",
    image: b9
  },
  {
    id: 10,
    title: "Country",
    color: "#9ADBD0",
    image: b10
  },
  {
    id: 11,
    title: "Latin",
    color: "#E8118B",
    image: b11
  },
  {
    id: 12,
    title: "Rock",
    color: "#C5E26D",
    image: b12
  },
  {
    id: 13,
    title: "Summer",
    color: "#9473B8",
    image: b13
  },
  {
    id: 14,
    title: "Workout",
    color: "#8A8A8A",
    image: b14
  },
  {
    id: 15,
    title: "R&B",
    color: "#E0118A",
    image: b15
  }
];
    return (
      <>
          <h1 className=' font-bold text-white p-4 '>Browse all</h1>
        <div className='bg-[#1e1e1e] p-6 w-full lg:w-full md:w-full'>
               
                  
                <div className='grid grid-cols-2

md:grid-cols-3
lg:grid-cols-5  gap-5'>
            {
                categories.map((item) => (
                    <div className='rounded-xl lg:w-60 lg:h-54 h-36 w-36   '  style={{ backgroundColor: item.color }}  key={item.id}> <h3 className='text-white font-extrabold p-5'>{item.title}</h3> <img className='md:ml-[136px] lg:ml-[136px] ml-10  md:mt-10 lg:mt-10 mt-0    ' src={item.image} alt=""/></div>
                   
                    
                ))
            }
      
                </div>
                </div>
            </>
  )
}

export default BrowseAll
