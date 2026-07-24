import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const Screens = () => {
  return (
    <div className="py-5 md:py-10 px-5 font-inter">
      {/* MOBILE SCREENS */}
      <div className="container mx-auto relative">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-bold text-center"
        >
          Mobile Screens
        </motion.h3>

        {/* FOREGROUND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/portfolio/bhoomie-reality/mobile-screen-img.png"
            alt="Mobile Screens"
            width={800}
            height={300}
            className="mx-auto w-full mt-5 md:mt-10"
          />
        </motion.div>

        {/* BACKGROUND */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/portfolio/bhoomie-reality/mobile-screen-bg.webp"
            alt="Mobile Screens"
            width={800}
            height={300}
            className="w-[90%] mx-auto absolute top-0"
          />
        </motion.div>
      </div>

      {/* WIREFRAMES */}
      <div className="container mx-auto relative mt-10 py-5 md:py-10">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-bold text-center"
        >
          Hi-fi Desktop Wireframes
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/portfolio/bhoomie-reality/wireframe.png"
            alt="Hi-fi Desktop Wireframes"
            width={800}
            height={300}
            className="w-full mt-5 md:mt-10"
          />
        </motion.div>
      </div>

      {/* DESKTOP DESIGN */}
      <div className="relative">
        <div className="container mx-auto relative mt-10 py-5 md:py-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-center"
          >
            Desktop Design Screens
          </motion.h3>

          {/* FOREGROUND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/portfolio/bhoomie-reality/tablets.png"
              alt="Desktop Design Screens"
              width={800}
              height={300}
              className="mx-auto w-[90%] mt-5 md:mt-10"
            />
          </motion.div>
        </div>

        {/* BACKGROUND */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/portfolio/bhoomie-reality/tablets-bg.webp"
            alt="Desktop Design Screens1"
            width={800}
            height={300}
            className="mx-auto w-full absolute top-0 left-0 -z-[2]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Screens;
