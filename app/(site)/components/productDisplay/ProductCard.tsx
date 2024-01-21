/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCar } from "react-icons/bi";
import { CardProps, ProductListProps } from "@/app/types/types";
import { FaMapMarkerAlt } from "react-icons/fa";

// import Img from "next/image";

import { urlForImage } from "@/sanity/lib/image";

interface ProductProps {
  product: {
    image: any[];
    name: string;
    brand: string;
    slug: {
      current?: string;
    };
    price: number;
    year: number;
    extra_details: string;
    location: string;
  };
}
const ProductCard: React.FC<CardProps> = ({ product }) => {
  const { brand, image, _type, location, year, slug, price, extra_details } =
    product;

  return (
    <>
      <Link href={`/product/${slug}`}>
        <div className="product-card bg-white text-black xxs:flex flex-col justify-center items-center rounded-sm">
          {image && (
            <div className="w-[300px] h-[290px] pt-[5px]">
              <Image
                src={image.length > 0 ? urlForImage(image[0]) : ""}
                alt={_type}
                width={300}
                height={280}
                className="product-image w-auto rounded-sm"
              />
            </div>
          )}

          {/* Houses other details asides images */}
          <div className="flex flex-col mt-2 h-[120px] px-1 py-1 text-black">
            {/* <div className="flex flex-col"> */}
            <div className="flex flex-col">
              {/* year | brand | name */}
              <div className="flex items-center capitalize">
                {year ? (
                  <p className="bg-yellow-200 rounded-sm p-1 h-[20px] flex items-center"> {year}</p>
                ) : (
                  <p className="bg-yellow-200 rounded-sm p-1"> <BiCar />
                  </p>
                )}
                <p className="ml-6"> {brand} </p>
                {/* <p className="ml-4">{_type}</p> */}
              </div>
              <p className="mt-2"> {extra_details}</p>
            </div>

            <div className="mt-2 flex ">
              {/* Location */}
              <div className="mr-2 flex items-center">
                <FaMapMarkerAlt />
                <p className="ml-2 capitalize"> {location}</p>
              </div>

              {/* Price */}
              <div className="price ml-2 pl-3 border-l border-black h-auto flex items-center">
                <p className="product-price font-bold bg-yellow-200 rounded-sm p-1">
                  {price?.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
