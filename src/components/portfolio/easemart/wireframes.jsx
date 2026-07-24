import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Wireframes = () => {
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
            4
          </h2>
        </motion.div>

        <motion.h1
          className="font-bold text-xl sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi-Fi Wireframes
        </motion.h1>
      </div>

      {/* WIREFRAMES */}
      <motion.div
        className="mt-5 sm:mt-10 relative"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        animate={{ y: [0, -12, 0] }} // subtle floating
      >
        <Image
          src="/portfolio/easemart/wireframes.webp"
          alt="wireframes"
          width={400}
          height={600}
          className="w-full"
          unoptimized
        />

        {/* SCAN LIGHT EFFECT */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </div>
  );
};

export default Wireframes;
