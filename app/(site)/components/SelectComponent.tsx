"use client";
import { useStateContext } from "@/app/context/Contexts";
import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineCheck } from "react-icons/ai";
import { FaDashcube } from "react-icons/fa";


const SelectComponent: React.FC = () => {
  const {
    selectedProductDisplayOption,
    setSelectedProductDisplayOption,
    showSoldProducts,
    showProductsOnSale,
  } = useStateContext() ?? {};

  return (
    <div className="">
      <div className="bg-black  p-1 w-auto h-auto  border-[1px] border-white rounded-md">
        <div
          className={`cursor-pointer text-${
            selectedProductDisplayOption === "on sale" ? "#cb9f5c" : ""
          } hover:bg-customGray  flex rounded-md px-1 items-center font-bold  `}
          onClick={showProductsOnSale}
        >
          {selectedProductDisplayOption === "on sale" ? (
            <FcCheckmark />
          ) : (
             <FaDashcube />
          )} 
          {/* -- */}
          <p className="ml-1 text-white">On sale</p>
        </div>
        <div
          className={` cursor-pointer text-${
            selectedProductDisplayOption === "sold" ? "[customYellow]" : ""
          } hover:bg-customGray  flex rounded-md px-1  items-center  font-bold`}
          onClick={showSoldProducts}
        >
          {selectedProductDisplayOption === "sold" ? (
            <FcCheckmark />
          ) : (
            <FaDashcube />
          )}{" "}
          <p className="ml-1 text-white">Recently sold</p>
        </div>
      </div>
    </div>
  );
};
export default SelectComponent;
