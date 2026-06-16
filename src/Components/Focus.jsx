import React, { useState } from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import f9 from "../assets/f9.png";
import { Menu } from 'lucide-react';
import Playlistfilter from "../Components/Playlistfilter";

const Focus = () => {
  const [open, setOpen] = useState(false);

  const opening = () => {
    setOpen((prev) => !prev);
  };
    const playlists = [
  {
    id: 1,
    img: f1,
    title: "Today's Top Hits",
    desc: "Ed Sheeran is on top of the Hottest 50!",
  },
  {
    id: 2,
    img: f2,
    title: "RapCaviar",
    desc: "New music from Roddy Ricch, Kodak Black, NLE Choppa and more.",
  },
  {
    id: 3,
    img: f3,
    title: "All Out 2010s",
    desc: "The biggest songs of the 2010s.",
  },
  {
    id: 4,
    img: f4,
    title: "Rock Classics",
    desc: "Rock legends & epic songs that continue to inspire.",
  },
  {
    id: 5,
    img: f5,
    title: "Chill Hits",
    desc: "Kick back to the best new and recent chill hits.",
  },
  {
    id: 6,
    img: f6,
    title: "Today's Top Hits",
    desc: "Ed Sheeran is on top of the Hottest 50!",
  },
  {
    id: 7,
    img: f7,
    title: "RapCaviar",
    desc: "New music from Roddy Ricch, Kodak Black, NLE Choppa and BIA.",
  },
  {
    id: 8,
    img: f8,
    title: "All Out 2010s",
    desc: "The biggest songs of the 2010s.",
  },
  {
    id: 9,
    img: f9,
    title: "Rock Classics",
    desc: "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
        },
  {
    id: 10,
    img: f9,
    title: "Chill Hits",
    desc: "Kick back to the best new and recent chill hits.",
        },
  
];

  return (
    <div className="bg-[#1E1E1E] w-full p-4">
      {/* Header Section */}
      <div className="flex gap-2 items-center flex justify-between">
        {/* <Menu className="text-white md:hidden" onClick={opening} /> */}
        <h1 className="text-white font-extrabold text-2xl mb-0 ">
          Focus
              </h1>
              <p className="font-bold text-[#A7A7A7] text-sm md:text-lg cursor-pointer">Show all</p>
      </div> 

      <div className="hidden md:block mt-4">
        {/* <Playlistfilter /> */}
      </div>

      {/* {open && (
        <div className="block lg:hidden md:hidden mt-4 ">
          <Playlistfilter />
        </div>
      )} */}

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6">
  {playlists.map((item) => (
    <div
      key={item.id}
      className="bg-[#181818] hover:bg-[#282828] transition-all duration-300 p-4 rounded-lg cursor-pointer"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full rounded-md object-cover"
      />

      <h2 className="text-white font-bold mt-4 text-sm lg:text-base">
        {item.title}
      </h2>

      <p className="text-[#B3B3B3] text-xs lg:text-sm mt-2 line-clamp-2">
        {item.desc}
      </p>
    </div>
  ))}
</div>
      </div>
    
  );
};

export default Focus;