import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const Wireframe = () => {
  return (
    <div className="font-josefin_sans">
      {/* TITLE */}
      <div className="mx-auto container px-5 py-5 md:py-10">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl text-center"
        >
          Wireframes
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#000] select-none pointer-events-none"
        >
          Wireframes
        </motion.h2>
      </div>

      {/* BLUE SHOWCASE SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#1C64F2] shadow-[0px_4px_100px_5px_#1C64F2] py-10 md:py-20 -mt-12 md:-mt-32"
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/portfolio/tech-tutor/wireframe-img.webp"
            alt="logo"
            width={800}
            height={400}
            className="w-[90%] mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Wireframe;
