import { H2 } from "@/components/shared/typography";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Color = () => {
  return (
    <div className="container mx-auto my-10 px-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <H2 className="font-extrabold text-xl md:text-[40px] mt-6">2. Color</H2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-4 bg-[#D9D9D91A] p-5 mt-10 gap-x-5 gap-y-10"
      >
        {/* ITEM 1 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (4).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#F0FFE5] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#F0FFE5] font-bold">
            from the Noun Project
          </p>
        </motion.div>

        {/* ITEM 2 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (5).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#165315] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#165315] font-bold">
            from the Noun Project
          </p>
        </motion.div>

        {/* ITEM 3 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (6).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#FDD003] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#FDD003] font-bold">
            from the Noun Project
          </p>
        </motion.div>

        {/* ITEM 4 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (7).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#A6A6A6] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#A6A6A6] font-bold">
            from the Noun Project
          </p>
        </motion.div>

        {/* ITEM 5 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (8).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#BADAA3] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#BADAA3] font-bold">
            from the Noun Project
          </p>
        </motion.div>

        {/* ITEM 6 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (9).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#247822] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#247822] font-bold">
            from the Noun Project
          </p>
        </motion.div>

        {/* ITEM 7 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (10).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#F3A939] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#F3A939] font-bold">
            from the Noun Project
          </p>
        </motion.div>

        {/* ITEM 8 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolio/chaperone/Group (11).png"
              alt=""
              width={200}
              height={220}
            />
          </motion.div>
          <p className="mt-5 text-xs text-[#6E6E6E] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#6E6E6E] font-bold">
            from the Noun Project
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Color;
