import { motion } from "motion/react";
import Image from "../PortfolioImage";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6"
    >
      {/* LEFT LOGO */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/portfolio/chaperone/chaperone-logo.png"
          alt="Chaperone Logo"
          width={240}
          height={320}
          className="object-contain"
        />
      </motion.div>

      {/* RIGHT LOGO */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
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
    </motion.header>
  );
}
