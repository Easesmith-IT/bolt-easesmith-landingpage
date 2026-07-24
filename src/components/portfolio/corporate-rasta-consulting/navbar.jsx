import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
        className="text-2xl md:text-4xl font-bold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
      >
        Case study
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
