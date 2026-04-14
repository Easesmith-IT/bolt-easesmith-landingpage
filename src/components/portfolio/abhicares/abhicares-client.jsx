import Image from "next/image";
import Hero from "./hero";
import ProjectOverview from "./project-overview";
import ColorTypography from "./color-typography";
import MobileWireframes from "./mobile-wireframes";
import MobileScreens from "./mobile-screens";
import WebsiteWireframes from "./website-wireframes";
import LoginSignupScreens from "./login-signup-screens";
import HomeScreens from "./home-screens";
import ServiceScreens from "./service-screens";
import OtherScreens from "./other-screens";

const AbhicaresClient = () => {
  return (
    <div>
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