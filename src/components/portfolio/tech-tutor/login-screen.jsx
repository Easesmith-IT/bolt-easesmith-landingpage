import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const LoginScreens = () => {
  return (
    <div className="mx-auto container px-5 py-5 md:py-10">
      {/* TITLE */}
      <div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#212121] select-none pointer-events-none"
        >
          Login
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl text-center mt-1"
        >
          Login screens
        </motion.h3>
      </div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <Image
          src="/portfolio/tech-tutor/login-screen-img.svg"
          alt="logo"
          width={1000}
          height={400}
          className="mx-auto mt-10 md:mt-15"
        />
      </motion.div>
    </div>
  );
};

export default LoginScreens;
