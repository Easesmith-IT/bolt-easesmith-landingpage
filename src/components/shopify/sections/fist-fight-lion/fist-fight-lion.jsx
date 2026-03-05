import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export const FistFightALion = () => {
  return (
    <div className="py-10 md:py-20 container mx-auto px-6">
      <motion.div
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
      >
        <h2 className="text-3xl md:text-6xl font-black text-(--color-para) text-center uppercase">
          The Fist Fight a Lion <br />
          <span className="text-(--color-easesmith)">Guarantee</span>
        </h2>
        <p className="max-w-lg mx-auto text-center text-(--color-para) my-5">
          We’re so confident your new site will outperform your old one, <br />{" "}
          you’ll be ready to fist fight a lion just to keep it live.
        </p>
        <p className="text-(--color-easesmith) font-bold text-center md:text-lg">
          No final payment until your site beats the old one <br /> — within 30
          days.
        </p>
        <p className="text-[#D53D3D] font-bold text-center md:text-lg my-3">
          If it doesn’t, you don’t pay!
        </p>
        <p className="text-(--color-easesmith) font-bold text-center md:text-lg">
          If it flops, you get a ₹75,000 CRO audit by a <br /> certified expert
          — absolutely free
        </p>

        <div className="mt-8 flex justify-center items-center">
          <Button
            asChild
            className="px-8 py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:bg-(--color-para) hover:text-(--color-easesmith)"
          >
            <Link
              target="_blank"
              href="https://calendly.com/mavyakunal/business-call"
            >
              Increase Your Conversions Today
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
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
      >
        <Image
          src="/images/lion-1.png"
          alt="Lion"
          width={500}
          height={700}
          className="mx-auto mt-8"
        />
      </motion.div>

      <motion.div
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
      >
        <h3 className="text-xl md:text-4xl font-black leading-8 md:leading-12 text-center mt-6">
          TURN YOUR <span className="text-(--color-easesmith)">VISITORS</span>{" "}
          INTO <br />
          <span className="text-(--color-easesmith) text-2xl md:text-4xl underline">
            PAYING CUSTOMERS
          </span>
        </h3>
        <p className="text-center text-(--color-para) mt-3 md:text-lg">
          We only take on
        </p>
        <p className="font-bold italic text-center text-lg text-(--color-para)">
          5 new F&B projects per month
        </p>
        <p className="text-center text-lg text-(--color-para)">
          and they fill up{" "}
          <span className="text-(--color-easesmith) font-bold">fast</span>
        </p>

        <h3 className="text-3xl md:text-4xl font-black leading-12 uppercase text-center mt-6">
          Book a call{" "}
          <span className="text-(--color-easesmith) underline">now!</span>
        </h3>

        <p className="text-[#D53D3D] uppercase font-bold text-center md:text-lg">
          before the bonuses disappear
        </p>
        
        <div className="mt-8 flex justify-center items-center">
          <Button className="px-8 py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:bg-(--color-para) hover:text-(--color-easesmith)">
            <Link
              target="_blank"
              href="https://calendly.com/mavyakunal/business-call"
            >
              Increase Your Conversions Today
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
