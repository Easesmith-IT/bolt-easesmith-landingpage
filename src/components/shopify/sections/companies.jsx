import Image from "next/image";
import { motion } from "motion/react";

export const Companies = () => {
  return (
    <div className="py-10 md:py-20 container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 text-lg md:text-3xl font-bold text-(--color-para)"
      >
        We Are{" "}
        <span className="text-(--color-easesmith) underline italic font-black">
          INDIA’S #1
        </span>{" "}
        F&B Growth Agency
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.05,
        }}
        viewport={{ once: true }}
        className="flex justify-between flex-wrap gap-5 mt-6"
      >
        <Image
          src="/images/logos/1.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/2.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/3.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/4.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/5.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/1.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/2.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/3.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/4.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
      </motion.div>
    </div>
  );
};
