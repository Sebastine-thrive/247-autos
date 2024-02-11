import HomepageHero from "./components/heroHomePage/HomepageHero";
import BrandBenefits from "./components/brandBenefits/BrandBenefits";
import CustomerComponent from "./components/customers/CustomerComponent";
import ProductFrame from "./components/productDisplay/ProductFrame";
import { getFirstFewProductSold, getFirstFewProductsOnSale } from "./utils/utils";
import { FaqComponent } from "./components/FaqComponents/FaqComponent";
import ProductSelection from "./components/productDisplay/ProductSelection";

export default async function Home() {
  const firstFewProductsOnSale = await getFirstFewProductsOnSale();
  const firstFewSoldProducts = await getFirstFewProductSold();

  // console.log(firstFewProductsOnSale);
  // console.log(firstFewSoldProducts);


  return (
    <main className="home-container">
      {/* Hero 1 */}
      <div>
        <HomepageHero />
      </div>

      {/* 2 Products in categories
      All-BrandNew-Used-RecentlySold-SortBybudget*/}

      <div className="products-container__homepage w-[100vw] flex flex-col bg-[#e5c8a0] ">
        <h2 className="mx-auto text-2xl font-bold"> Cars </h2>
        <div className="flex w-full relative mt-4">
          <ProductSelection  productsOnSale={firstFewProductsOnSale} 
          productsSold = {firstFewSoldProducts}
          />
          {/* <ProductFrame products={firstFewProductsOnSale} /> */}
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
