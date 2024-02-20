/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCar } from "react-icons/bi";
import { CardProps, ProductListProps } from "@/app/types/types";
import { FaMapMarkerAlt } from "react-icons/fa";

import { urlForImage } from "@/sanity/lib/image";
import { formatPriceInMillion } from "../../utils/utils";
import { Tooltip } from "react-tooltip";
// import soldImage from "../../../../public/assets/images/sold-image.svg";
import soldImage2 from "../../../../public/assets/images/sold-image2.png";


const ProductCard: React.FC<CardProps> = ({ product }) => {
  const {
    brand,
    name,
    image,
    location,
    year,
    slug,
    price,
    extra_details,
    sold,
  } = product;

  return (
    <div className="relative">
      <Link href={`/cars/${slug?.current}`} className="product-card-link">
        <div className="product-card bg-white text-black flex flex-col justify-center items-center rounded-sm">
          {image && (
            <div className="md:w-[300px] md:h-[290px] pt-[2px]">
              <Image
                src={image.length > 0 ? urlForImage(image[0]) : ""}
                alt={brand + name}
                width={300}
                height={280}
                className="product-image w-auto rounded-sm"
              />
            </div>
          )}

          {/* Houses other details asides images */}
          <div className="flex flex-col text-xs md:text-base h-[120px] px-1 pb-1 text-black my-[2px] md:mx-0 justify-center text-center md:justify-start md:text-start overflow-hidden md:overflow-hidden">
            {/* <div className="flex flex-col"> */}
            <div className="flex flex-col">
              {/* year | brand | name */}
              <div className="flex items-center capitalize justify-center md:justify-start">
                {year ? (
                  <p className="bg-yellow-200 rounded-sm p-1 h-[20px] flex items-center">
                    {" "}
                    {year}
                  </p>
                ) : (
                  <p className="bg-yellow-200 rounded-sm p-1">
                    {" "}
                    <BiCar />
                  </p>
                )}
                <p className="ml-2"> {brand} </p>
                <p className="ml-2">{name}</p>
              </div>
              <p className="mt-[2px] md:mt-2"> {extra_details}</p>
            </div>

            <div className="mt-[2px] md:mt-2 flex ">
              {/* Location */}
              <div className="ml-1 md:mr-2 flex items-center">
                <FaMapMarkerAlt />
                <p className="ml-1 md:ml-2 capitalize"> {location}</p>
              </div>

              {/* Price */}
              <div className="price ml-2 pl-3 text-sm md:text-lg border-l border-black h-auto flex items-center">
                <p className="product-price font-bold bg-yellow-200 rounded-sm p-1">
                  &#8358;{formatPriceInMillion(price)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Tooltip
        anchorSelect=".product-card-link"
        place="top"
        content="Click to see car details!"
        className="hidden lg:block"
      />
      {sold ? (
        <div className="sold-indicator max-h-[120px] absolute bottom-24 right-4">
          <Image
            src={soldImage2}
            alt="sold image identifier"
            width={100}
            height={80}
            className="rounded-sm w-[100px] h-[80px] lg:w-[150px] lg:h-[120px]"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;
