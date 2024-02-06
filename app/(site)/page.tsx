import HomepageHero from "./components/heroHomePage/HomepageHero";
import BrandBenefits from "./components/brandBenefits/BrandBenefits";
import CustomerComponent from "./components/customers/CustomerComponent";
import ProductFrame from "./components/productDisplay/ProductFrame";
import FaqComponent from "./components/faqComponents/FaqComponent";
import { getFirstTenProductsOnSale } from "./utils/utils";

export default async function Home() {
  const firstTenProducts = await getFirstTenProductsOnSale();

  return (
    <main className="home-container">
      {/* Hero 1 */}
      <div>
        <HomepageHero />
      </div>

      {/* 2 Products in categories
      All-BrandNew-Used-RecentlySold-SortBybudget*/}

      <div className="products-container__homepage w-[100vw] flex flex-col bg-[#e5c8a0] ">
        <h2 className="mx-auto text-2xl"> Cars </h2>
        <div className="flex w-full mt-4">
          <ProductFrame products={firstTenProducts} />
        </div>
      </div>

      {/* 3 Why 247 Autos */}
      <div className="brand-benefits bg-[#fff] w-[100vw]">
        <BrandBenefits />
      </div>

      {/* 4 Satisfied customers - What they are saying */}
      <div className="customers-comments bg-[#e5c8a0] flex flex-col justify-center w-[100vw] ">
        <CustomerComponent />
      </div>

      {/* FAQS */}
      <div className="faq bg-white flex justify-center w-[100vw]">
        <FaqComponent />{" "}
      </div>
    </main>
  );
}
