"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo__large from "./../../../../public/assets/logo/logo__large.jpg";
import logo__small from "./../../../../public/assets/logo/logo__small.jpg";
import { NavbarLinks } from "./NavbarLinks";

import "./../../globals.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Searchbar from "../Searchbar";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="max-w-[1920px] w-[100vw] h-auto min-h-[40px] mt-0">
      {/* 1.logo */}
      <div className="logo-container">
        <div className="hidden lg:block hover:border-customYellow border-[1px] rounded-md ">
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
              width={80}
              height={40}
              alt="logo image for small screen"
              className="logo small__logo"
            />
          </Link>{" "}
        </div>
      </div>

      {/* 2.Navbar */}
      <div className="searchbar-container w-auto hidden lg:flex">
        <Searchbar />
      </div>

      {/* 3.Nav links*/}

      <div className="navlink-container hidden lg:flex lg:w-auto">
        <ul>
          {NavbarLinks.map((navlink, index) => (
            <Link href={`/${navlink.address}`} key={index}>
              <li className="ml-4 p-1 text-sm font-bold text-customYellow capitalize hover:border-b hover:text-white cursor-pointer">
                {navlink.title}
              </li>
            </Link>
          ))}
        </ul>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu  and overlay*/}
      <div
        className={
          nav
            ? "nav__small fixed left-0 top-0 w-full h-screen bg-black/80 z-10 lg:hidden"
            : ""
        }
      >
        {/* side drawer menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[85%] h-screen bg-[#2d2720] p-10 ease-in duration-1000 z-10 "
              : "fixed left-[-150%] top-0 p-10 ease-in duration-1000"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between z-[2]">
              <Link href="/">
                <Image
                  src={logo__small}
                  width={100}
                  height={40}
                  className="cursor-pointer "
                  alt="logo"
                />
              </Link>

              <div
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="flex flex-col py-4 uppercase">
              <ul className="">
                {NavbarLinks.map((navlink, index) => (
                  <Link href={`/${navlink.address}`} passHref key={index}>
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 capitalize text-sm hover:border-b text-customYellow hover:text-white font-semibold cursor-pointer "
                    >
                      {navlink.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="searchbar-container mx-auto my-2 w-[80%]">
            <Searchbar />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
