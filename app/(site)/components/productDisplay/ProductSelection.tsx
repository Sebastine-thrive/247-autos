"use client";
import { ProductListProps, ProductListPropsOptions } from "@/app/types/types";
import React from "react";
import ProductFrame from "./ProductFrame";
import { useStateContext } from "@/app/context/Contexts";
import { motion } from "framer-motion";
import { mainImageShow } from "../pageAnimation/AnimationVariables";

const ProductSelection: React.FC<ProductListPropsOptions> = ({
  productsOnSale,
  productsSold,
}) => {
  const { selectedProductDisplayOption } = useStateContext() ?? {};

  return (
    <motion.div
      variants={mainImageShow}
      initial="hidden"
      animate="show"
      className="overflow-x-auto"
    >
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
    </motion.div>
  );
};

export default ProductSelection;
