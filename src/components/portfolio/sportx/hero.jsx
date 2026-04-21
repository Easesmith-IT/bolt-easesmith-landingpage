
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="relative sm:min-h-screen overflow-hidden">
      {/* HEADER */}
      <header className="w-full flex flex-col gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/portfolio/chaperone/easesmith-logo.png"
            alt="Easesmith Logo"
            width={240}
            height={320}
            className="object-contain -mr-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
            <a target="_blank" href="#">
              Live Link →
            </a>
          </Button>
        </motion.div>
      </header>

      {/* BACKGROUND FLOATING IMAGES */}
      {[
        {
          src: "/portfolio/sportx/hero-img1.png",
          className: "absolute -top-1 left-0 -z-1",
        },
        {
          src: "/portfolio/sportx/hero-img3.png",
          className: "absolute bottom-0 left-0 -z-1",
        },
        {
          src: "/portfolio/sportx/hero-img4.png",
          className: "absolute bottom-0 left-30 -z-1",
        },
        {
          src: "/portfolio/sportx/hero-img5.png",
          className: "absolute bottom-0 right-0 -z-1",
        },
        {
          src: "/portfolio/sportx/hero-img6.png",
          className: "absolute bottom-0 right-[20%] -z-1",
        },
        {
          src: "/portfolio/sportx/heroimg.png",
          className: "absolute top-0 left-30 -z-1",
        },
      ].map((img, i) => (
        <motion.div
          key={i}
          className={img.className}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            // y: [0, -20, 0], // floating loop
          }}
          // transition={{
          //   duration: 6 + i,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          //   delay: i * 0.2,
          // }}
        >
          <Image src={img.src} alt="Hero" width={240} height={320} />
        </motion.div>
      ))}

      {/* MAIN CONTENT */}
      <div className="flex gap-5 items-start justify-between">
        <div className="ml-5 sm:ml-20 mt-10 lg:mt-20">
          <motion.h1
            className="text-5xl md:text-9xl font-semibold"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            SportX
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl font-medium mt-4 sm:mt-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A Mobile App
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/portfolio/sportx/mobile.png"
            alt="mobile"
            width={350}
            height={120}
            className="lg:mr-[10%]"
          />
        </motion.div>
      </div>

      {/* PHONES STACK */}
      <div className="hidden sm:flex items-end absolute left-[5%] sm:left-[10%] lg:left-[15%] bottom-0">
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="-mr-[6%] relative z-2"
        >
          <Image
            src="/portfolio/sportx/phone1.png"
            alt="Hero"
            width={300}
            height={220}
            className="w-[150px] md:w-[200px] lg:w-[300px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/portfolio/sportx/phone2.png"
            alt="Hero"
            width={300}
            height={320}
            className="w-[150px] md:w-[200px] lg:w-[300px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
