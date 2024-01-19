import React from "react";
import VideoBackground from "../VideoComponent";

const HomepageHero = () => {
  return (
    <div>
      <div className="hero__homepage flex  ">
        <div className="intro flex flex-col items-center  w-[50%] h-[60%] min-w-[40%]">
          <div className=" flex items-center text-[50px] mb-8">
            {" "}
            <h2 className="brand-yellow capitalize font-bold tracking-wide">
              Drive
            </h2>{" "}
            <h2 className="your-dreams mx-[5px]"> Your Dreams </h2>{" "}
            <h2 className="brand-yellow capitalize font-bold">Daily</h2>{" "}
          </div>
          <div className="flex items-center text-[32px] mt-16  ">
            {" "}
            <h3>Discover a Car Buying Experience </h3>
            <h3 className="brand-yellow font-bold ml-[5px]">
              {" "}
              Tailored to You.
            </h3>
          </div>
        </div>
        <div className="hero-image-wrapper__homepage flex relative justify-center items-center xxs:w-[90%] xxs:h-[90%] lg:w-[50%] h-[60%]">
          <div className="dark-overlay absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
          <VideoBackground />
          <h4 className="name absolute text-[30px] font-extrabold">
            {" "}
            <span className="text-[#d21108]"> 24//7 </span>{" "}
            <span className="text-white"> Autos </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
