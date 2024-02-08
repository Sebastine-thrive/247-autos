"use client";
import { ProductListProps, ProductListPropsOptions } from "@/app/types/types";
import React from "react";
import ProductFrame from "./ProductFrame";
import { useStateContext } from "@/app/context/Contexts";

const ProductSelection: React.FC<ProductListPropsOptions> = ({
  productsOnSale,
  productsSold,
}) => {
  const { selectedProductDisplayOption } = useStateContext() ?? {};

//   console.log(productsSold);
  return (
    <div className="overflow-x-scroll">
      {selectedProductDisplayOption === "on sale" ? (
        <div>
          <ProductFrame products={productsOnSale} />
        </div>
      ) : null}

      {selectedProductDisplayOption === "recently sold" ? (
        <div>
          <ProductFrame products={productsSold} />
        </div>
      ) : null}
    </div>
  );
};

export default ProductSelection;

// const ProductFrame: React.FC<ProductListProps> = ({ products }) => {
