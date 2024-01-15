import Image from 'next/image'
import React from 'react'
import { benefitsData } from '../BenefitsData'

const BrandBenefits : React.FC = () => {
  return (
    <>
<div className="flex flex-col w-full ">
          <h3 className="mx-auto my-8 font-extrabold text-[#d21108]">
            Why 24//7 Autos{" "}
          </h3>
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

                <h6 className="text-[#f02d34] capitalize text-center font-medium my-6">
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
    </>
  )
}

export default BrandBenefits