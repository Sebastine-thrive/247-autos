import React from "react";
import small_logo from "../../../public/assets/logo/logo__small.jpg";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineTwitter,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="footer-container max-w-[1920px] w-[100vw] bg-[#040404] text-white py-8">
      <div className="footer-links">
        <div className="logo-socials-container">
          <div className="flex items-center">
            <div className="footer-logo w-[80px] h-[40px] mr-4 flex ">
              <Image
                src={small_logo}
                width={80}
                height={40}
                alt="logo image for small screens"
                className="logo small__logo"
              />
            </div>

            <h3> 247 Autos</h3>
          </div>

          <div className="footer-socials flex text-[30px]">
            {/* socials */}
            <Link href="">
              {" "}
              <div >
                <AiFillTwitterSquare />
              </div>
            </Link>
            <Link href="">
              {" "}
              <div>
                <AiFillInstagram />
              </div>
            </Link>
          </div>
        </div>

        <div className="footer-page-links w-full mx-[3rem] px-4 flex justify-center ">
          <div className="footer-page-links-wrapper flex flex-wrap gap-8 w-full lg:ml-0 lg:w-[50%] justify-between ">
            <div className="page-links mr-[80px]">
              <Link href="">
                {" "}
                <h4 className="text-[#cb9f5c]">Why 247 </h4>
              </Link>
            </div>

            <div className="page-links">
              <Link href="">
                <h4 className="text-[#cb9f5c] my-[5px]">Products</h4>
              </Link>
              <Link href="">
                <p>New</p>
              </Link>
              <Link href="">
                <p>Used</p>
              </Link>
              <Link href="">
                <p>Sell your Car</p>
              </Link>
            </div>

            <div className="page-links">
              <h4 className="text-[#cb9f5c]">Resources</h4>
              <Link href="">
                <p>FAQs</p>
              </Link>
              <Link href="">
                <p>Blog</p>
              </Link>
              <Link href="">
                <p>Contact us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-note"></div>
    </div>
  );
};
export default Footer;
