import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const ColorTypography = () => {
  return (
    <div className="font-outfit">
      <div className="py-5 md:py-10 relative px-5">
        <div className="container mx-auto mt-10">
          <div className="relative w-[35%] sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
            {/* BIG NUMBER */}
            <motion.p
              className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              02
            </motion.p>

            {/* TITLE */}
            <motion.div
              className="relative text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
                <span className="underline whitespace-nowrap md:decoration-4 md:underline-offset-4">
                  Color &
                </span>
                <br />
                <span className="underline md:decoration-4 md:underline-offset-4">
                  Typography
                </span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* COLORS TITLE */}
        <motion.h3
          className="text-lg sm:text-2xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Colors
        </motion.h3>

        {/* COLORS IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/portfolio/sportx/colors-img.png"
            alt="colors-img"
            width={900}
            height={320}
            className="mx-auto mt-10"
          />
        </motion.div>

        {/* TYPOGRAPHY TITLE */}
        <motion.h3
          className="text-lg sm:text-2xl md:text-4xl font-bold text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Typography
        </motion.h3>

        {/* TYPOGRAPHY SECTION */}
        <div className="flex flex-col md:flex-row justify-center sm:mt-10 md:mt-20 items-center md:items-start">
          {/* LEFT VISUAL */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative sm:w-100">
              <h2
                className="absolute -z-1 inset-0 flex items-center justify-center 
                text-5xl sm:text-6xl font-bold text-black"
              >
                Outfit
              </h2>

              {/* SVG Aa animation */}
              <svg viewBox="0 0 250 200" className="w-full">
                <motion.text
                  x="50%"
                  y="70%"
                  textAnchor="middle"
                  className="text-[140px] sm:text-[160px] font-extrabold fill-transparent stroke-[#FFD700]"
                  strokeWidth="4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  Aa
                </motion.text>
              </svg>
            </div>
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                title: "Outfit Bold",
                className: "font-bold",
              },
              {
                title: "Outfit Medium",
                className: "font-medium",
              },
              {
                title: "Outfit Regular",
                className: "",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h4
                  className={`text-xs sm:text-base md:text-lg ${item.className}`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-xs sm:text-base md:text-lg ${item.className}`}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  !@#$%^&*()_+
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FLOATING TYPO IMAGE */}
        <motion.div
          className="hidden md:inline absolute right-15 bottom-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="/portfolio/sportx/typography.png"
            alt="typography"
            width={210}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ColorTypography;
