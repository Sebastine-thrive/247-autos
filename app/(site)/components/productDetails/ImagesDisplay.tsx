/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { CardProps } from "@/app/types/types";


interface ImagesDisplayProps {
    images: any[];
  }
  const ImagesDisplay: React.FC<ImagesDisplayProps> = ({ images }) => {
    // const { image } = product;
  const [index, setIndex] = useState(0);
  const [Loading, setIsLoading] = useState(false);

  return (
    <div className="images-wrapper w-full flex flex-col mt-2">
      <div className="image-container bg-white mx-auto">
        <Image
          src={images ? urlForImage(images[index]) : ""}
          alt="large product image"
          className="large-product-image rounded-md bg-white"
          width={400}
          height={300}
          priority={true}
        />
      </div>
      <div className="small-images-container mt-4 flex mx-auto justify-center flex-wrap gap-2">
        {/* Images client components needing server image prop */}
        {images?.map((item, i) => (
          <Image
            src={urlForImage(item)}
            key={i}
            alt="smaller product image"
            width={100}
            height={100}
            priority={true}
            className={
              i === index ? "small-image rounded-md selected-image" : "small-image"
            }
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesDisplay;
