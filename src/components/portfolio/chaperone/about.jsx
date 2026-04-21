import { H1, H2 } from "@/components/shared/typography";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="container mx-auto mt-10 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <H2 className="font-extrabold text-xl md:text-[40px] mt-6">1. About</H2>
      </motion.div>

      <div className="relative mt-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl rounded-2xl rounded-tr-none border border-green-200 bg-[#eef3ef] p-6 md:p-8"
        >
          {/* Title */}
          <h2 className="text-base md:text-2xl font-bold text-gray-800 tracking-wide">
            OVERVIEW
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-lg">
            This is a website for an Plant selling website company, aiming to
            create a modern, user-friendly platform showcasing the client's
            services and expertise. The website was designed using modern UI/UX
            design tools and technologies to ensure compatibility across devices
            and browsers, ultimately enhancing the client's online presence and
            driving engagement and lead generation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-1 hidden sm:inline -right-26"
        >
          <Image
            src="/portfolio/chaperone/about-right.png"
            alt="desktop"
            width={150}
            height={250}
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="relative mt-10 md:mt-0 md:p-10 md:flex md:justify-end">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute hidden md:inline -top-9 -left-26"
        >
          <Image
            src="/portfolio/chaperone/about-left.png"
            alt="about left"
            width={200}
            height={100}
            className="object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full rounded-2xl rounded-tr-none border border-green-200 bg-[#eef3ef] p-6 md:p-8"
        >
          {/* Title */}
          <h2 className="text-base md:text-2xl font-bold text-gray-800 tracking-wide">
            PROBLEM
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-relaxed w-full text-sm md:text-lg">
            The client's existing website was outdated, difficult to navigate,
            and did not effectively showcase their expertise in plant design.
            They needed a redesign that would modernize the site, improve user
            experience, and highlight their services and projects.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full mt-10 rounded-2xl rounded-tr-none border border-green-200 bg-[#eef3ef] p-6 md:p-8"
      >
        {/* Title */}
        <h2 className="text-base md:text-2xl font-bold text-gray-800 tracking-wide">
          SOLUTION
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-lg">
          For Chapter one Plants- website redesign, our UI/UX design solution
          focused on creating a modern, user-friendly experience that reflects
          the company's expertise in plant sales. We revamped the site's
          information architecture, ensuring intuitive navigation and clear
          pathways to key content. The visual design incorporated Chapter one's
          brand identity, with a clean layout, professional typography, and
          high-quality imagery showcasing their projects. Interactive elements
          such as hover effects were used to engage users and highlight
          important information. By prioritizing user experience and visual
          appeal, our design aimed to elevate its online presence and drive
          increased engagement from potential clients.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
