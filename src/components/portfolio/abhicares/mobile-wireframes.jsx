import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const MobileWireframes = () => {
  return (
    <div className="py-5 md:py-10 container mx-auto px-5 relative space-y-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-4xl xl:text-5xl font-bold border-l-4 md:border-l-8 py-1 sm:py-2 px-3 border-[#4481D1] text-[#1B1515]"
      >
        Mobile HI-Fi Wireframes
      </motion.h2>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="/portfolio/abhicares/mobile-wireframes-img.png"
          alt="image"
          width={440}
          height={320}
          className="object-contain max-w-[1000px] w-full mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default MobileWireframes;
