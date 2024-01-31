import Image from "next/image";
import ProductFrame from "../components/productDisplay/ProductFrame";
import { getAllProductsOnSaleInBatches } from "../utils/utils";
import carImage from "./../../../public/assets/images/car.svg"

export default async function Cars() {
  const allCarsForSale = await getAllProductsOnSaleInBatches();
  return (
    <div className="cars">
      <div className="min-h-[80px] w-full bg-gradient-to-br from-white to-customOrange justify-center">
        {/* car image */}
        <Image src={carImage} alt="car image" width={100} height={60} />
      </div>
      <div>
        <ProductFrame products={allCarsForSale} />
      </div>
    </div>
  );
}
