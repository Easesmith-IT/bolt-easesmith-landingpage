import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const ColorTypography = () => {
  return (
    <div className="py-5 md:py-10 px-5 container mx-auto font-aclonica">
      {/* HEADER */}
      <div className="flex gap-1 items-center">
        <motion.div
          className="size-10 sm:size-18 md:size-24 border-2 md:border-4 border-black rounded-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-extrabold font-open_sans text-xl sm:text-3xl md:text-5xl">
            2
          </h2>
        </motion.div>

        <motion.h2
          className="font-bold text-xl sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Colors & Typography
        </motion.h2>
      </div>

      {/* COLORS */}
      <motion.h3
        className="font-bold text-lg sm:text-xl md:text-3xl mt-10 sm:mt-18 md:mt-25"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Colors
      </motion.h3>

      <div className="mt-5 bg-[#CDE6A6] w-full p-5 pt-7 pl-0 sm:pl-5 pr-0 sm:pr-5">
        <div className="bg-[#CDE6A6] p-4 pt-6 pb-2 grid grid-cols-1 sm:grid-cols-[60%_35%] md:grid-cols-2">
          {/* COLOR BLOCKS */}
          <motion.div
            className="grid grid-cols-4 gap-5 h-30 sm:h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {["#85C125", "#1F2A37", "#F9FAFB", "#9CA3AF"].map((color, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-bold text-xs sm:text-base lg:text-xl text-center">
                  {color}
                </p>
                <div
                  className="rounded-t-xl h-full"
                  style={{ backgroundColor: color }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* MOBILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
          >
            <Image
              src="/portfolio/easemart/3-mobile.svg"
              alt="3-mobile"
              width={400}
              height={600}
              className="ml-auto hidden sm:inline -mt-[40%]"
            />
          </motion.div>
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <motion.h3
        className="font-bold text-lg sm:text-xl md:text-3xl mt-10 sm:mt-18 md:mt-25"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Typography
      </motion.h3>

      <div className="grid grid-cols-2 mt-5">
        {/* LEFT COLUMN */}
        <motion.div
          className="border-r-2 pr-5 md:pr-20"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-5 justify-end items-center">
            <div className="text-right space-y-3">
              {["Bold", "Regular", "Medium", "ExtraBold"].map((t, i) => (
                <motion.p
                  key={i}
                  className="text-xs sm:text-base lg:text-xl font-normal font-inter underline"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {t}
                </motion.p>
              ))}
            </div>

            <div className="h-20 sm:h-30 md:h-42 flex items-center justify-center">
              <span className="[writing-mode:vertical-rl] text-gray-400 text-xl sm:text-3xl md:text-5xl rotate-180 tracking-widest">
                Titles
              </span>
            </div>
          </div>

          <h3 className="font-bold text-lg sm:text-2xl md:text-3xl mt-10 md:mt-25 text-right">
            AClonica
          </h3>

          <p className="text-xs sm:text-base lg:text-xl font-aclonica mt-5 sm:mt-10 text-right">
            abcdefghijklmnopqrstuvwxyz <br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
            0123456789+!@#$()%&*
          </p>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="border-l-2 pl-5 md:pl-20"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-5 justify-start items-center">
            <div className="space-y-3 text-right">
              {["Bold", "Regular", "Medium", "ExtraBold"].map((t, i) => (
                <motion.p
                  key={i}
                  className="text-xs sm:text-base lg:text-xl font-normal font-inter underline"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {t}
                </motion.p>
              ))}
            </div>

            <div className="h-20 sm:h-30 md:h-42 flex items-center justify-center">
              <span className="[writing-mode:vertical-rl] text-gray-400 text-xl sm:text-3xl md:text-5xl rotate-180 tracking-widest">
                Contents
              </span>
            </div>
          </div>

          <h3 className="font-bold text-lg sm:text-2xl md:text-3xl mt-10 md:mt-25 text-left font-epilogue">
            Epilogue
          </h3>

          <p className="text-xs sm:text-base lg:text-xl font-epilogue mt-5 sm:mt-10">
            abcdefghijklmnopqrstuvwxyz <br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
            0123456789+!@#$()%&*
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ColorTypography;
