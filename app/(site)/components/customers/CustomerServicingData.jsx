"use client";
import React from "react";
import CountUp from "react-countup";

const CustomerServicingData = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-4 py-6 xxs:text-[20px] md:text-[26px] lg:text-[32px] font-extrabold bg-[#50587c] rounded-lg ">
      {" "}
      <div className="flex items-center justify-center mt-4 font-bold tracking-wide">
        {" "}
        <p className=" text-white"> Satisfied </p>{" "}
        <div className="count text-[#cb9f5c] text-[50px] mx-[10px] ">
          {" "}
          <CountUp end={150} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className=" text-white"> Customers </p>{" "}
      </div>
      <div className="flex items-center justify-center ml-[-30px] my-4  font-bold tracking-wide">
        {" "}
        <p className="text-white"> Across </p>
        <div className="count text-[#cb9f5c] text-[50px] mx-[10px]">
          <CountUp end={20} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className="text-white"> Cities</p>{" "}
      </div>
    </div>
  );
};

export default CustomerServicingData;
