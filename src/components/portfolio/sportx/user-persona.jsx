import Image from "next/image";
import React from "react";

const UserPersona = () => {
  return (
    <div className="mt-10 font-outfit gap-4 sm:gap-0 py-5 md:py-10 px-5 container mx-auto grid grid-cols-2">
      <div>
        <div className="relative w-[35%] sm:w-[20%] ml-10 sm:ml-0 sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
          <p className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none">
            03
          </p>

          <div className="relative text-center">
            <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
              <span className="underline md:decoration-4 md:underline-offset-4">
                User Persona
              </span>
            </h2>
          </div>
        </div>

        <Image
          src="/portfolio/sportx/user.png"
          alt="user"
          width={310}
          height={200}
          className="w-[130px] sm:w-[150px] md::w-[310px]"
        />

        <div className="max-w-[500px] bg-[#FFFFFF] shadow-2xl p-3 -mt-10 sm:-mt-20 md:-mt-28 relative z-2">
          <h3 className="text-lg sm:text-2xl md:text-5xl font-bold text-end -mt-7 sm:-mt-10 text-[#FFD700]">
            Arjun
          </h3>
          <h4 className="font-semibold text-[7px] sm:text-[10px] md:text-lg">
            Demographics:
          </h4>
          <p className="font-semibold text-[7px] sm:text-[10px] md:text-lg">
            - Age: 29
          </p>
          <p className="font-semibold text-[7px] sm:text-[10px] md:text-lg">
            - Location: Bengaluru, India
          </p>
          <p className="font-semibold text-[7px] sm:text-[10px] md:text-lg">
            - Occupation: Software Engineer
          </p>
          <p className="font-semibold text-[7px] sm:text-[10px] md:text-lg">
            - Education: Bachelor's in Computer Science
          </p>
        </div>
      </div>

      <div className="shadow-md p-4 space-y-5 text-[7px] sm:text-[10px] md:text-base">
        <div>
          Psychographics:
          <p>- Interests: Cricket, technology, social media</p>
          <p>- Personality: Analytical, detail-oriented, social</p>
        </div>
        <div>
          Behavioral Traits:
          <p>- Technology Use: Highly proficient, early adopter of new apps</p>
          <p>
            - Cricket Engagement: Passionate fan, follows multiple leagues,
            plays amateur cricket on weekends
          </p>
          <p>
            - App Usage: Prefers apps with customizable content, minimal ads,
            and user-friendly interfaces
          </p>
        </div>
        <div>
          Goals:
          <p>
            - Primary Goal: To stay updated with the latest cricket scores and
            news in real-time
          </p>
          <p>
            - Secondary Goal: To connect with a community of like-minded cricket
            fans
          </p>
        </div>

        <div>
          Challenges:
          <p>
            - Information Overload: Struggles to find relevant content amidst
            the clutter of generic updates
          </p>
          <p>
            - Time Constraints: Needs quick, concise updates due to a busy work
            schedule
          </p>
        </div>
        <div>
          What Arjun Values in a Cricket Info App:
          <p>
            - Personalization: An app that learns his preferences and tailors
            content accordingly
          </p>
          <p>- Accuracy: Real-time, reliable updates without delays</p>
          <p>
            {" "}
            - Usability: A clean, intuitive interface that makes navigation
            simple Arjun represents the ideal user for the cricket info app,
            seeking a blend of personalized content, accuracy, and ease of use
            to enhance his experience as a cricket enthusiast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPersona;
