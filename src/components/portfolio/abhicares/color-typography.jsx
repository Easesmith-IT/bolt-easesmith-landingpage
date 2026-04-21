import Image from "next/image";
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
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const ColorTypography = () => {
  return (
    <div>
      <div className="py-10 container mx-auto px-5 relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-4xl xl:text-5xl font-bold border-l-4 md:border-l-8 py-1 sm:py-2 px-3 border-[#4481D1] text-[#1B1515]"
        >
          Color & Typography
        </motion.h2>

        {/* Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-10 items-center justify-center mt-8 md:mt-15"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="font-serif text-center"
          >
            <h3 className="font-semibold text-4xl md:text-7xl">Aa</h3>
            <p className="text-sm md:text-4xl">Gilda - Accent text</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="font-poppins text-center"
          >
            <h3 className="font-semibold text-4xl md:text-7xl">Aa</h3>
            <p className="text-sm md:text-4xl">Poppins - Main text</p>
          </motion.div>
        </motion.div>

        {/* Color Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-5 md:gap-10 max-w-4xl mx-auto mt-10 md:mt-20"
        >
          {["#222323", "#212529", "#808080", "#FAFAFA"].map((color, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div
                className="size-16 md:h-[160px] md:w-full rounded-md md:rounded-xl"
                style={{
                  backgroundColor: color,
                  border: color === "#FAFAFA" ? "1px solid #ccc" : "",
                }}
              ></div>
              <p className="font-semibold text-xs md:text-xl text-center">
                {color}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Image */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-end mt-0 md:mt-10"
      >
        <Image
          src="/portfolio/abhicares/project-view-bottom.png"
          alt="image"
          width={440}
          height={320}
          className="object-contain w-48 md:w-[440px] md:h-[320px]"
        />
      </motion.div>
    </div>
  );
};

export default ColorTypography;
