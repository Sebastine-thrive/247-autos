"use client";
import { FaqItemProps } from "@/app/types/types";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
   setIsRotated(!isRotated);
  };



  return (
    <div className="faq-accordion w-full h-auto  mb-3 ">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer h-3rem shadow-sm shadow-[#2d2720] rounded-${
          isOpen ? "none" : "t-md"
        } `}
        onClick={toggleAccordion}
      >
        <div className="text-[#2d2720]  px-2 font-semibold  text-base md:text-lg ml-[-1rem] text-start ">
          {question}
        </div>
        <div className="text-xl ">
          {isOpen ? (
            <IoIosArrowUp
              size={20}
              className={isRotated ? "rotate faq-icons" : "faq-icons"}
            />
          ) : null }
         
        </div>
      </div>
      {isOpen ? (
        <div className="p-4 bg-[#2d2720] rounded-b-md ">
          <p className="text-white  text-base md:text-lg">{answer}</p>
        </div>
      ) : null}
    </div>
  );
};
