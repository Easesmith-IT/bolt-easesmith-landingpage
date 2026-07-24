import { H2 } from "@/components/shared/typography";
import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const Designs = () => {
  return (
    <div className="container mx-auto my-10 px-5 space-y-4 relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <H2 className="font-extrabold text-xl md:text-[40px] mt-6">
          5. High Fidelity Designs
        </H2>
      </motion.div>

      {/* Main Design Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="max-w-5xl mx-auto w-full h-auto mt-10"
      >
        <Image
          src="/portfolio/chaperone/designs.webp"
          alt="designs"
          width={600}
          height={450}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Designs;
