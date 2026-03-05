"use client";

import { motion } from "motion/react";

export default function FadeInBox() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 20 }}
      transition={{ duration: .7, ease: "linear" }}
      className="rounded-xl bg-card p-6 shadow-md w-1/2"
    >
      Fade-in Animation
    </motion.div>
  );
}
