/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";

interface ProductProps {
  product: {
    image: any[];
    name: string;
    slug: {
      current?: string;
    };
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { image, name, slug, price } = product;

  return (
    <>
      <Link href={`/product/${slug?.current}`}>
        <div className="product-card xxs:flex flex-col justify-center items-center md:block">
          {image && (
            <div>
              <Image
                src={urlForImage(image[0]) || ""}
                alt={name}
                width={250}
                height={250}
                className="product-image"
              />
            </div>
          )}
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex flex-col">
                {/* year | brand | name */}
                <div className="flex items-center"> 
                <p>year</p> <p className="ml-6"> brand</p> <p className="ml-4">name</p>
                </div>
                <p className="mt-4"> extra summary info</p>
              </div>

              <p className="mt-6"> Location</p>
            </div>

            <div className="price my-auto">
            <p className="product-price">
              {price.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            </p>

            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
