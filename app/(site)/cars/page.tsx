import Image from "next/image";
import ProductFrame from "../components/productDisplay/ProductFrame";
import { getAllProductsOnSaleInBatches } from "../utils/utils";
import carImage from "./../../../public/assets/images/car.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cars",
};

export default async function Cars() {
  const allCarsForSale = await getAllProductsOnSaleInBatches();
  return (
    <div className="cars min-h-screen ">
      <div className="min-h-[5rem] w-full bg-gradient-to-br from-white to-customOrange flex justify-center items-center">
        {/* car image */}
        <Image src={carImage} alt="car image" width={100} height={60} />
      </div>
      <div className="px-12">
        <ProductFrame products={allCarsForSale} />
      </div>
    </div>
  );
}
