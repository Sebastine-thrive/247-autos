import React from "react";
import small_logo from "../../../public/assets/logo/logo__small.jpg";
import Image from "next/image";
import Link from "next/link";
import footerRightSvg from "../../../public/assets/images/footer-bottom-right.svg";
import footerLeftSvg from "../../../public/assets/images/footer-left-svg.svg";

const Footer: React.FC = () => {
  return (
    <div className="footer-container relative pt-8 text-sm md:text-lg max-w-[1920px] w-[100vw] bg-[#040404] text-white p-8">
      <div className="footer-links my-8">
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
          <div className="footer-page-links-wrapper mt-4 flex flex-wrap gap-x-2 gap-y-8  text-sm md:text-lg w-full lg:w-[70%] justify-between">
            <div className="page-links gap-x-8 capitalize ">
              <Link href="/#why-us">
                {" "}
                <h4 className="text-[#cb9f5c] hover:border-b hover:text-customRed cursor-pointer   w-fit">
                  Why 247{" "}
                </h4>
              </Link>
            </div>

            <div className="page-links capitalize ">
              <h4 className="text-[#cb9f5c]">Products</h4>
              <Link href="">
                <p className="hover:border-b hover:text-customRed w-fit  my-4 lg:my-0 cursor-pointer ">
                  New
                </p>
              </Link>
              <Link href="">
                <p className="hover:border-b hover:text-customRed w-fit  my-4 lg:my-0  cursor-pointer">
                  Used
                </p>
              </Link>
              <Link href="">
                <p className="hover:border-b hover:text-customRed  w-fit  my-4 lg:my-0 cursor-pointer">
                  Sell your Car
                </p>
              </Link>
            </div>

            <div className="page-links capitalize">
              <h4 className="text-[#cb9f5c]">Resources</h4>
              <Link href="/#faq">
                <p className="hover:border-b hover:text-customRed my-4 lg:my-0  w-fit cursor-pointer">
                  FAQs
                </p>
              </Link>
              <Link href="/blog">
                <p className="hover:border-b hover:text-customRed  my-4 lg:my-0  w-fit cursor-pointer">
                  Blog
                </p>
              </Link>
              <Link href="/contact">
                <p className="hover:border-b hover:text-customRed  my-4 lg:my-0  w-fit cursor-pointer">
                  Contact us
                </p>
              </Link>
            </div>

            <div className="page-links capitalize  cursor-pointer">
              <h4 className="text-[#cb9f5c]">Socials</h4>
              <Link href="">
                <p className="hover:border-b hover:text-customRed cursor-pointer  my-4 lg:my-0  w-fit">
                  Facebook
                </p>
              </Link>
              <Link href="https://www.instagram.com/_247autos?igsh=MTdoOHhjdzFlczQ1aQ==">
                <p className="hover:border-b hover:text-customRed cursor-pointer  my-4 lg:my-0  w-fit">
                  Instagram
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-note"></div> */}
      <div className="footer-note text-customYellow text-[10px] sm:text-sm md:text-lg  mt-4 flex lg:block justify-center lg:text-end  ">
        <p className="footer-terms mr-2 pr-8 lg:pr-0 capitalize hover:border-b hover:text-customRed inline-block">
          Terms of Service
        </p>
        <p className="brand-and-year inline-block  lg:ml-2 pl-6 lg:pl-2 border-none lg:border-1border-l border-white ">
          24//7 Autos; 2023
        </p>
      </div>
      <div className="absolute right-0 bottom-0 ">
        <Image
          src={footerRightSvg}
          alt="footer right svg image"
          width={300}
          height={300}
          className="w-[100px] md:w-[200px] lg:w-[300px]"
        />
      </div>
      {/* <div className="hidden lg:absolute left-0 bottom-0">
        <Image
          src={footerLeftSvg}
          alt="footer right svg image"
          width={200}
          height={200}
          className="w-[100px] lg:w-[300px]"
        />
      </div> */}
    </div>
  );
};
export default Footer;
