import Image from "next/image";
import React from "react";

const UserPersona = () => {
  return (
    <div className="relative">
      <Image
        src="/portfolio/easemart/persona-bg.svg"
        alt="persona-bg"
        width={310}
        height={350}
        className="absolute left-0 top-0 -z-1 w-40 sm:w-80"
      />
      <div className="py-5 md:py-10 px-5 container mx-auto font-aclonica">
        <div className="flex gap-1 items-center">
          <div className="size-10 sm:size-18 md:size-24 border-2 md:border-4 border-white text-white rounded-full flex justify-center items-center">
            <h2 className="font-extrabold font-open_sans text-xl sm:text-3xl md:text-5xl">
              3
            </h2>
          </div>
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
            <span className="text-white">User</span> Persona
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <Image
              src="/portfolio/easemart/user.svg"
              alt="user"
              width={310}
              height={350}
              className=""
            />

            <div className="bg-[#85C125] p-4 -mt-10 relative z-1 sm:w-80">
              <h3 className="text-xl sm:text-2xl text-white text-center">
                Priya Singh
              </h3>
              <div className="font-epilogue text-xs sm:text-base text-white mt-2">
                <p>Demographics:</p>
                <ul className="list-disc ml-4 mt-1">
                  <li>Age: 32 </li>
                  <li>Location: Bengaluru, India</li>
                  <li>Occupation: Software Engineer</li>
                  <li>Education: Master’s in Computer Science</li>
                  <li>Family Status: Married with one child</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="font-epilogue text-xs sm:text-base">
            <div>
              <h4 className="text-[#5D871A] font-medium">Behaviors:</h4>
              <ul className="list-disc ml-4 mt-1">
                <li>Priya shops for groceries online at least twice a week.</li>
                <li>
                  She seeks quick delivery options due to her hectic work-life
                  balance.
                </li>
                <li>Prefers a user-friendly interface with easy navigation.</li>
                <li>
                  Looks for apps that offer real-time updates and transparency
                  in pricing.
                </li>
              </ul>
            </div>
            <div className="bg-[#e8e7e7] mt-4 p-2">
              <div>
                <h4 className="text-[#5D871A] font-medium">
                  Needs and Goals:{" "}
                </h4>
                <ul className="list-disc ml-4 mt-1">
                  <li>
                    Priya needs a reliable service that can accommodate her
                    spontaneous shopping habits.
                  </li>
                  <li>
                    She aims to minimize time spent on grocery shopping without
                    compromising on quality.
                  </li>
                  <li>
                    Wants an app that provides healthy and organic food options
                    for her family.
                  </li>
                  <li>
                    Seeks personalized recommendations and offers based on her
                    shopping history.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#5D871A] font-medium">Pain Points: </h4>
                <ul className="list-disc ml-4 mt-1">
                  <li>Frustrated with apps that have long delivery times.</li>
                  <li>
                    Dislikes services that frequently run out of stock on
                    essential items.
                  </li>
                  <li>
                    Annoyed by complicated checkout processes and hidden fees.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-[#5D871A] font-medium">Technology Usage:</h4>
              <ul className="list-disc ml-4 mt-1">
                <li>Comfortable with both Android and iOS platforms.</li>
                <li>Uses mobile payment services for transactions.</li>
                <li>
                  Engages with apps that have a strong social media presence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPersona;
