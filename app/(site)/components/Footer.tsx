import React from "react";
import small_logo from "../../../public/assets/logo/logo__small.jpg";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="footer-container max-w-[1920px] w-[100vw] bg-[#040404] text-white py-8">
      <div className="footer-links">
        <div className="logo-socials-container">
          <div className=" flex">
            <div className="footer-logo w-[80px] h-[80px] mr-4">
              <Image
                src={small_logo}
                width={80}
                height={80}
                alt="logo image for small screen"
                className="logo small__logo"
              />
            </div>
            <h3> 247 Autos</h3>
          </div>

          <div className="footer-socials">socials</div>
        </div>

        <div className="footer-page-links ml-16">
          <div className="footer-page-links-wrapper">
            <div className="page-links">
              <h4>
                <Link href="">Why 247</Link>
              </h4>
              <p>
                <Link href="">Efficient servicing</Link>
              </p>
            </div>

            <div className="page-links">
              <h4>
                <Link href="">Products</Link>
              </h4>
              <p>
                <Link href="">Used</Link>
              </p>
              <p>
                <Link href="">New</Link>
              </p>
              <p>
                <Link href="">Sell Your Car</Link>
              </p>
            </div>

            <div className="page-links">
              <h4>Resources</h4>

              <p>
                <Link href="">FAQ</Link>
              </p>
              <p>
                <Link href="">Blog</Link>
              </p>
              <p>
                <Link href="">Contact Us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-note"></div>
    </div>
  );
};
export default Footer;
