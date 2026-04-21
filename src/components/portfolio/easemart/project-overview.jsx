import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const ProjectOverview = () => {
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
            2
          </h2>
        </motion.div>

        <motion.h2
          className="font-bold text-lg sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Project Overview
        </motion.h2>
      </div>

      {/* ABOUT */}
      <div className="flex gap-10 flex-col-reverse md:flex-row justify-between mt-5 sm:mt-10 md:mt-15">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">About</h3>

          <motion.p
            className="font-open_sans text-xs sm:text-sm md:text-xl text-[#4B5563] max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At the heart of our innovation lies Easemart, an app designed to
            revolutionize the way you shop for groceries. With a user-friendly
            interface and a robust backend, Easemart offers a seamless shopping
            experience that mirrors the convenience and speed of Other ecommerce
            sites. Our mission is to simplify your daily shopping by bringing
            the supermarket to your fingertips. Whether it&apos;s the freshest
            produce or your favorite snacks, Easemart ensures that everything
            you need is just a tap away. We&apos;re not just an app; we&apos;re a movement
            towards smarter, more efficient living.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          animate={{ y: [0, -10, 0] }}
        >
          <Image
            src="/portfolio/easemart/about.svg"
            alt="about"
            width={400}
            height={400}
            unoptimized
          />
        </motion.div>
      </div>

      {/* SOLUTION */}
      <div className="flex gap-10 justify-between flex-col md:flex-row mt-5 sm:mt-10 md:mt-15">
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          animate={{ y: [0, -10, 0] }}
        >
          <Image
            src="/portfolio/easemart/solution.svg"
            alt="solution"
            width={400}
            height={400}
            unoptimized
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg sm:text-2xl md:text-3xl">
            Solutions
          </h3>

          <motion.p
            className="font-open_sans text-xs sm:text-sm md:text-xl text-[#4B5563] max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Easemart stands out with its lightning-fast delivery service,
            ensuring that your groceries are delivered to your door within
            minutes, not hours. Our intelligent inventory management system
            keeps track of what&apos;s in stock, so you never face the disappointment
            of unavailable items. We&apos;ve also integrated a dynamic pricing model
            that offers you the best deals in real-time, making sure that you
            get the most value out of your shopping. With Easemart, we&apos;re not
            just delivering groceries; we&apos;re delivering satisfaction,
            convenience, and peace of mind.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectOverview;
