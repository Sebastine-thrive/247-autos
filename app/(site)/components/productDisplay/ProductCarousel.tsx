"use client";
import React, { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductListProps } from "@/app/types/types";


const ProductCarousel: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div
      className="w-full overflow-x-auto md:overflow-hidden relative py-4 px-2"
    >
      <div
        className="flex space-x-4 transition-transform duration-300 ease-in-out transform"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
  
    </div>
  );
};

export default ProductCarousel;
