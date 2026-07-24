import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const HomeScreen = () => {
  return (
    <div className="relative">
      <div className="mx-auto container px-5 py-5 md:py-10">
        {/* TITLE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#212121] select-none pointer-events-none"
          >
            Home
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl text-center -mt-1"
          >
            Home Screen
          </motion.h3>
        </div>

        {/* MAIN IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/portfolio/tech-tutor/home-screen-img.webp"
            alt="logo"
            width={200}
            height={400}
            className="mx-auto mt-10 md:mt-15"
          />
        </motion.div>
      </div>

      {/* BACKGROUND BLOB */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute hidden md:inline -top-120 left-0 right-0 w-full -z-1"
      >
        <Image
          src="/portfolio/tech-tutor/blob-1.webp"
          alt="blob"
          width={900}
          height={100}
          className="w-full"
        />
      </motion.div>
    </div>
  );
};

export default HomeScreen;
