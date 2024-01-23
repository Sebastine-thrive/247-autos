"use client";
import React, { useState } from "react";
import SelectComponent from "../SelectComponent";
import { useStateContext } from "@/app/context/Contexts";
import ProductCard from "./ProductCard";
import { ProductListProps } from "@/app/types/types";
import ProductCarousel from "./ProductCarousel";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const ProductFrame_Large: React.FC<ProductListProps> = ({ products }) => {
  const {
    selectedProductDisplayOption,
    displaySaleSelectionBox,
    setDisplaySaleSelectionBox,
  } = useStateContext() ?? {};

  const closeOrOpenSelectionBoxOnly = () => {
    if (setDisplaySaleSelectionBox) {
      setDisplaySaleSelectionBox(!displaySaleSelectionBox);
    }
  };

  return (
    <div className="w-full ">
      <div className="flex relative z-50">
        <h4 className="capitalise mx-auto w-12">
          {" "}
          {selectedProductDisplayOption}{" "}
          <span className="ml-2" onClick={closeOrOpenSelectionBoxOnly}>
            {/* {displaySaleSelectionBox  
            ? 
               <AiFillCaretUp /> : <AiFillCaretDown
} */}
      
          </span>
        </h4>
        <div className="absolute right-[35%]">
          {/* option selection */}
          <SelectComponent />
        </div>
      </div>

      <div className="mt-4 z-10 hidden lg:flex">
        {/* product content */}
        <div className="hidden lg:flex">
          {products.map((cars, index) => (
            <div className="" key={index}>
              <ProductCard product={cars} />
            </div>
          ))}
        </div>

        <div className="flex lg:hidden">
          <div>
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFrame_Large;
