"use client";

import About from "./about";
import CategoryScreens from "./category-screens";
import ChatScreens from "./chat-screen";
import DocumentScreens from "./document-screens";
import Hero from "./hero";
import LoginScreens from "./login-screens";
import RequestScreens from "./request-screens";
import ServiceScreens from "./service-screen";
import Typograph from "./typograph";
import WelcomeScreens from "./welcome-screen";
import Wireframes from "./wireframes";

const CorporateRaastaClientDashboard = () => {
  return (
    <div className="portfolio-case-study overflow-hidden">
      <Hero />
      <About />
      <Typograph />
      <Wireframes />
      <LoginScreens />
      <WelcomeScreens />
      <CategoryScreens />
      <RequestScreens />
      <ChatScreens />
      <DocumentScreens />
      <ServiceScreens />
    </div>
  );
};

export default CorporateRaastaClientDashboard;
