"use client";
import React from "react";
import CountUp from "react-countup";

const CustomerServicingData = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-4 py-2 xxs:text-[20px] md:text-[26px] lg:text-[32px] font-extrabold bg-[#000] border-2 border-double border-customRed rounded-lg ">
      {" "}
      <div className="flex items-center justify-center mt-4 font-bold tracking-wide">
        {" "}
        <p className=" text-white"> Satisfied </p>{" "}
        <div className="count text-[#cb9f5c] text-[40px] mx-[10px] font-extrabold ">
          {" "}
          <CountUp end={150} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className=" text-white"> Customers </p>{" "}
      </div>
      <div className="flex items-center justify-center ml-[-30px] my-4  font-bold tracking-wide">
        {" "}
        <p className="text-white"> Across </p>
        <div className="count text-[#cb9f5c] text-[40px] mx-[10px] font-extrabold">
          <CountUp end={20} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className="text-white"> Cities</p>{" "}
      </div>
    </div>
  );
};

export default CustomerServicingData;
