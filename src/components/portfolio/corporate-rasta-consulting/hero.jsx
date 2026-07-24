import React from "react";
import Navbar from "./navbar";
import Image from "../PortfolioImage";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="max-sm:h-[30vh] h-[70vh] sm:min-h-[80vh] lg:min-h-[60vh]">
        <div className="flex justify-center gap-5 container mx-auto md:mt-10 relative">
          {/* LOGO + TITLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#CDD3E44D] p-2.5 rounded-2xl flex gap-2 items-center"
          >
            <Image
              src="/portfolio/crc/crc-logo.webp"
              alt="Crc Logo"
              width={50}
              height={50}
              className="object-contain size-5 md:size-10 lg:size-12"
            />
            <h2 className="text-base md:text-2xl lg:text-4xl font-semibold bg-[linear-gradient(170.76deg,#5FB5EB_12.17%,#949494_44.9%,#86C256_68.6%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Corporate Raasta Consulting
            </h2>
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -right-10 lg:right-0 top-0 justify-end container mx-auto hidden md:flex"
          >
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5"
            >
              <a target="_blank" href="https://corporateraastaconsulting.com">
                Live Link →
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          {/* MAIN HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="absolute top-0 left-[50%] -translate-x-[50%] right-0"
          >
            <Image
              src="/portfolio/crc/hero-1.png"
              alt="Hero"
              width={800}
              height={400}
              priority
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 500px, 800px"
              className="object-contain md:w-[500px] lg:w-[800px] -mt-10 sm:-mt-20"
            />
          </motion.div>

          {/* BACKGROUND IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src="/portfolio/crc/home-back.webp"
              alt="Hero Background"
              width={500}
              height={500}
              className="object-contain w-full mt-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
