import React from "react";
import Greenpage from "../Components/Greenpage";
import Timeline from "../Components/Timeline";
import Sidebar from "../Components/Sidebar";
import kasoor from "../assets/kasoor.png";
import timeline2 from "../assets/timeline2.png";
import greenpageimage from "../assets/greenpageimg.png";
import bookmark from "../assets/Bookmark.png"

const MainGreenpage = () => {
  return (
    <div className="flex min-h-screen bg-[#111517]">
      {/* Sidebar - hidden on mobile if needed */}
      <Sidebar Bookmark={bookmark} />

      {/* Main Content */}
      <div className="flex-1 relative">
        <Greenpage />

        {/* Timeline */}
        <div className="w-full px-4 lg:px-8 mt-4">
          <Timeline
            songimage={kasoor}
            Timeline1image={timeline2}
          />
        </div>

        {/* Up Next Section */}
        <div
          className="
            mt-6 px-4
            lg:absolute lg:left-8 lg:bottom-8 lg:mt-0
          "
        >
          <h1 className="text-white font-bold text-lg mb-3">
            UP NEXT!
          </h1>

          <img
            src={greenpageimage}
            alt="Up Next"
            className="
              w-32 h-44 rounded-xl
              md:w-40 md:h-52
              lg:w-64 lg:h-72
              lg:hidden md:hidden block
              
              object-cover
            "
          />
        </div>
      </div>
    </div>
  );
};

export default MainGreenpage;