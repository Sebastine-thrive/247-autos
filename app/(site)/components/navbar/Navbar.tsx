"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo__large from "./../../../../public/assets/logo/logo__large.jpg";
import logo__small from "./../../../../public/assets/logo/logo__small.jpg";
import { NavbarLinks } from "./NavbarLinks";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import "./../../globals.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Searchbar from "../searchComponents/Searchbar";
import SearchFetch from "../searchComponents/FetchSearchResults";
import { useStateContext } from "@/app/context/Contexts";

const Navbar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useStateContext() ?? {};

  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  let currentPath = usePathname();
  if (currentPath.startsWith("/cars")) currentPath = "/cars";
  if (currentPath.startsWith("/blog")) currentPath = "/blog";

  return (
    <nav className="max-w-[1920px] w-[100vw] h-auto min-h-[40px] lg:flex bg-black text-white items-center justify-between mt-0">
      {/* 1.logo */}
      <div className="logo-container w-[30%]">
        <div className="hidden lg:inline-block hover:border-customYellow border-[1px] rounded-sm ">
          <Link href="/">
            <Image
              src={logo__large}
              width={80}
              height={40}
              alt="logo image for large screen"
              className="logo large__logo h-[40px]"
            />
          </Link>
        </div>
      </div>

      {/* 2.Searchbar
      <div className="searchbar-container w-[33%] hidden lg:block">
        <SearchFetch searchTerm={searchTerm} />
        <Searchbar />
      </div> */}

      {/* 3.Nav links*/}

      <div className="navlink-container hidden lg:flex w-[40%] ">
        <ul className="flex justify-between items-center w-full ">
          {NavbarLinks.map((navlink, index) => (
            <motion.div whileHover={{ scale: 1.1 }} key={index}>
              <Link
                href={navlink.address}
                className={`${
                  navlink.address === currentPath
                    ? "text-white font-extrabold mx-2 px-1"
                    : "text-customYellow font-bold"
                }  `}
              >
                <li className="py-1 text-xs lg:text-sm mx-2 xl:text-sm capitalize hover:border-b hover:text-white cursor-pointer">
                  {navlink.title}
                </li>
              </Link>
            </motion.div>
          ))}
        </ul>
      </div>

      {/* logo and outline display on small screens */}
      <div className="flex w-full h-auto justify-between lg:hidden items-center">
        <div className="block border-[1px] hover:border-customYellow rounded-sm">
          <Link href="/">
            <Image
              src={logo__small}
              width={80}
              height={40}
              alt="logo image for small screen"
              className="logo small__logo w-[80px] h-[40px]"
            />
          </Link>{" "}
        </div>

        <div onClick={handleNav}>
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
              ? "fixed left-0 top-0 w-[90%] h-screen bg-[#2d2720] p-10 ease-in duration-1000 z-10 "
              : "fixed left-[-150%] top-0 p-10 ease-in duration-1000"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between z-[2]">
              {/* Side drawer logo */}

              <div className="max-h-[40px]">
                <Link href="/">
                  <Image
                    src={logo__small}
                    width={80}
                    height={40}
                    className="cursor-pointer border-[1px] h-[40px] hover:border-customYellow rounded-sm "
                    alt="logo"
                  />
                </Link>
              </div>

              {/* Side drawer close nav */}
              <div
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* Nav drawer links */}

            <div className="flex flex-col mt-4 py-4 uppercase">
              <ul className=" ">
                {NavbarLinks.map((navlink, index) => (
                  <Link
                    href={navlink.address}
                    onClick={() => setNav(false)}
                    passHref
                    key={index}
                    className="block"
                  >
                    <li
                      // onClick={() => setNav(false)}
                      className="py-4 inline-block capitalize text-sm hover:border-b text-customYellow hover:text-white font-semibold cursor-pointer w-fit "
                    >
                      {navlink.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          {/* Searchbar */}
          <div className="searchbar-container mt-4 w-[60vw] ">
            <Searchbar />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
