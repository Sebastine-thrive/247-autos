"use client";
import React, { useState } from "react";
import SelectComponent from "../SelectComponent";
import { useStateContext } from "@/app/context/Contexts";
import ProductCard from "./ProductCard";
import { ProductListProps } from "@/app/types/types";
import ProductCarousel from "./ProductCarousel";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const ProductFrame: React.FC<ProductListProps> = ({ products }) => {
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
console.log(products)

  return (
    <div className="w-full ">
      <div className="flex relative z-50">
        <h4 className="capitalize flex mx-auto w-auto items-center">
          {" "}
          {selectedProductDisplayOption}{" "}
          <span className="ml-2" onClick={closeOrOpenSelectionBoxOnly}>
            {displaySaleSelectionBox ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </span>
        </h4>
        <div className={displaySaleSelectionBox ? "absolute right-[34vw]" : "hidden"}>
          {/* option selection */}
          <SelectComponent />
        </div>
      </div>

      <div className="mt-4 z-10 ">
        {/* product content for large screens - home page display */}
        <div className="hidden md:flex">
          {products.map((cars, index) => (
            <div className="" key={index}>
              <ProductCard product={cars} />
            </div>
          ))}
        </div>
        {/* product content for small screens - home page display */}

        <div className="flex md:hidden overflow-x-scroll">
          <div>
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFrame;
