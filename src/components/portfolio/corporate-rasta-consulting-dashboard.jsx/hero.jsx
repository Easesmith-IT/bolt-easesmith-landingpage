import { Button } from "@/components/ui/button";
import Image from "../PortfolioImage";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#1C64F2] sm:min-h-screen">
      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-end pt-5"
      >
        <Image
          src="/portfolio/crc-dashboard/easesmith-white.png"
          alt="image"
          width={300}
          height={60}
          className="object-contain w-30 sm:w-72"
        />
      </motion.div>

      <div className="flex gap-5 items-start relative">
        {/* LEFT - LAPTOP */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/portfolio/crc-dashboard/hero-laptop.png"
            alt="image"
            width={900}
            height={500}
            priority
            sizes="(max-width: 640px) 576px, 896px"
            className="w-xl sm:w-4xl"
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="lg:relative sm:h-screen absolute right-2 sm:right-10 top-1">
          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/portfolio/crc-dashboard/hero-img-2.png"
              alt="image"
              width={600}
              height={400}
              className="w-30 sm:w-80 lg:w-lg mt-10"
            />
          </motion.div>

          {/* DESKTOP CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="outline"
              className="bg-transparent hidden lg:inline absolute right-10 bottom-0 sm:bottom-10 text-white hover:text-black"
            >
              Live Link â†’
            </Button>
          </motion.div>

          {/* MOBILE CTA */}
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-end mt-5 lg:hidden mr-5"
          >
            <Button
              variant="outline"
              className="bg-transparent text-white hover:text-black"
            >
              Live Link â†’
            </Button>
          </motion.div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Hero;
