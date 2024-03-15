import React from "react";
import { benefitsData } from "./BenefitsData";

const BrandBenefits: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <h2 className="mx-auto mb-8 font-bold text-2xl ">Why 24//7 Autos </h2>
        <div className="flex flex-wrap justify-center m-auto xxs:gap-8 md:gap-12 w-full">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center w-full md:w-[30%] bg-[#fff] px-3 py-2 rounded-md "
            >
              <div className="benefit-image max-w-[100px] max-h-[80px]">
                <div className={`${benefit.className}`}>{benefit.icon}</div>
                {/* <Image
                  src={benefit.imageSrc}
                  alt={benefit.imageAlt}
                  width={100}
                  height={80}
                  className={benefit.className}
                  priority
                /> */}
              </div>

              <h6 className="text-[#f02d34] capitalize text-center font-medium my-6">
                {benefit.title}
              </h6>
              <p className="my-4 mx-auto text-center">{benefit.description}</p>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandBenefits;
