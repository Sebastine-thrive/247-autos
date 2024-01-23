import React from "react";
import VideoBackground from "../VideoComponent";

const HomepageHero = () => {
  return (
    <div>
      <div className="hero-homepage flex pl-8 bg-black h-auto max-w-[1920px] items-center min-h-600px overflow-hidden">
        {/* Only show on large screens 50-50 with the div below */}
        <div className="intro hidden lg:flex flex-col items-center w-0 lg:w-[50%] lg:h-[90%] text-white">
          <div className=" flex items-center text-[26px] md:text-[30px] lg:text-[40px] mb-8">
            {" "}
            <h2 className="text-customYellow capitalize font-bold tracking-wide">
              Drive
            </h2>{" "}
            <h2 className="your-dreams mx-[5px]"> Your Dreams </h2>{" "}
            <h2 className="text-customYellow capitalize font-bold">Daily</h2>{" "}
          </div>
          <div className="flex flex-col items-center text-[20px] md:text[24px] lg:text-[30px] mt-8  ">
            {" "}
            <h3>Discover a Car Buying Experience </h3>
            <h3 className="text-customYellow font-bold ml-[5px]">
              {" "}
              Tailored to You.
            </h3>
          </div>
        </div>

        {/* No display on small screens, 50% on large screens */}
        <div className="hero-image-wrapper__homepage  relative justify-center items-center hidden lg:block lg:w-[50%] lg:h-[80%]">
          <div className="dark-overlay absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
          <VideoBackground />
          <h4 className="name hidden lg:block  absolute text-[30px] font-extrabold">
            {" "}
            <span className="text-[#d21108]"> 24//7 </span>{" "}
            <span className="text-white"> Autos </span>
          </h4>
        </div>
      </div>

      {/* for small screens 100% width */}
      <div className="hero-homepage__small relative block min-h-[600px] lg:hidden">
        <div className="dark-overlay absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
        <div className=" flex items-center w-full justify-center text-[28px] md:text[30px] absolute top-8 left-1/2 transform -translate-x-1/2">
          {" "}
          <h2 className="text-customYellow capitalize font-bold tracking-wide ">
            Drive
          </h2>{" "}
          <h2 className="your-dreams mx-[5px] text-white"> Your Dreams </h2>{" "}
          <h2 className="text-customYellow capitalize font-bold">Daily</h2>{" "}
        </div>

        <div className="flex flex-col w-full items-center text-[20px] md:text[24px] absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          {" "}
          <h3 className="text-white">Discover a Car Buying Experience </h3>
          <h3 className="text-customYellow font-bold ml-[5px]">
            {" "}
            Tailored to You.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
