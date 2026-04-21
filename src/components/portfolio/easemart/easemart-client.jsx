"use client";

import React from 'react'
import Hero from './hero'
import ProjectOverview from './project-overview'
import ColorTypography from './color-typography'
import UserPersona from './user-persona'
import Wireframes from './wireframes'
import UiScreens from './ui-screens'

const EasemartClient = () => {
  return (
    <div>
        <Hero />
        <ProjectOverview />
        <ColorTypography />
        <UserPersona />
        <Wireframes />
        <UiScreens />
    </div>
  )
}

export default EasemartClient