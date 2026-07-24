import { Button } from "@/components/ui/button";
import Image from "../PortfolioImage";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="w-full flex flex-col gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/portfolio/bhoomie-reality/bhoomie-reality.svg"
          alt="bhoomie-reality"
          width={180}
          height={120}
          className="object-contain w-36 sm:w-50"
        />
      </motion.div>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button className="bg-blue-600 hidden md:inline hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </motion.div>
    </header>
  );
}
