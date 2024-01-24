/* eslint-disable react/no-unescaped-entities */
"use client";
import { useStateContext } from "@/app/context/Contexts";
import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineCheck } from "react-icons/ai";

const SelectComponent: React.FC = () => {
  const {
    selectedProductDisplayOption,
    setSelectedProductDisplayOption,
    showSoldProducts,
    showProductsOnSale,
    displaySaleSelectionBox,
    setDisplaySaleSelectionBox,
  } = useStateContext() ?? {};

  const showProductsOnSaleAndCloseSelector = () => {
    if (showProductsOnSale) {
      showProductsOnSale();
    }
    if (setDisplaySaleSelectionBox) {
      setDisplaySaleSelectionBox(!displaySaleSelectionBox);
    }
  };

  
  const showSoldProductsAndCloseSelector = () => {
    if (showSoldProducts) {
      showSoldProducts();
    }
    if (setDisplaySaleSelectionBox) {
      setDisplaySaleSelectionBox(!displaySaleSelectionBox);
    }
  };

  return (
    <div>
      <div className="bg-black  p-1 w-auto h-auto  border-[1px] border-white rounded-md">
        <div
          className={`cursor-pointer text-${
            selectedProductDisplayOption === "on sale" ? "#cb9f5c" : ""
          } hover:bg-customGray  flex rounded-md px-1 items-center font-bold  `}
          // onClick={showProductsOnSale}
          onClick={showProductsOnSaleAndCloseSelector}

        >
          {selectedProductDisplayOption === "on sale" ? (
            <span className="w-[20px] p-1">
              {" "}
              <FcCheckmark />
            </span>
          ) : (
            <span className="w-[20px] p-1"> </span>
          )}

          <p className="ml-1 text-white">On sale</p>
        </div>
        <div
          className={` cursor-pointer text-${
            selectedProductDisplayOption === "recently sold" ? "[customYellow]" : ""
          } hover:bg-customGray  flex rounded-md px-1  items-center  font-bold`}
          // onClick={showSoldProducts}
          onClick={showSoldProductsAndCloseSelector}

        >
          {selectedProductDisplayOption === "recently sold" ? (
            <span className="w-[20px] p-1">
              {" "}
              <FcCheckmark />
            </span>
          ) : (
            <span className="w-[20px] p-1"> </span>
          )}
          <p className="ml-1 text-white">Recently sold</p>
        </div>
      </div>
    </div>
  );
};
export default SelectComponent;
