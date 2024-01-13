import Image from "next/image";
import VideoBackground from "./components/VideoComponent";
import { benefitsData } from "./components/BenefitsData";
import CustomerServicingData from "./components/CustomerServicingData";

import carImage from "./../../public/assets/hero-image/247_autos_red.png";
import timeImage from "./../../public/assets/images/efficient-timing.svg";
import moneyImage from "./../../public/assets/images/money.jpg";
import Faq from "./components/FaqComponents/Faq";
import CustomerComments from "./components/CustomerComments";

export default function Home() {
  return (
    <main className="home-container">
      {/* Hero 1 */}
      <div className="hero__homepage flex  ">
        <div className="intro flex flex-col items-center  w-[50%] h-[60%] min-w-[40%]">
          <div className=" flex items-center text-[50px] mb-8">
            {" "}
            <h2 className="brand-yellow capitalize font-extrabold tracking-wide">
              Drive
            </h2>{" "}
            <h2 className="mx-[5px]"> Your Dreams </h2>{" "}
            <h2 className="brand-yellow capitalize font-extrabold">Daily</h2>{" "}
          </div>
          <div className="flex items-center text-[32px] mt-16  ">
            {" "}
            <h3>Discover a Car Buying Experience </h3>
            <h3 className="brand-yellow font-bold ml-[5px]">
              {" "}
              Tailored to You.
            </h3>
          </div>
        </div>
        <div className="hero-image-wrapper__homepage flex relative justify-center items-center xxs:w-[90%] xxs:h-[90%] lg:w-[50%] h-[60%]">
          <div className="dark-overlay absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
          <VideoBackground />
          <h4 className="name absolute text-[30px]">
            {" "}
            <span className="text-[#d21108] font-bold"> 24//7 </span>{" "}
            <span className="text-white font-bold"> Autos </span>
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
      <div className="brand-benefits bg-[#fff]">
        <div className="flex flex-col w-full ">
          <h3 className="mx-auto my-8">Why 24//7 Autos </h3>
          <div className="flex flex-wrap justify-center m-auto xxs:gap-8 md:gap-12 w-full">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className=" flex flex-col justify-center items-center w-full md:w-1/2 lg:w-[30%] "
              >
                <div className="benefit-image max-w-[100px] max-h-[80px]">
                  <Image
                    src={benefit.imageSrc}
                    className={benefit.className}
                    alt={benefit.imageAlt}
                    width={100}
                    height={80}
                  />
                </div>

                <h6 className="text-[#f02d34] capitalize text-center font-medium my-4">
                  {benefit.title}
                </h6>
                <p className="my-4 mx-auto text-center">
                  {benefit.description}
                </p>
              </div>
              // </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Satisfied customers 
      - What they are saying */}
      <div className="customers-comments bg-[#636b8a] flex flex-col justify-center ">
        <div className=" flex justify-center xss:w-full sm:w-[80%] lg:w-[100%]">
          <CustomerServicingData />
        </div>
        <div className=" flex flex-col w-full justify-center items-center">
          <h4 className="text-[40px] my-4 border-t-14 border-b-14 border-solid border-yellow-500">
            What our Customers are saying{" "}
          </h4>
          <div className="my-4">
            <CustomerComments />{" "}
          </div>
        </div>
      </div>

      {/* FAQS */}
      <div className="faq bg-white">
        <div className="flex justify-center">
          <Faq />{" "}
        </div>
      </div>
    </main>
  );
}
