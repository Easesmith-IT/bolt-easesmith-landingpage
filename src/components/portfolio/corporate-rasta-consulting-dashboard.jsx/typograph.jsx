import Image from "../PortfolioImage";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Typograph = () => {
  return (
    <div className="relative font-inter">
      {/* TYPOGRAPHY */}
      <div className="relative z-[2] py-10 container mx-auto px-5">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-2 sm:mt-10"
        >
          <h3 className="text-xl text-white md:text-4xl xl:text-5xl font-semibold">
            Typography
          </h3>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="origin-left"
          >
            <Image
              src="/portfolio/crc-dashboard/heding-underline.png"
              alt="image"
              width={170}
              height={60}
              className="object-contain w-20 sm:w-48"
            />
          </motion.div>
        </motion.div>

        {/* Typography Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center bg-[#D9D9D94D] text-white max-w-2xl rounded-4xl py-10 mx-auto gap-10 mt-2 sm:mt-9 font-inter"
        >
          {/* Font Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-base md:text-xl xl:text-3xl">Font- Inter</h3>
            <p className="text-5xl xl:text-7xl mt-5">Aa</p>
          </motion.div>

          {/* Font Styles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 px-5"
          >
            {["Regular", "Medium", "Bold"].map((type, i) => (
              <motion.div key={i} variants={itemVariants}>
                <p
                  className={`${type === "Medium" ? "font-medium" : type === "Bold" ? "font-bold" : ""} text-[10px] sm:text-sm md:text-base`}
                >
                  {type}
                </p>
                <p
                  className={`${type === "Medium" ? "font-medium" : type === "Bold" ? "font-bold" : ""} text-[10px] sm:text-sm md:text-base`}
                >
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* COLORS */}
      <div className="relative z-[2] py-10 container mx-auto px-5">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl text-white md:text-4xl xl:text-5xl font-semibold">
            Colors
          </h3>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="origin-left"
          >
            <Image
              src="/portfolio/crc-dashboard/heding-underline.png"
              alt="image"
              width={170}
              height={60}
              className="object-contain w-20 sm:w-48"
            />
          </motion.div>
        </motion.div>

        {/* Colors Image (RIGHT ENTRY) */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/portfolio/crc-dashboard/color-codes.png"
            alt="image"
            width={800}
            height={150}
            className="object-contain mt-5 w-80 sm:mt-0 sm:w-xl mx-auto"
          />
        </motion.div>
      </div>

      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/portfolio/crc-dashboard/typography-bg.png"
          alt="image"
          width={1000}
          height={600}
          className="w-full max-sm:h-[1000px] h-[1300px] sm:h-[1500px] absolute top-0"
        />
      </motion.div>
    </div>
  );
};

export default Typograph;
