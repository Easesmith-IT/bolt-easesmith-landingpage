"use client";

import ColorTypography from "./color-typography";
import Hero from "./hero";
import HomeScreens from "./home-screens";
import LoginSignupScreens from "./login-signup-screens";
import MobileScreens from "./mobile-screens";
import MobileWireframes from "./mobile-wireframes";
import OtherScreens from "./other-screens";
import ProjectOverview from "./project-overview";
import ServiceScreens from "./service-screens";
import WebsiteWireframes from "./website-wireframes";

const AbhicaresClient = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProjectOverview />
      <ColorTypography />
      <MobileWireframes />
      <MobileScreens />
      <WebsiteWireframes />
      <LoginSignupScreens />
      <HomeScreens />
      <ServiceScreens />
      <OtherScreens />
    </div>
  );
}

export default AbhicaresClient;