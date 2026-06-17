import React from 'react'
import g1 from "../assets/g1.png"
import g2 from "../assets/g2.png"
import g3 from "../assets/g3.png"
import g4 from "../assets/g4.png"
import g5 from "../assets/g5.png"
import g6 from "../assets/g6.png"
import g7 from "../assets/g7.png"
import g8 from "../assets/g8.png"
import g9 from "../assets/g9.png"

import g10 from "../assets/g10.png"

import g11 from "../assets/g11.png"

const GoodAfternoon = () => {
    const ga = [{
        id:1,
        img: g1,
        name:"urudunama"
    },{ id:2,
        img: g2,
        name:"Lenny's Podcast: Product | Growth | Career"
    },{id:3,
        img: g3,
        name:"The Desi VC: Indian Venture Capital | Angel Investors | Startups | VC"
    },{id:4,
        img: g4,
        name:"Conversations With Taylor"
    },{ id:5,
        img: g5,
        name:"Newyork"
    },{id:6,
        img: g6 ,
        name:"chillnama"
    },]
    return (
        <>
            <div className="bg-[#303030] min-h-screen p-6">

  <h1 className="font-bold text-white text-2xl mb-6">
    Good Afternoon
  </h1>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-4
      content-start
      text-white
    "
  >
    {ga.map((item) => (
      <div
        key={item.id}
        className="
          bg-[#424242]
          rounded
          flex
          items-center
          gap-3
          p-2
          h-20
          cursor-pointer
          hover:bg-[#525252]
        
        "
      >
        <img
          src={item.img}
          alt=""
          className="w-16 h-16 object-cover rounded"
        />

        <h1 className="font-semibold text-sm line-clamp-2">
          {item.name}
        </h1>
      </div>
    ))}
                    
                </div>
                <div className='flex flex-col gap-10'>
                <h1 className="font-bold text-white text-2xl p-2    ">
    Episodes for you
                    </h1>
                    <div className='flex gap-12'>
                <img src={g10} alt="" className='h-44 w-44 rounded'  /><img src={g11} className='h-44 w-44 rounded' alt="" /><img src={g7} alt="" /><img src={g8} alt="" className='h-44 w-44 rounded'/><img src={g9} className='h-44 w-44 rounded' alt="" />
</div>
</div>  </div></>
  )
}

export default GoodAfternoon;
