"use client";
import React from "react";
import SelectComponent from "../SelectComponent";
import { useStateContext } from "@/app/context/Contexts";
// import ProductContainer from "../ProductContainer";
import ProductCard from "./ProductCard";
import { ProductListProps } from "@/app/types/types";
import { Product } from "@/app/types/types";

const options = ["on sale", "recently sold", "Option 3"];

const ProductFrame_Large: React.FC<ProductListProps> = ({ products }) => {
  const { selectedProductDisplayOption } = useStateContext() ?? {};

  return (
    <div className="w-full ">
      <div className="flex relative z-50">
        <h4 className="capitalise mx-auto">
          {" "}
          {selectedProductDisplayOption}
        </h4>
        <div className="absolute right-[30%]">
          {/* option selection */}
          <SelectComponent />
        </div>
      </div>

      <div className="flex mt-4 z-10">
        {/* product content */}
        {products.map((car, index) => (
          <div className="" key={index}>
            <ProductCard product={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFrame_Large;
