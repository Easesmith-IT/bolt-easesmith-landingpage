import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block font-josefin_sans"
        >
          <h1 className="text-2xl sm:text-4xl md:text-[42px] font-semibold tracking-tight leading-none">
            <span className="text-[#1358C4]">Case</span>{" "}
            <span className="text-black">Study</span>
          </h1>

          <h1 className="text-2xl sm:text-4xl md:text-[42px] text-[#C1BEBE] font-semibold tracking-tight leading-none absolute left-0 top-2 sm:top-3 -z-[1]">
            Case Study
          </h1>
        </motion.div>

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/portfolio/chaperone/easesmith-logo.png"
            alt="Easesmith Logo"
            width={240}
            height={320}
            className="object-contain -mr-10"
          />
        </motion.div>
      </header>

      <div className="flex gap-5 flex-col lg:flex-row lg:justify-between">
        {/* LEFT SIDE */}
        <div>
          <div className="sm:ml-10">
            {/* APP LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/portfolio/tech-tutor/tech-tutor-logo.png"
                alt="logo"
                width={200}
                height={200}
                className="mx-auto size-20 sm:size-50"
              />
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden sm:block text-2xl md:text-4xl text-center font-bold font-josefin_sans"
            >
              Tech <span className="text-[#1358C4]">Tutor</span>{" "}
              <span className="text-[#1358C4]">|</span> An Edtech App
            </motion.h2>

            <div className="sm:hidden block">
              <h2 className="text-2xl text-center font-bold font-josefin_sans">
                Tech <span className="text-[#1358C4]">Tutor</span>
              </h2>
              <p className="font-bold text-center text-sm -m-1">
                An Edtech App
              </p>
            </div>
          </div>

          {/* LEFT BG */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:inline absolute top-13 left-10"
          >
            <Image
              src="/portfolio/tech-tutor/hero-left.png"
              alt="bg image"
              width={600}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex justify-end mr-10 -mb-12 mt-10"
          >
            <Button
              asChild
              className="bg-blue-600 z-2 hover:bg-blue-700 text-white rounded-md px-5"
            >
              <a target="_blank" href="#">
                Live Link →
              </a>
            </Button>
          </motion.div>

          {/* RIGHT BG */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 right-0 -z-1"
          >
            <Image
              src="/portfolio/tech-tutor/hero-right.png"
              alt="bg image"
              width={800}
              height={400}
              className="object-contain"
            />
          </motion.div>

          {/* MOBILES (MAIN HERO) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Image
              src="/portfolio/tech-tutor/mobiles.png"
              alt="mobiles"
              width={600}
              height={400}
              className="-ml-[15%] sm:ml-0"
            />

            {/* ELLIPSE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-5 right-0 -z-[1]"
            >
              <Image
                src="/portfolio/tech-tutor/ellipse.png"
                alt="ellipse"
                width={600}
                height={400}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="md:hidden flex justify-center mt-3 mb-5"
      >
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5"
        >
          <a target="_blank" href="#">
            Live Link →
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
