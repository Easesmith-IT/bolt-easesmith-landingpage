import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const InformationArchitecture = () => {
  return (
    <div className="font-outfit py-5 md:py-10 px-5 container mx-auto overflow-hidden">
      {/* HEADER */}
      <div className="relative w-[35%] sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
        {/* NUMBER */}
        <motion.p
          className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          04
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
            <span className="underline md:decoration-4 md:underline-offset-4">
              Information
            </span>
            <br />
            <span className="underline md:decoration-4 md:underline-offset-4">
              Architecture
            </span>
          </h2>
        </motion.div>
      </div>

      {/* DIAGRAM */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        animate={{ y: [0, -10, 0] }} // subtle floating
      >
        <Image
          src="/portfolio/sportx/information-architecture.svg"
          alt="user"
          width={310}
          height={400}
          className="w-full -mt-10 md:ml-10"
        />
      </motion.div>
    </div>
  );
};

export default InformationArchitecture;
