import React from "react";
import { motion } from "motion/react";

const PortfolioSvg = ({
  src,
  alt,
  width,
  height,
  className = "",
  sizes = "100vw",
  loading = "lazy",
  fetchPriority = "low",
}) => {
  return (
    // Local SVG artwork is served as-is, so a native img is intentional here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      sizes={sizes}
      className={className}
      style={{ height: "auto" }}
    />
  );
};

const UiScreens = () => {
  return (
    <div className="overflow-hidden">
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
              5
            </h2>
          </motion.div>

          <motion.h1
            className="font-bold text-xl sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            UI Screens
          </motion.h1>
        </div>

        {/* Onboarding */}
        <motion.div
          className="mt-4 md:mt-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center"
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
            <PortfolioSvg
              src="/portfolio/easemart/onboarding.webp"
              alt="onboarding"
              width={800}
              height={400}
              className="mx-auto mt-5 sm:mt-10 w-full max-w-[800px]"
              sizes="(max-width: 640px) 100vw, 800px"
            />
          </motion.div>
        </motion.div>

        {/* Login */}
        <motion.div
          className="mt-10 md:mt-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Login & Signup Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/login.webp"
              alt="login"
              width={800}
              height={400}
              className="mx-auto mt-5 sm:mt-10 w-full max-w-[800px]"
              sizes="(max-width: 640px) 100vw, 800px"
            />
          </motion.div>
        </motion.div>

        {/* Review */}
        <motion.div
          className="mt-10 md:mt-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Review Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/review.webp"
              alt="review"
              width={800}
              height={400}
              className="mx-auto mt-5 sm:mt-10 w-full max-w-[800px]"
              sizes="(max-width: 640px) 100vw, 800px"
            />
          </motion.div>
        </motion.div>

        {/* Home */}
        <motion.div
          className="mt-10 md:mt-20 relative"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-sm md:text-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Home Screen
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/home.webp"
              alt="home"
              width={250}
              height={400}
              className="mx-auto mt-5 sm:mt-10 w-full max-w-[250px]"
              sizes="250px"
            />
          </motion.div>

          {/* SIDE FLOATING PHONES */}
          <motion.div
            className="absolute top-0 -z-1 -left-25"
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/home-phone-left.webp"
              alt="home"
              width={400}
              height={400}
              className="w-full max-w-[400px]"
              sizes="400px"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 -z-1 -right-25"
            animate={{ y: [0, -20, 0], rotate: [0, -2, 2, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/home-phone-right.webp"
              alt="home"
              width={400}
              height={400}
              className="w-full max-w-[400px]"
              sizes="400px"
            />
          </motion.div>
        </motion.div>

        {/* Delivery */}
        <motion.div
          className="mt-10 md:mt-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3 className="text-sm md:text-3xl text-center">
            Delivery Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/delivery.webp"
              alt="delivery"
              width={800}
              height={400}
              className="mx-auto mt-5 sm:mt-10 w-full max-w-[800px]"
              sizes="(max-width: 640px) 100vw, 800px"
            />
          </motion.div>
        </motion.div>

        {/* Payment */}
        <motion.div
          className="mt-10 md:mt-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3 className="text-sm md:text-3xl text-center">
            Payment screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/payment.webp"
              alt="payment"
              width={900}
              height={400}
              className="mx-auto mt-5 sm:mt-10 w-full max-w-[900px]"
              sizes="(max-width: 640px) 100vw, 900px"
            />
          </motion.div>
        </motion.div>

        {/* Other */}
        <motion.div
          className="mt-10 md:mt-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h3 className="text-sm md:text-3xl text-center">
            Other Screens
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
          >
            <PortfolioSvg
              src="/portfolio/easemart/other.webp"
              alt="other"
              width={1000}
              height={400}
              className="mx-auto mt-5 sm:mt-10 w-full max-w-[1000px]"
              sizes="(max-width: 640px) 100vw, 1000px"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UiScreens;
