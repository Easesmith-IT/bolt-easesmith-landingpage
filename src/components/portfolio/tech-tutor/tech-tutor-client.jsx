"use client";

import About from "./about";
import Hero from "./hero";
import HomeScreen from "./home-screen";
import LoginScreens from "./login-screen";
import OnboardingScreens from "./onboarding-screens";
import OtherScreens from "./other-screens";
import StyleGuide from "./style-guide";
import Typography from "./typography";
import Wireframe from "./wireframe";

const TechTutorClient = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <StyleGuide />
      <Typography />
      <Wireframe />
      <OnboardingScreens />
      <LoginScreens />
      <HomeScreen />
      <OtherScreens />
    </div>
  );
};

export default TechTutorClient;
