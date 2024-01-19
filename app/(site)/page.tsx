import Image from "next/image";
import CustomerServicingData from "./components/customers/CustomerServicingData";

import Faq from "./components/faqComponents/Faq";
import CustomerComments from "./components/customers/CustomerComments";
import HomepageHero from "./components/heroHomePage/HomepageHero";
import BrandBenefits from "./components/brandBenefits/BrandBenefits";
import CustomerComponent from "./components/customers/CustomerComponent";
import ProductFrame_Large from "./components/productDisplay/ProductFrame_Large";
import { getFirstTenProductsOnSale } from "./utils/utils";
import { ProductsArray } from "../types/types";

export default async function Home() {
  const firstTenProducts = await getFirstTenProductsOnSale();
  // console.log(firstTenProducts);

  return (
    <main className="home-container">
      {/* Hero 1 */}
      <div>
        <HomepageHero />
      </div>

      {/* 2 Products in categories
      All-BrandNew-Used-RecentlySold-SortBybudget*/}

      <div className="products-container__homepage w-[100vw] flex flex-col bg-[#e5c8a0]">
        <h3 className="mx-auto">Your Products</h3>
        <div className="w-full mt-4">
          <ProductFrame_Large products={firstTenProducts} />
        </div>
      </div>

      {/* 3 Why 247 Autos */}
      <div className="brand-benefits bg-[#fff]">
        <BrandBenefits />
      </div>

      {/* 4 Satisfied customers 
      - What they are saying */}
      <div className="customers-comments bg-[#e5c8a0] flex flex-col justify-center ">
        <CustomerComponent />
      </div>

      {/* FAQS */}
      <div className="faq bg-white flex justify-center">
        <Faq />{" "}
      </div>
    </main>
  );
}
