import React from "react";
import Image from "next/image";
import { CardProps, ProductListProps } from "@/app/types/types";
import ImagesDisplay from "./ImagesDisplay";
import CarPic from "./../../../../public/assets/images/car.svg"

const ProductDetails: React.FC<CardProps> = ({ product }) => {
  const { brand, name, image, location, year, slug, price, extra_details } = product;

  return (
    // main container
    <div>
      {/* brand div with sweet talks */}

      <div className="about-us-heading-image min-h-[80px] w-full bg-gradient-to-br from-white to-customOrange justify-center ">
        {/* background image here*/}
        <Image src={carPic} alt="car image" width={100} height={60} />
      </div>

      <div>
        <div>{/* images of car. first image and and others */}
        <ImagesDisplay images ={image} />
        </div>
        <div className="lg:w-[70%] flex justify-center">
          {/* other details of the car. include share button for user to share cars info */}

        </div>
      </div>
      {/* other suggestions for viewer */}
    </div>
  );
};

export default ProductDetails;
