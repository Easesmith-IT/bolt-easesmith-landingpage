"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b-4 border-[#85C125] font-aclonica">
      {/* HEADER */}
      <header className="w-full flex flex-col gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/portfolio/chaperone/easesmith-logo.png"
            alt="Easesmith Logo"
            width={240}
            height={320}
            className="object-contain -mr-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="bg-blue-600 z-2 font-inter hover:bg-blue-700 text-white rounded-md px-5">
            <a target="_blank" href="#">
              Live Link →
            </a>
          </Button>
        </motion.div>
      </header>

      <div className="flex gap-5 justify-between items-center">
        {/* LEFT CONTENT */}
        <div className="ml-4 lg:ml-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/portfolio/easemart/easemart-logo.svg"
              alt="Hero"
              width={81}
              height={75}
              className="mx-auto w-8 sm:w-20"
              unoptimized
            />
          </motion.div>

          <motion.h1
            className="text-[#85C125] text-3xl md:text-7xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Easemart
          </motion.h1>

          <motion.p
            className="text-[#85C125] text-xs sm:text-xl md:text-3xl text-center whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ---- Quick Delivery Ecommerce----
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/portfolio/easemart/mobile.svg"
              alt="mobile"
              width={400}
              height={275}
              className="mx-auto"
              unoptimized
            />
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/portfolio/easemart/hero-right.webp"
              alt="hero-right"
              width={900}
              height={675}
              className="mx-auto hidden sm:inline sm:-mt-15"
              unoptimized
            />
          </motion.div>

          {/* FLOATING ICONS */}
          {[
            {
              src: "/portfolio/easemart/shopping_bag.svg",
              className: "absolute hidden lg:inline right-[20%] bottom-20",
            },
            {
              src: "/portfolio/easemart/shopping_cart.svg",
              className: "absolute hidden lg:inline left-[10%] bottom-20",
            },
            {
              src: "/portfolio/easemart/shopping_basket.svg",
              className: "absolute hidden lg:inline right-[20%] top-20",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={item.className}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0],
              }}
              // transition={{
              //   duration: 5 + i,
              //   repeat: Infinity,
              //   ease: "easeInOut",
              //   delay: i * 0.3,
              // }}
            >
              <Image
                src={item.src}
                alt="icon"
                width={100}
                height={100}
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/portfolio/easemart/mobiles-img.webp"
          alt="mobiles-img"
          width={900}
          height={275}
          className="mx-auto lg:-mt-10 relative z-2"
          unoptimized
        />
      </motion.div>
    </div>
  );
};

export default Hero;
