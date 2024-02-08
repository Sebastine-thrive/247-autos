import React from "react";
import small_logo from "../../../public/assets/logo/logo__small.jpg";
import Image from "next/image";
import Link from "next/link";
import footerRightSvg from "../../../public/assets/images/footer-bottom-right.svg";
import footerLeftSvg from "../../../public/assets/images/footer-left-svg.svg";

const Footer: React.FC = () => {
  return (
    <div className="footer-container relative  text-sm md:text-lg max-w-[1920px] w-[100vw] bg-[#040404] text-white p-8">
      <div className="footer-links">
        <div className="logo-socials-container">
          <div className="flex items-center">
            <div className="footer-logo w-[80px] h-[40px] mr-4 flex ">
              <Image
                src={small_logo}
                width={80}
                height={40}
                alt="logo image for small screens"
                className="  logo small__logo cursor-pointer border-[1px] hover:border-customYellow rounded-sm "

              />
            </div>

            <h3> 247 Autos</h3>
          </div>
        </div>

        <div className="footer-page-links  w-full  flex justify-center ">
          <div className="footer-page-links-wrapper mt-4 flex flex-wrap gap-x-2 text-sm md:text-lg gap-y-4 w-full lg:w-[70%] justify-between">
            <div className="page-links gap-x-8 capitalize ">
              <Link href="">
                {" "}
                <h4 className="text-[#cb9f5c] hover:border-b hover:text-customRed cursor-pointer">
                  Why 247{" "}
                </h4>
              </Link>
            </div>

            <div className="page-links capitalize ">
                <h4 className="text-[#cb9f5c]">Products</h4>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer ">
                  New
                </p>
              </Link>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer">
                  Used
                </p>
              </Link>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer">
                  Sell your Car
                </p>
              </Link>
            </div>

            <div className="page-links capitalize">
              <h4 className="text-[#cb9f5c]">Resources</h4>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer">
                  FAQs
                </p>
              </Link>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer">
                  Blog
                </p>
              </Link>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer">
                  Contact us
                </p>
              </Link>
            </div>

            <div className="page-links capitalize  cursor-pointer">
              <h4 className="text-[#cb9f5c]">Socials</h4>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer">
                  Facebook
                </p>
              </Link>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer">
                  Instagram
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-note"></div> */}
      <div className="footer-note text-customYellow text-xs sm:text-sm md:text-lg  sm:text- mt-2 flex lg:block justify-center lg:text-end lg:mt-2 ">
        <p className="footer-terms mr-2 pr-8 lg:pr-0 capitalize hover:border-b hover:text-customRed inline-block">
          Terms of Service
        </p>
        <p className="brand-and-year inline-block  lg:ml-2 pl-6 lg:pl-2 border-l border-white ">24//7 Autos; 2023</p>
      </div>
      <div className="absolute right-0 bottom-0 ">
        <Image
          src={footerRightSvg}
          alt="footer right svg image"
          width={200}
          height={200}
        />
      </div>
      <div className="hidden lg:absolute left-0 bottom-0">
        <Image
          src={footerLeftSvg}
          alt="footer right svg image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
export default Footer;
