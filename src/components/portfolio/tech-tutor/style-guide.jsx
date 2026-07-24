import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const StyleGuide = () => {
  return (
    <div className="mx-auto container px-5 py-5 md:py-10 font-josefin_sans">
      {/* TITLE */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl text-center"
        >
          Style Guide
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#d1d5db] select-none pointer-events-none"
        >
          Style Guide
        </motion.h2>
      </div>

      {/* PRIMARY & SECONDARY */}
      <div className="flex justify-between gap-5 mt-10">
        {/* PRIMARY */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-center">
            Primary
          </h3>
          <p className="text-lg sm:text-2xl md:text-4xl text-center font-bold sm:mt-5 sm:-mb-5 text-[#1561d7]">
            #1561d7
          </p>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src="/portfolio/tech-tutor/maths-learning.webp"
              alt="logo"
              width={800}
              height={400}
              className="mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* SECONDARY */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-center">
            Secondary
          </h3>
          <p className="text-lg sm:text-2xl md:text-4xl text-center font-bold sm:mt-5 sm:-mb-5 text-[#6dcffb]">
            #6dcffb
          </p>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src="/portfolio/tech-tutor/maths-learning-1.webp"
              alt="logo"
              width={800}
              height={400}
              className="mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* OTHER COLORS */}
      <div className="mt-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-2xl md:text-4xl font-bold text-center"
        >
          Other Colors
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-10 justify-center mt-3"
        >
          {[
            { color: "#1358C4", label: "Info" },
            { color: "#E02424", label: "Error" },
            { color: "#057A55", label: "Success" },
            { color: "#FACA15", label: "Warning" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              className="space-y-2 text-center"
            >
              <div
                className="size-10 sm:size-25"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs sm:text-lg font-bold">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StyleGuide;
