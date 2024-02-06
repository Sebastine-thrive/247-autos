/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatWeDo = () => {
  return (
    <div className="mt-2">
      <h2 className="font-bold text-2xl">What we do</h2>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mt-1 font-normal"
      >
        Whether you're in the market for a brand new or a quality, fairly-used
        vehicle, we have a good inventory to meet your needs. Our team ensures
        that every vehicle meets good standards of quality and reliability.
        <br /> <br />
        We assist customers in purchasing or selling their vehicles, providing
        guidance and support throughout the process. Our expertise ensures that
        you get the best deal whether you're buying or selling a vehicle and We
        understand the importance of value for money. That's why we offer
        competitive prices for all our services, ensuring that you receive
        exceptional quality at affordable rates.
        <br /> <br />
        Car Delivery Services: We understand that convenience is key, which is
        why we offer car delivery services. Whether you're purchasing a vehicle
        from us or need your vehicle delivered for servicing, we make the
        process seamless and hassle-free.
        <br /> <br />
        Keeping your vehicle in top condition is essential for its longevity and
        performance. Our skilled technicians provide thorough servicing and
        maintenance, including routine check-ups, oil changes, and more, to
        ensure your vehicle runs smoothly.
        <br /> <br />
        Personalize your vehicle and enhance its aesthetics with our interiors
        and pimping services. From custom upholstery to interior detailing, we
        can transform your vehicle to suit your style and preferences.
        <br /> <br />
        In the event of a breakdown or mechanical issue, our team is equipped to
        handle a wide range of repairs. We use quality parts and expert
        craftsmanship to restore your vehicle to its optimal condition.
      </motion.p>{" "}
      <br />
      <p className="font-normal">
        There is no "one-size-fits-all" solution when it comes to buying a car.
        Depending on the your budget and car-buying experience, 247 Autos got
        you, always!
      </p>
      {/* send a whataspp message */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="rounded-lg flex justify-center max-w-[10rem] text-underline mx-auto my-4 h-auto p-2 bg-[#e86c57] text-white hover:bg-customYellow"
      >
          <Link href="/contact">
            <button className="font-normal">Request Services </button>
          </Link>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
