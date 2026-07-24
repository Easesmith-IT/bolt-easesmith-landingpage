import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const ServiceScreens = () => {
  return (
    <div className="container mx-auto py-5 md:py-10 px-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl md:text-4xl xl:text-5xl font-semibold">
          My Service Screens
        </h3>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="origin-left"
        >
          <Image
            src="/portfolio/crc-dashboard/heding-underline.webp"
            alt="image"
            width={170}
            height={60}
            className="object-contain w-20 sm:w-48"
          />
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -4 }}
      >
        <Image
          src="/portfolio/crc-dashboard/service-img.webp"
          alt="service-screens"
          width={400}
          height={400}
          className="object-contain w-full mt-5 md:mt-10"
        />
      </motion.div>
    </div>
  );
};

export default ServiceScreens;
