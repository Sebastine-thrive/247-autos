/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import WhoWeAre from "../components/about-us-components/WhoWeAre";
import WhatWeDo from "../components/about-us-components/WhatWeDo";
import Features from "../components/about-us-components/Features";
import ConcludingPart from "../components/about-us-components/ConcludingPart";

export const metadata: Metadata = {
  title: "About us",
};

const page: React.FC = () => {
  return (
    <div className="min-h-[90vh] about-us-container pb-4  flex flex-col m-auto">
      {/* intro segment */}
      <div >
        <div className="about-us-heading min-h-[80px] p-2 text-[#f5f5f5] text-2xl  flex flex-col items-center text-center">
          <h2>
            {" "}
            We Make Car buying and selling easy, efficient and transparent for
            everyone.
          </h2>
          <h2 className="font-medium mt-2">Connecting buyers with sellers</h2>
        </div>
      </div>

      <div className="lg:w-[70%] xl:w-[60%] m-auto">
        {/* Main body */}
        <div className=" px-4 py-2 mt-4">
          <div>
            <div className="about-us  py-2 ">
              <h1 className="text-2xl my-4 ">About Us</h1>
              <WhoWeAre />

              <WhatWeDo />
            </div>
          </div>
          <Features />
        </div>

        {/* Concluding part */}
        <ConcludingPart />
      </div>
    </div>
  );
};

export default page;
