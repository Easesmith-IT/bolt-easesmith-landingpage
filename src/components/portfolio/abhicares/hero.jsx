import React from "react";
import Navbar from "./navbar";
import Image from "../PortfolioImage";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="overflow-hidden w-full">
      <Navbar />

      {/* TOP BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="justify-end container mx-auto hidden sm:flex"
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
          <a target="_blank" href="https://abhicares.com">
            Live Link →
          </a>
        </Button>
      </motion.div>

      {/* MAIN IMAGES */}
      <div className="flex gap-5 container mx-auto justify-center">
        {/* PHONE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/portfolio/abhicares/Pixel 7 Pro Mockup.webp"
            alt="image"
            width={240}
            height={240}
            priority
            sizes="(max-width: 640px) 80px, 240px"
            className="object-contain w-20 sm:w-60"
          />
        </motion.div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/portfolio/abhicares/Frame 1618873367.png"
            alt="image"
            width={800}
            height={500}
            priority
            sizes="(max-width: 640px) 200px, 800px"
            className="object-contain w-50 sm:w-[800px]"
          />
        </motion.div>
      </div>

      {/* BACKGROUND IMAGES (PARALLAX) */}
      <motion.div
        style={{ y: yBg1 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 top-20 -z-[1]"
      >
        <Image
          src="/portfolio/abhicares/hero-back1.png"
          alt="bg1"
          width={700}
          height={300}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        style={{ y: yBg2 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-0 top-[40%] -z-[1]"
      >
        <Image
          src="/portfolio/abhicares/hero-back2.png"
          alt="bg2"
          width={300}
          height={600}
          className="object-contain w-30 h-40 sm:h-[600px] sm:w-[300px]"
        />
      </motion.div>

      {/* HEADING */}
      <div className="w-full flex justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl mt-10 xl:mt-0 lg:text-[60px] xl:text-[120px] font-semibold text-[#D9D9D9]"
        >
          Case Study
        </motion.h2>
      </div>

      {/* MOBILE BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex sm:hidden justify-center container mx-auto mt-10 px-5"
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
