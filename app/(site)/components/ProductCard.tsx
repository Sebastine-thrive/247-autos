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
    <div>
      <Link href={`/product/${slug?.current}`}>
        <div className="product-card xs:flex xs:flex-col xs:justify-center xs:items-center md:block">
          {image && (
            <Image
              src={urlForImage(image[0]) || ""}
              alt={name}
              width={250}
              height={250}
              className="product-image"
            />
          )}
          <p className="product-name"> {name} </p>
          <p className="product-price">
            {price.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
