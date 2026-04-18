import React from "react";
import Hero from "./hero";
import ProjectOverview from "./project-overview";
import ColorTypography from "./color-typography";
import UserPersona from "./user-persona";
import InformationArchitecture from "./information-architecture";
import Wireframes from "./wireframes";
import UIScreens from "./ui-screens";

const SportxClient = () => {
  return (
    <div>
      <Hero /> {/* remain responsive */}
      <ProjectOverview /> {/* remain responsive */}
      <ColorTypography /> {/* remain responsive */}
      <UserPersona />
      <InformationArchitecture />
      <Wireframes />
      <UIScreens />
    </div>
  );
};

export default SportxClient;
