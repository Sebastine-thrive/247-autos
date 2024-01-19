"use client";
import { useStateContext } from "@/app/context/Contexts";
import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";

interface SelectProps {
  options: string[];
  // onChange: (value: string) => void;
}

const SelectComponent: React.FC = () => {
  const {
    selectedProductDisplayOption,
    setSelectedProductDisplayOption,
    showSoldProducts,
    showProductsOnSale,
  } = useStateContext() ?? {};

  return (
    <div className="">
      <div className="bg-black  p-1 w-auto h-auto text-white border-1 border-white rounded-md">
        <div
          className={`cursor-pointer text-${
            selectedProductDisplayOption === "on sale"
              ? "[customYellow]"
              : "white"
          } hover:bg-customGray  flex rounded-md px-1 items-center  `}
          onClick={showProductsOnSale}
        >
          {selectedProductDisplayOption === "on sale" ? <FcCheckmark /> : null}
          <p className="ml-1">On sale</p>
        </div>
        <div
          className={` cursor-pointer text-${
            selectedProductDisplayOption === "sold" ? "[customYellow]" : "white"
          } hover:bg-customGray  flex rounded-md px-1  items-center`}
          onClick={showSoldProducts}
        >
          {selectedProductDisplayOption === "sold" ? <FcCheckmark /> : null}
          <p className="ml-1">Recently sold</p>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
