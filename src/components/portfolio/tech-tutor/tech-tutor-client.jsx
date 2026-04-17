import React from 'react'
import Hero from './hero'
import About from './about'
import StyleGuide from './style-guide'
import Typography from './typography'
import Wireframe from './wireframe'
import OnboardingScreens from './onboarding-screens'
import LoginScreens from './login-screen'
import HomeScreen from './home-screen'
import OtherScreens from './other-screens'

const TechTutorClient = () => {
  return (
    <div>
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
}

export default TechTutorClient