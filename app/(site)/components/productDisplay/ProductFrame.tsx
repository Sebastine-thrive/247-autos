"use client";
import React, { useState } from "react";
import SelectComponent from "../SelectComponent";
import { useStateContext } from "@/app/context/Contexts";
import ProductCard from "./ProductCard";
import { ProductListProps } from "@/app/types/types";
import ProductCarousel from "./ProductCarousel";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { usePathname } from "next/navigation";

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

  const currentPath = usePathname();

  // Show few products except on the cars page
  const showFewProducts = currentPath !== "/cars";

  return (
    <div className="w-full py-2">
      <div className="flex z-7">
        {/*  sale option and toggle icon */}
        <h4 className="capitalize  absolute left-[5vw] lg:left-[46%] flex  w-auto items-center">
          {" "}
          {selectedProductDisplayOption}{" "}
          {/* Dont' dissplay this on cars page */}
          {!showFewProducts ? (
            <span className="ml-2" onClick={closeOrOpenSelectionBoxOnly}>
              {displaySaleSelectionBox ? (
                <AiFillCaretUp />
              ) : (
                <AiFillCaretDown />
              )}
            </span>
          ) : null}
        </h4>
        {/* option select component */}

        {/* Don't display on cars page */}
        {!showFewProducts ? (
          <div
            className={
              displaySaleSelectionBox
                ? "select-component-container absolute right-[34vw]"
                : "hidden"
            }
          >
            <SelectComponent />
          </div>
        ) : null}

        {/* Show see all button when on home page- currently using show FewProducts state for that */}
        {showFewProducts ? (
          <div className="absolute right-[5vw] lg:right[10vw] hover:scale-105 ">
            <Link href="./cars">
              <h4 className="flex items-center hover:text-customRed">
                {" "}
                See all <span className="ml-1"> &#187; </span>{" "}
              </h4>
            </Link>
          </div>
        ) : null}
      </div>

      {/* Products */}
      <div className="mt-8 z-2 ">
        {/* product content for large screens - home page and cars page */}
        <div className="hidden md:flex justify-center flex-wrap gap-4">
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
            {/* product content for small screens -  cars page */}

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
