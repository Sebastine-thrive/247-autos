/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  mainImageShow,
  otherImagesShow,
  variants,
} from "../pageAnimation/AnimationVariables";

interface ImagesDisplayProps {
  images: any[];
}
const ImagesDisplay: React.FC<ImagesDisplayProps> = ({ images }) => {
  // const { image } = product;
  const [index, setIndex] = useState(0);
  const [Loading, setIsLoading] = useState(false);

  return (
    <motion.div
      className="images-wrapper w-full flex flex-col mt-2"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="image-container bg-white mx-auto"
        variants={mainImageShow}
        initial="hidden"
        animate="show"
      >
        <Image
          src={images ? urlForImage(images[index]) : ""}
          alt="large product image"
          className="large-product-image rounded-md bg-white"
          width={400}
          height={300}
          priority
        />
      </motion.div>

      <motion.div
        className="small-images-container mt-4 flex mx-auto justify-center flex-wrap gap-2"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {/* Images client components needing server image prop */}
        {images?.map((item, i) => (
          <motion.div
            key={i}
            variants={otherImagesShow}
            initial="hidden"
            animate="show"
          >
            <Image
              src={urlForImage(item)}
              alt="smaller product image"
              width={100}
              height={100}
              priority
              className={
                i === index
                  ? "small-image rounded-md selected-image"
                  : "small-image"
              }
              onMouseEnter={() => setIndex(i)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImagesDisplay;
