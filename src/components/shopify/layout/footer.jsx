"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const ShopifyFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.05,
      }}
      viewport={{ once: true }}
      className="bg-[#FAFAFA] py-14 px-5"
    >
      <Image
        src="/images/easesmith-logo.png"
        alt="Logo"
        width={300}
        height={100}
        className="mx-auto "
      />
      {/* <Image
        src="/images/easesmith-logo.png"
        alt="Easesmith"
        width={64}
        height={56}
        className="h-14 w-16 mx-auto"
      /> */}

      <div className="flex justify-center items-center gap-5 mt-5">
        <Image src="/images/insta.svg" alt="Insta" width={30} height={30} />
        <Image src="/images/twitter.svg" alt="Twitter" width={30} height={30} />
        <Image src="/images/fb.svg" alt="FB" width={30} height={30} />
      </div>

      <div className="flex justify-center items-center mt-6">
        <Button className="px-10 md:px-16 py-5 md:py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:border-(--color-easesmith) hover:bg-white hover:text-(--color-easesmith)">
          <Link
            target="_blank"
            href="https://calendly.com/mavyakunal/business-call"
          >
            Let&apos;s Talk
          </Link>
        </Button>
      </div>
    </motion.footer>
  );
};
