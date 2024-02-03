import React from "react";
import Image from "next/image";
import { CardProps, ProductListProps } from "@/app/types/types";
import ImagesDisplay from "./ImagesDisplay";
import carPic from "./../../../../public/assets/images/car.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { formatPriceInMillion } from "../../utils/utils";
import { BiCar } from "react-icons/bi";

const ProductDetails: React.FC<CardProps> = ({ product }) => {
  const {
    brand,
    details,
    name,
    image,
    location,
    year,
    slug,
    price,
    extra_details,
  } = product;

  return (
    <div className="py-4">
      <div className="product-details-heading min-h-[80px] w-full justify-center ">
        <h1 className="capitalize"> {slug ? slug.toString() : ""} </h1>{" "}
      </div>

      <div>
        <div>
          {/* images of car. first image and and others */}
          <ImagesDisplay images={image} />
        </div>
        <div className="lg:w-[70%] mt-4 flex flex-col justify-center">
          {/* other details of the car. include share button for user to share cars info */}
          {/*1 year | brand | name */}
          <div className="flex items-center capitalize">
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
            <p className="ml-2 md:ml-6"> {brand} </p>
            <p className="ml-4">{name}</p>
          </div>{" "}
          {details.split(";").map((line, index) => (
            <div key={index} className="flex items-center">
              ➕ <p className="ml-1"> {line} </p>
            </div>
          ))}
          <div className="mt-2 flex">
            {" "}
            ✔ <p className="ml-1 capitalize"> {extra_details}</p>
          </div>
          {/*2. location */}
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt />
            <p className="ml-1 capitalize "> {location}</p>
          </div>{" "}
          {/*3. price */}
          <div className="flex items-center mt-2">
            {" "}
            💰
            <p className="ml-1 font-bold">{formatPriceInMillion(price)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
