"use client";
import React, { useState } from "react";
import SelectComponent from "../SelectComponent";
import { useStateContext } from "@/app/context/Contexts";
import ProductCard from "./ProductCard";
import { ProductListProps } from "@/app/types/types";
import ProductCarousel from "./ProductCarousel";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Link from "next/link";

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
  // console.log(products)

  const showFewProducts = products.length <= 4;

  return (
    <div className="w-full ">
      <div className="flex relative z-5">
        {/*  sale option and toggle icon */}
        <h4 className="capitalize flex mx-auto w-auto items-center">
          {" "}
          {selectedProductDisplayOption}{" "}
          <span className="ml-2" onClick={closeOrOpenSelectionBoxOnly}>
            {displaySaleSelectionBox ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </span>
        </h4>
        {/* option select component */}
        <div
          className={
            displaySaleSelectionBox ? "absolute right-[34vw]" : "hidden"
          }
        >
          {/* option selection */}
          <SelectComponent />
        </div>
        {showFewProducts ? (
          <div className="absolute right-[10vw] hover:scale-105 ">
            <Link href="">
              <p className="flex items-center">
                {" "}
                See all <span className="ml-1"> &#187; </span>{" "}
              </p>
            </Link>
          </div>
        ) : null}
      </div>

      <div className="mt-4 z-5 ">
        {/* product content for large screens - home page and cars page */}
        <div className="hidden md:flex justify-center flex-wrap gap-2">
          {products.map((cars, index) => (
            <div className="" key={index}>
              <ProductCard product={cars} />
            </div>
          ))}
        </div>

        {showFewProducts ? (
          <div className="flex md:hidden overflow-x-scroll">
            <ProductCarousel products={products} />
          </div>
        ) : (
          <div className="flex md:hidden justify-center flex-wrap gap-2">
            {products.map((cars, index) => (
              <div className="" key={index}>
                <ProductCard product={cars} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFrame;
