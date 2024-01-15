"use client"
import React, { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

interface Product {
  _id: string;
  // Add other properties of the product here
}

interface CarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<CarouselProps> = ({ products }) => {
  const [position, setPosition] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate the number of items to display based on container width
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const itemWidth = 270; // width of product card
    const newItemsPerPage = Math.floor(containerWidth / itemWidth);
    setItemsPerPage(newItemsPerPage);
  }, [containerRef, products]);

  const slideLeft = () => {
    if (position > 0) {
      setPosition((prevPosition) => prevPosition - 1);
    }
  };

  const slideRight = () => {
    if (position < products.length - itemsPerPage) {
      setPosition((prevPosition) => prevPosition + 1);
    }
  };

  const isLeftDisabled = position === 0;
  const isRightDisabled = position >= products.length - itemsPerPage;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto md:overflow-hidden relative py-4 px-2"
    >
      <div
        className="flex space-x-4 transition-transform duration-300 ease-in-out transform"
        style={{
          transform: `translateX(-${
            position * (containerRef.current?.offsetWidth || 0) / itemsPerPage
          }px)`,
        }}
      >
        {/* {products.map((product, index) => (
            <ProductCard   key={index} 
            product={product} 
            />
        ))} */}
      </div>
      <button
        className={`hidden md:flex px-4 py-2 bg-red-500 text-white font-extrabold rounded-full w-12 h-12 absolute left-[2%] top-[35%] text-center justify-center items-center ${
          isLeftDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={slideLeft}
        disabled={isLeftDisabled}
      >
        <BiChevronsLeft />
      </button>
      <button
        className={`hidden md:flex px-4 py-2 bg-red-500 text-white font-extrabold rounded-full w-12 h-12 absolute right-[5%] top-[35%] text-center justify-center items-center ${
          isRightDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={slideRight}
        disabled={isRightDisabled}
      >
        <BiChevronsRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
