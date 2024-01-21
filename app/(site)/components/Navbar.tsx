import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo__large from "./../../../public/assets/logo/logo__large.jpg";
import logo__small from "./../../../public/assets/logo/logo__small.jpg";

import "./../globals.css";

const Navbar: React.FC = () => {
  return (
    <nav className="max-w-[1920px] w-[100vw] h-auto min-h-[40px] mt-0">
      <div className="logo-container">
        <div className="hidden lg:block">
          <Link href="/">
            <Image
              src={logo__large}
              width={80}
              height={40}
              alt="logo image for large screen"
              className="logo large__logo"
            />
          </Link>
        </div>

        <div className="block lg:hidden">
          <Link href="/">
            <Image
              src={logo__small}
              width={100}
              height={50}
              alt="logo image for small screen"
              className="logo small__logo"
            />
          </Link>{" "}
        </div>
      </div>
      <div className="searchbar-container">searchbar</div>

      <div className="navlink-container  hidden lg:flex lg:w-auto">
        <ul className="navlinks flex space-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/contact">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
