import Image from "../PortfolioImage";
import Navbar from "./navbar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative w-full md:min-h-screen overflow-hidden">
      <Navbar />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -left-10 sm:left-0 top-[20%]"
      >
        <Image
          src="/portfolio/chaperone/plant-left.png"
          alt="plant"
          width={140}
          height={220}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute -right-20 sm:right-0 top-[20%]"
      >
        <Image
          src="/portfolio/chaperone/plant-right.png"
          alt="plant"
          width={180}
          height={260}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="justify-end container mx-auto hidden sm:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="flex justify-center items-center mt-16 relative">
        {/* DESKTOP */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="relative z-10 w-[200px] md:w-[450px]"
        >
          <Image
            src="/portfolio/chaperone/desktop.png"
            alt="desktop"
            width={600}
            height={450}
            priority
            sizes="(max-width: 768px) 200px, 450px"
            className="w-full h-auto"
          />
        </motion.div>

        {/* TABLET */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="absolute right-[10%] bottom-[-10px] md:right-[30%] md:bottom-[-20px] z-20 w-[120px] md:w-[250px]"
        >
          <Image
            src="/portfolio/chaperone/tablet.png"
            alt="tablet"
            width={350}
            height={300}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* WATERMARK TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="text-4xl text-center mt-10 xl:mt-0 lg:text-[60px] xl:text-[140px] font-semibold text-white stroke-text tracking-wide"
      >
        Website Design
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex sm:hidden justify-end container mx-auto mt-10 px-5"
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </motion.div>
    </section>
  );
}
