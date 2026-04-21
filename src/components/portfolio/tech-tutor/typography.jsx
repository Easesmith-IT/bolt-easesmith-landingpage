import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Typography = () => {
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
          Typography
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#d1d5db] select-none pointer-events-none"
        >
          Typography
        </motion.h2>
      </div>

      {/* FONT PREVIEW */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl md:text-3xl">Josefin Sans</h3>
        <div className="space-y-1 text-xs sm:text-base text-[#374151]">
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>1234567890!@#$%^&*()</p>
        </div>
      </motion.div>

      {/* TYPOGRAPHY CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="border border-[#592EDB] flex p-4 max-w-170 mt-10 mx-auto justify-around"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-around w-full"
        >
          {/* REGULAR */}
          <motion.div variants={itemVariants} className="text-[#414141]">
            <p className="sm:text-xl md:text-2xl">Heading</p>
            <p className="sm:text-xl md:text-2xl">Regular</p>
            <p className="sm:text-xl md:text-2xl">Josefin</p>
          </motion.div>

          {/* MEDIUM */}
          <motion.div variants={itemVariants} className="text-[#414141]">
            <p className="font-medium sm:text-xl md:text-2xl">Heading</p>
            <p className="font-medium sm:text-xl md:text-2xl">Medium</p>
          </motion.div>

          {/* BOLD */}
          <motion.div variants={itemVariants} className="text-[#414141]">
            <p className="font-bold sm:text-xl md:text-2xl">Heading</p>
            <p className="font-bold sm:text-xl md:text-2xl">Bold</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Typography;
