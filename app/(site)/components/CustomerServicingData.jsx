"use client";
import React from "react";
import CountUp from "react-countup";

const CustomerServicingData = () => {
  return (
    <div className=" flex flex-col justify-center xxs:text-[20px] md:text-[26px] lg:text-[32px] font-extrabold">
      {" "}
      <div className="flex items-center justify-center mt-4 px-4 py-4 font-bold tracking-wide">
        {" "}
        <p className="mr-[10px] text-white"> Satisfied </p>{" "}
        <div className="count text-[#cb9f5c] text-[50px] ">
          {" "}
          <CountUp end={150} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className="ml-[10px] text-white"> Customers </p>{" "}
      </div>
      <div className="flex items-center justify-center my-4 px-4 py-4 font-bold tracking-wide">
        {" "}
        <p className="text-white"> Across </p>
        <div className="count text-[#cb9f5c] ml-[10px]">
          <CountUp end={20} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className="text-white ml-[10px]"> cities</p>{" "}
      </div>
    </div>
  );
};

export default CustomerServicingData;
