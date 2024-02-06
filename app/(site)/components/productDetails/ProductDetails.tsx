import React from "react";
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
  // console.log(product);
  return (
    <div className="product-details pb-4">
      <div className="product-details-heading min-h-[80px] w-full flex justify-center items-center ">
        <h1 className="capitalize mx-auto">
          {" "}
          <span>{brand} </span> <span className="ml-2">{name} </span>{" "}
        </h1>{" "}
      </div>

      <div>
        <div>
          {/* images of car. first image and and others */}
          <ImagesDisplay images={image} />
        </div>

        {/* other details of the car. include share button for user to share cars info */}
        <div className="lg:w-[50%] bg-[#cb9f5c] font-normal rounded-md mt-8 flex flex-col mx-[5px] xs:mx-[10px] md:mx-auto sm:px-3 md:px-5  capitalize">
          {/*1 year | brand | name */}
          <div className="flex justify-center items-center font-bold">
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
          <div className=" gap-2 mt-2 ">
            {details?.split(";").map((line, index) => (
              <div key={index} className="flex items-center gap-y-2  ">
                ✔ <p className="ml-1"> {line} </p>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center">
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
