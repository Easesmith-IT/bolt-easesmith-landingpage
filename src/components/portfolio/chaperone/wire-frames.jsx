import { H2 } from "@/components/shared/typography";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Wireframes = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax for left image
  const yLeft = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <div ref={ref} className="container mx-auto my-10 space-y-4 px-5 relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <H2 className="font-extrabold text-xl md:text-[40px] mt-6">
          4. High Fidelity Wireframes
        </H2>
      </motion.div>

      {/* LEFT DECOR IMAGE */}
      <motion.div
        style={{ y: yLeft }}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-[12%] hidden md:inline -left-21"
      >
        <Image
          src="/portfolio/chaperone/wireframe-left.png"
          alt="wireframe-left"
          width={200}
          height={350}
          className="object-contain"
        />
      </motion.div>

      {/* MAIN WIREFRAME */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="max-w-5xl mx-auto w-full h-auto mt-10"
      >
        <Image
          src="/portfolio/chaperone/wireframe.webp"
          alt="wireframe"
          width={600}
          height={450}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Wireframes;
