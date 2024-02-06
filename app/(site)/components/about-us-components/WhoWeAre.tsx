"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="mt-2">
      <h2 className=" font-bold text-2xl">Who we are</h2>

      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mt-1 font-normal"
      >
        Welcome to 247 autos. We define ourselves around the qualities of
        transparency and efficiency in the world of vehicle sales and servicing.
        At 247 Autos, we pride ourselves on our unwavering commitment to
        providing top-notch service with a focus on quality, efficiency and
        transparency.
        <br /> <br />
        Whether you are looking to purchase a new vehicle or need maintenance
        for your current one, we ensure that you receive prompt and accurate
        assistance every step of the way. Transparency is at the core of our
        operations. We believe in open and honest communication with our
        customers, ensuring that you are always well-informed about the services
        we provide and the processes involved. With us, you can trust that there
        are no hidden agendas or surprises—just clear and transparent dealings.
        <br /> <br />
        In addition to our sales expertise, we offer holistic servicing for your
        vehicles. From routine maintenance to complex repairs, our skilled
        technicians are equipped to handle all your vehicle servicing needs. We
        take a comprehensive approach to vehicle care, addressing both immediate
        issues and potential concerns to keep your vehicle running smoothly.
        <br /> <br />
        At 247 autos, we do what it takes to meet your needs and exceed your
        expectations. Experience the difference with us, where efficiency,
        transparency, and excellence converge to provide you with the best
        vehicle sales and servicing experience possible.
      </motion.p>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-1"
      >
        <div className="rounded-lg h-auto p-2 bg-[#e86c57] text-white hover:bg-customYellow">
          <Link href="/contact">
            <button className="font-normal">Contact us</button>
          </Link>
        </div>

        <div className="rounded-lg h-auto p-2 ml-4  text-customYellow hover:text-customRed">
          <Link href="/cars">
            <p className="font-normal hover:underline">Shop Car</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
