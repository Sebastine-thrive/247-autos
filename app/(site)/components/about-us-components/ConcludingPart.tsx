"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import carMan from "./../../../../public/assets/images/car_man.svg";

const ConcludingPart = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className=" lg:w-[70%] xl:w-[60%] flex flex-col  md:flex-row items-center justify-center mt-4 mx-auto"
    >
      <div className="rounded-lg h-auto p-2 mx-auto bg-[#e86c57] text-white hover:bg-customYellow">
        <Link href="/blog">
          <button className="font-normal">Stay informed</button>
        </Link>
      </div>
      <div className="mt-1 md:ml-2">
        <Image
          src={carMan}
          alt="man with car image"
          width={280}
          height={200}
          className="carman-image  w-[280px] h-[200px] sm:w-auto  rounded-sm"
        />
      </div>
    </motion.div>
  );
};

export default ConcludingPart;
