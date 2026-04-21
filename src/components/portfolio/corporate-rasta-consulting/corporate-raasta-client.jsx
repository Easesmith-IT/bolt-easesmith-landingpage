"use client";

import React from 'react'
import Hero from './hero';
import About from './about';
import StyleGuide from './style-guide';
import Wireframes from './wireframes';
import DesignScreens from './design-screens';
import DashboardScreens from './dashboard-screens';

const CorporateRaastaClient = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <StyleGuide />
      <Wireframes />
      <DesignScreens />
      <DashboardScreens />
    </div>
  );
}

export default CorporateRaastaClient;