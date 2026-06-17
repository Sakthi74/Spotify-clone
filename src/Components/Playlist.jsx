import React, { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import { Menu } from 'lucide-react';
import Playlistfilter from "../Components/Playlistfilter";

const Playlist = () => {
  const [open, setOpen] = useState(false);

  // OPENING FUNCTION FOR  BURGER MENU
  const opening = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#1E1E1E] w-full p-4">
      {/* Header Section */}
      <div className="flex gap-2 items-center">
        <Menu className="text-white md:hidden" onClick={opening} />
        <h1 className="text-white font-extrabold text-2xl mb-0">
          Playlists
        </h1>
      </div> 

      <div className="hidden md:block mt-4">
        <Playlistfilter />
      </div>

      {/* CONDITIONAL RENDERING FOR FILTER BAR IN SM */}
      {open && (
        <div className="block lg:hidden md:hidden mt-4 ">
          <Playlistfilter />
        </div>
      )}

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 mt-6">
        
        {/* g1 */}
        <div className="col-span-2">
          <img src={p1} alt="Playlist 1" className="w-full object-cover rounded-lg" />
        </div>

        {/* g2 */}
        <div className="flex flex-col items-center bg-[#171717] p-4 text-white rounded-lg col-span-1">
          <img src={p2} alt="Your Episodes" className="w-full h-auto rounded-md" />
          <h1 className="mt-2 font-semibold text-center">Your Episodes</h1>
          <p className="text-sm text-gray-400 text-center">14 Episodes</p>
        </div>

        {/* g3 */}
        <div className="flex flex-col items-center bg-[#171717] p-4 text-white rounded-lg col-span-1">
          <img src={p3} alt="Bollywood Jazz" className="w-full h-40 object-cover rounded-md" />
          <h1 className="mt-2 font-semibold text-center">Bollywood Jazz</h1>
          <p className="text-center text-sm text-gray-400">
            The best of Jazz music from Bollywood.
            <br />
            Cover – A R Rahman
          </p>
        </div>

        {/* g4 */}
        <div className="flex flex-col items-center bg-[#171717] p-4 text-white rounded-lg col-span-1">
          <img src={p4} alt="Hangover Cure" className="w-full h-auto rounded-md" />
          <h1 className="mt-2 font-semibold text-center">Hangover Cure</h1>
          <p className="text-sm text-gray-400 text-center">Treat us, you need this!</p>
        </div>

        {/* g5 */}
        <img src={p5} alt="Playlist 5" className="w-full object-cover rounded-lg" />

        {/* g6 */}
        <img src={p6} alt="Playlist 6" className="w-full object-cover rounded-lg" />

        {/* g7 */}
        <img src={p7} alt="Playlist 7" className="w-full object-cover rounded-lg" />

        {/* g8 */}
        <img src={p8} alt="Playlist 8" className="w-full object-cover rounded-lg" />

        {/* g9 */}
        <img src={p9} alt="Playlist 9" className="w-full object-cover rounded-lg" />

      </div>
    </div>
  );
};

export default Playlist;