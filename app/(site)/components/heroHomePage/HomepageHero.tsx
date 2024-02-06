"use client";
import React from "react";
import VideoBackground from "../VideoComponent";
import Image from "next/image";
import { motion } from "framer-motion";
import vidSubstitute from "./../../../../public/assets/images/vid1.png";

const HomepageHero = () => {
  return (
    <div>
      <div className="hero-homepage flex pl-8 bg-black h-auto max-w-[1920px] items-center min-h-800px overflow-hidden">
        {/* Only show on large screens 50-50 with the div below */}
        <div className="intro hidden lg:flex flex-col items-center w-0 lg:w-[50%] lg:h-[90%] text-white">
          <div className=" flex items-center text-xl md:text-2xl lg:text-4xl mb-8">
            {" "}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{
                type: "spring",
                bounce: 1,
                duration: 3,
              }}
              className="text-customYellow capitalize font-bold tracking-wide"
            >
              Drive
            </motion.h2>{" "}
            <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1}}
             transition={{
              duration: 3,
            }}
            className="your-dreams mx-[5px]"> Your Dreams </motion.h2>{" "}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 1,
                duration: 3,
              }}
              className="text-customYellow capitalize font-bold"
            >
              Daily
            </motion.h2>{" "}
          </div>
          <div className="flex flex-col items-center text-lg md:text-xl lg:text-3xl mt-8  ">
            {" "}
            <motion.h3
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 3, duration: 2 }}
              viewport={{ once: true }}
            >
              Discover a Car Buying Experience{" "}
            </motion.h3>
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 5, duration: 2 }}
              viewport={{ once: true }}
              className="text-customYellow capitalize font-bold ml-[5px]"
            >
              {" "}
              made for you.
            </motion.h3>
          </div>
        </div>

        {/* No display on small screens, 50% on large screens */}
        <div className="hero-image-wrapper__homepage  relative justify-center items-center hidden lg:block lg:w-[50%] lg:h-[80%]">
          <div className="dark-overlay absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
          {<VideoBackground /> ? (
            <VideoBackground />
          ) : (
            <div>
              <Image
                src={vidSubstitute}
                alt="purpose driven picture"
                width={600}
                height={400}
                className="product-image w-auto h-[80%] rounded-sm"
              />
            </div>
          )}
          <h4 className="name hidden lg:block  absolute  text-3xl  font-extrabold">
            {" "}
            <span className="text-[#d21108]"> 24//7 </span>{" "}
            <span className="text-white"> Autos </span>
          </h4>
        </div>
      </div>

      {/* for small screens 100% width */}
      <div className="hero-homepage__small relative block min-h-[600px] lg:hidden">
        <div className="dark-overlay absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
        <div className=" flex items-center w-full justify-center text-[28px] md:text[30px] absolute top-1/4 left-1/2 transform -translate-x-1/2">
          {" "}
          <h2 className="text-customYellow capitalize font-bold tracking-wide ">
            Drive
          </h2>{" "}
          <h2 className="your-dreams mx-[5px] text-white"> Your Dreams </h2>{" "}
          <h2 className="text-customYellow capitalize font-bold">Daily</h2>{" "}
        </div>

        <div className="flex flex-col w-full items-center text-xl md:text-2xl absolute bottom-1/4 left-1/2 transform -translate-x-1/2 ">
          {" "}
          <h3 className="text-white">Discover a Car Buying Experience </h3>
          <h3 className="text-customYellow capitalize font-bold ml-[5px]">
            {" "}
            Made for you.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
