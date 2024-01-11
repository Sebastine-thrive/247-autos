import Image from "next/image";
import VideoBackground from "./components/VideoComponent";
import { benefitsData } from "./components/BenefitsData";
import CustomerServicingData from "./components/CustomerServicingData";

import carImage from "./../../public/assets/hero-image/247_autos_red.png";
import timeImage from "./../../public/assets/images/efficient-timing.svg";
import moneyImage from "./../../public/assets/images/money.jpg";

export default function Home() {
  return (
    <main className="home-container">
      {/* Hero 1 */}
      <div className="hero__homepage flex  ">
        <div className="intro flex flex-col items-center justify-start  w-[50%] h-[60%] min-w-[40%]">
          <h2 className="text-[40px] mt-[-3rem]">
            {" "}
            <span className="brand-yellow capitalize">Drive</span> Your Dreams{" "}
            <span className="brand-yellow capitalize">Daily</span>{" "}
          </h2>
          <h3 className="text-[32px] flex mt-16  ">
            {" "}
            Discover a Car Buying Experience{" "}
            <span className="brand-yellow ml-[5px]"> Tailored to You.</span>
          </h3>
        </div>
        <div className="hero-image-wrapper__homepage flex relative justify-center items-center xxs:w-[90%] xxs:h-[90%] lg:w-[50%] h-[60%]">
          <div className="dark-overlay absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
          <VideoBackground />
          <h4 className="name absolute">
            {" "}
            <span className="text-[#d21108]"> 24//7 </span>{" "}
            <span className="text-white"> Autos </span>
          </h4>
        </div>
      </div>

      {/* 2 Products in categories
      All-BrandNew-Used-RecentlySold-SortBybudget
      */}

      <div className="products-container__homepage bg-[#636b8a]">
        <h3>Your Products</h3>
      </div>

      {/* 3 Why 247 Autos */}
      <div className="brand-benefits bg-[#000] text-white">
        <div className="flex flex-col w-full ">
          <h4 className="mx-auto">Why 24//7 Autos </h4>
          <div className="flex flex-wrap gap-4 w-full">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-[30%]">
                <div key={index} className="flex flex-col items-center ">
                  <Image
                    src={benefit.imageSrc}
                    className={benefit.className}
                    alt={benefit.imageAlt}
                    width={50}
                    height={50}
                  />
                  <h6>{benefit.title}</h6>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Satisfied customers 
      - What they are saying */}
      <div className="customers-comments bg-[#636b8a]">
        <div className=" flex justify-center xss:w-full sm:w-[80%] lg:w-[50%]">
          <CustomerServicingData />
        </div>
        <div>
          <h4>What our Customers are saying </h4>
          <div>
            {/* Get IG or any social mefia acoount of four or more satisfied customers */}
          </div>
        </div>
      </div>

      {/* FAQS */}
      <div className="faq bg-white">
        <h3> Faq</h3>
      </div>
    </main>
  );
}
