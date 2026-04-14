import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div className="mt-20 container mx-auto">
      <h3 className="text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
        About
      </h3>

      <div className="flex gap-10">
        <div>
          <h4 className="text-3xl font-bold mt-5 bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
            Project Overview
          </h4>
          <p className="font-poppins text-xl mt-5">
            The design of this legal counseling firm's website is meticulously
            developed to simplify the journey of individuals in search of
            reliable legal advice. Grounded in extensive user research, our team
            has gained deep insights into the unique needs and preferences of
            our clientele. This understanding has been pivotal in shaping a
            platform that is not only intuitive but also deeply aligned with the
            user's experience.
          </p>
        </div>

        <Image
          src="/portfolio/crc/overview-img.png"
          alt="overview-img"
          width={300}
          height={300}
          className="object-contain -mr-10 shrink-0"
        />
      </div>
      <div className="flex gap-10">
        <Image
          src="/portfolio/crc/problem-solving.png"
          alt="problem-solving"
          width={300}
          height={300}
          className="object-contain -mr-10 shrink-0"
        />

        <div>
          <h4 className="text-3xl font-bold mt-5 bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
            Problem statement
          </h4>
          <p className="font-poppins text-xl mt-5">
            "Despite the critical need for accessible legal guidance, many
            individuals find themselves overwhelmed by the complexity of
            navigating legal websites. The current digital landscape often
            presents a daunting array of information that can be difficult to
            decipher, leading to frustration and a sense of helplessness. This
            is compounded by a lack of intuitive design and user-centric
            features, which are essential for those seeking clear and reliable
            legal counsel. Our challenge is to design a platform that not only
            simplifies the search for legal advice but also instills confidence
            and clarity, transforming the way users interact with legal services
            online."
          </p>
        </div>
      </div>
      <div className="flex gap-10">
        <div>
          <h4 className="text-3xl font-bold mt-5 bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
            Solutions
          </h4>
          <p className="font-poppins text-xl mt-5">
            To effectively tackle the complexities and accessibility issues of
            traditional legal websites, our solution is a meticulously designed
            platform that prioritizes intuitive navigation and user-centric
            design. It features a rich repository of educational resources,
            personalized legal assistance, and robust accessibility options to
            cater to diverse user needs. Security measures are in place to
            ensure user privacy, while feedback mechanisms and mobile
            responsiveness are incorporated to enhance the overall user
            experience. Simplifying legal processes into understandable steps
            and fostering a supportive community space, we aim to empower users,
            making legal guidance a clear, secure, and supportive journey.
          </p>
        </div>

        <Image
          src="/portfolio/crc/business-solution.png"
          alt="business-solution"
          width={300}
          height={300}
          className="object-contain -mr-10 shrink-0"
        />
      </div>
    </div>
  );
}

export default About