"use client";
import React from "react";
import CountUp from "react-countup";

const CustomerServicingData = () => {
  return (
    <div className="xxs:text-sm md:text-lg">
      {" "}
      <div className="flex items-center my-12">
        {" "}
        <div className="text-[#d21108]">
          {" "}
          <CountUp end={150} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className="ml-[10px] text-white"> Satisfied Customers </p>{" "}
      </div>
      <div className="flex items-center my-12">
        {" "}
        <p className="text-white"> Across </p>
        <div className="text-[#d21108]">
          <CountUp end={20} enableScrollSpy scrollSpyOnce />{" "}
        </div>{" "}
        <p className="text-white"> cities</p>{" "}
      </div>
    </div>
  );
};

export default CustomerServicingData;
