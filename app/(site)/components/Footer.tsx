import React from "react";
import logo__small from "../../../public/logo/logo__small.jpg";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="footer-container max-w-[1920px] w-[100vw] bg-[#040404] text-white">
      <div className="footer-links">
        <div className="logo-socials-container">
          <div className="logo">
            <Image
              src={logo__small}
              width={100}
              height={100}
              alt="logo image for small screen"
              className="logo small__logo"
            ></Image>
            <h3> 247 Autos</h3>
          </div>

          <div className="footer-socials">socials</div>
        </div>

        <div className="footer-page-links">
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
                <Link href="">Why 247</Link>
              </h4>
              <p>
                <Link href="">Efficient servicing</Link>
              </p>
            </div>

            <div className="page-links">
              <h4>
                <Link href="">Why 247</Link>
              </h4>
              <p>
                <Link href="">Efficient servicing</Link>
              </p>
            </div>
            
            

          </div>
        </div>
      </div>
      <div className="footer-note"></div>
    </div>
  );
};
