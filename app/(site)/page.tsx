import Image from "next/image";
import CustomerServicingData from "./components/customers/CustomerServicingData";

import Faq from "./components/faqComponents/Faq";
import CustomerComments from "./components/customers/CustomerComments";
import HomepageHero from "./components/heroHomePage/HomepageHero";
import BrandBenefits from "./components/brandBenefits/BrandBenefits";
import CustomerComponent from "./components/customers/CustomerComponent";

export default function Home() {
  return (
    <main className="home-container">
      {/* Hero 1 */}
      <div>
        <HomepageHero />
      </div>

      {/* 2 Products in categories
      All-BrandNew-Used-RecentlySold-SortBybudget
      */}

      <div className="products-container__homepage bg-[#636b8a]">
        <h3>Your Products</h3>
      </div>

      {/* 3 Why 247 Autos */}
      <div className="brand-benefits bg-[#fff]">
        <BrandBenefits />
      </div>

      {/* 4 Satisfied customers 
      - What they are saying */}
      <div className="customers-comments bg-[#636b8a] flex flex-col justify-center ">
        <CustomerComponent />
      </div>

      {/* FAQS */}
      <div className="faq bg-white flex justify-center">
        <Faq />{" "}
      </div>
    </main>
  );
}
