import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const DesignScreens = () => {
  return (
    <div className="container mx-auto py-5 md:py-10 px-5">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-4xl xl:text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
      >
        Design Screens
      </motion.h3>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="/portfolio/crc/design-screens-img.png"
          alt="design-screens"
          width={500}
          height={500}
          className="object-contain w-full mt-5 md:mt-10"
        />
      </motion.div>
    </div>
  );
};

export default DesignScreens;
