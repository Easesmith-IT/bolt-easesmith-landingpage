import Image from "../PortfolioImage";
import { motion } from "motion/react";

const UIScreens = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="font-outfit py-5 md:py-10 px-5 container mx-auto">
        {/* Heading */}
        <div className="relative w-[35%] sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
          <motion.p
            className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            06
          </motion.p>

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
              <span className="underline md:decoration-4 md:underline-offset-4">
                UI Screens
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ================= ONBOARDING ================= */}
        <motion.div
          className="md:mt-8 relative"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Onboarding Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <Image
              src="/portfolio/sportx/onboarding-img.webp"
              alt="onboarding"
              width={800}
              height={400}
              className="mx-auto mt-10"
            />
          </motion.div>

          {/* Blob */}
          <motion.div
            className="absolute inset-x-0 top-[5%] -z-10 overflow-hidden flex justify-center"
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/portfolio/sportx/other-blob.webp"
              alt="blob"
              width={1200}
              height={600}
              className="w-[120%] max-w-none"
            />
          </motion.div>
        </motion.div>

        {/* ================= LOGIN ================= */}
        <motion.div
          className="mt-10 md:mt-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Sign up and Login Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <Image
              src="/portfolio/sportx/login.webp"
              alt="login"
              width={800}
              height={400}
              className="mx-auto mt-10"
            />
          </motion.div>
        </motion.div>

        {/* ================= HOME ================= */}
        <motion.div
          className="mt-10 md:mt-20 relative"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Home Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <Image
              src="/portfolio/sportx/home.webp"
              alt="home"
              width={800}
              height={400}
              className="mx-auto mt-10"
            />
          </motion.div>
        </motion.div>

        {/* ================= TIPS ================= */}
        <motion.div
          className="mt-10 md:mt-20 relative"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Tips Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <Image
              src="/portfolio/sportx/tips.webp"
              alt="tips"
              width={800}
              height={400}
              className="mx-auto mt-10"
            />
          </motion.div>

          {/* Blob */}
          <motion.div
            className="absolute inset-x-0 -top-[20%] -z-10 overflow-hidden flex justify-center"
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/portfolio/sportx/other-blob.webp"
              alt="blob"
              width={1200}
              height={600}
              className="w-[120%] max-w-none"
            />
          </motion.div>
        </motion.div>

        {/* ================= OTHER ================= */}
        <motion.div
          className="mt-10 md:mt-20 relative"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Other Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <Image
              src="/portfolio/sportx/other.webp"
              alt="other"
              width={800}
              height={400}
              className="w-full mt-10"
            />
          </motion.div>

          {/* Blob */}
          <motion.div
            className="absolute inset-x-0 -top-[10%] -z-10 overflow-hidden flex justify-center"
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/portfolio/sportx/other-blob.webp"
              alt="blob"
              width={1200}
              height={600}
              className="w-[120%] max-w-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UIScreens;
