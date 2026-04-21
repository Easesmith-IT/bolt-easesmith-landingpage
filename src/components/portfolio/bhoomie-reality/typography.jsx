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

const Typography = () => {
  return (
    <div className="py-5 md:py-10 px-5 font-inter space-y-8">
      {/* COLOR PALETTE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-2 border-[#f39599] rounded-2xl rounded-br-0 p-5 container mx-auto"
      >
        <h3 className="text-xl md:text-2xl font-bold text-center">
          Color Palette
        </h3>

        {/* IMAGE 1 (LEFT ENTRY) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/portfolio/bhoomie-reality/test-img.png"
            alt="color palette"
            width={500}
            height={300}
            className="mx-auto mt-5"
          />
        </motion.div>

        {/* IMAGE 2 (RIGHT ENTRY) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/portfolio/bhoomie-reality/test1-img.png"
            alt="color palette"
            width={500}
            height={300}
            className="mx-auto"
          />
        </motion.div>
      </motion.div>

      {/* TYPOGRAPHY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-2 border-[#f39599] rounded-2xl rounded-bl-0 p-5 container mx-auto"
      >
        <h3 className="text-xl md:text-2xl font-bold text-center">
          Typography
        </h3>

        {/* BIG AA (SPOTLIGHT) */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-3xl sm:text-5xl text-center md:text-9xl my-10"
        >
          Aa
        </motion.h3>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-2 sm:gap-10"
        >
          {[0, 1, 2].map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-[#E6F2F2] p-3 flex max-[440px]:flex-col gap-2 sm:gap-5 items-center"
            >
              <div
                className={`bg-[#F9FAFB] max-[440px]:text-[10px] text-sm sm:text-xl md:text-4xl rounded-md sm:rounded-lg p-1 sm:p-2 lg:text-6xl ${i === 1 ? "font-medium" : i === 2 ? "font-bold" : ""}`}
              >
                Aa
              </div>
              <p
                className={`max-[440px]:text-[10px] max-[440px]:text-center text-sm sm:text-lg md:text-2xl ${i === 1 ? "font-medium" : i === 2 ? "font-bold" : ""}`}
              >
                Inter <br /> {i === 2 ? "Medium" : "Regular"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Typography;
