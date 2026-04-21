import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="relative">
        {/* MAIN HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative z-[2]"
        >
          <Image
            src="/portfolio/bhoomie-reality/hero.png"
            alt="hero"
            width={700}
            height={300}
            className="mx-auto w-90 sm:w-130 lg:w-165 mt-30"
          />
        </motion.div>

        {/* RIGHT BACKGROUND */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute w-59 sm:w-89.5 lg:w-125 -top-40 right-0 -z-[1]"
        >
          <Image
            src="/portfolio/bhoomie-reality/hero-right.png"
            alt="hero-right"
            width={500}
            height={200}
            className="w-full"
          />
        </motion.div>

        {/* LEFT BACKGROUND */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute w-59 sm:w-89.5 lg:w-125 -top-40 left-0 -z-[1]"
        >
          <Image
            src="/portfolio/bhoomie-reality/hero-left.png"
            alt="hero-left"
            width={500}
            height={200}
            className="w-full"
          />
        </motion.div>

        {/* CENTER TEXT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute w-49 sm:w-89.5 lg:w-125 -top-5 left-[50%] -translate-[50%] -z-[1]"
        >
          <Image
            src="/portfolio/bhoomie-reality/dreamland.svg"
            alt="dreamland"
            width={500}
            height={200}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center mt-8 sm:mt-0 mb-5"
      >
        <Button className="bg-blue-600 md:hidden inline hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
